/* ────────────────────────────────────────────
   PHONE COMPARE — APP LOGIC
   ──────────────────────────────────────────── */

const MAX_SELECT = 5;
let selected = []; // array of device ids

// ── DOM refs ────────────────────────────────
const deviceGrid      = document.getElementById('deviceGrid');
const compareBtn      = document.getElementById('compareBtn');
const clearBtn        = document.getElementById('clearBtn');
const selectedCount   = document.getElementById('selectedCount');
const compareSection  = document.getElementById('compareSection');
const compareHeaderRow= document.getElementById('compareHeaderRow');
const specTable       = document.getElementById('specTable');
const chartsSection   = document.getElementById('chartsSection');

// ── Brand accent colours ─────────────────────
const BRAND_COLORS = {
  Samsung:  '#1428a0',
  Apple:    '#555',
  Google:   '#4285f4',
  OnePlus:  '#eb0029',
  Xiaomi:   '#ff6900',
  Sony:     '#00439c',
  Asus:     '#e1000f',
  Motorola: '#006eb4',
  Nothing:  '#fff',
};

// ── Build picker grid ────────────────────────
function buildGrid() {
  deviceGrid.innerHTML = '';
  DEVICES.forEach(d => {
    const card = document.createElement('div');
    card.className = 'device-card';
    card.dataset.id = d.id;

    card.innerHTML = `
      <div class="card-check">✓</div>
      <div class="phone-img-wrap">
        <div class="img-placeholder">
          <span class="phone-icon">📱</span>
          <span class="img-dim">${d.image_dimensions}<br>Image Placeholder</span>
        </div>
      </div>
      <span class="card-brand">${d.brand}</span>
      <span class="card-model">${d.model}</span>
      <span class="card-price">${d.misc.price.split(' / ')[0]}</span>
    `;

    card.addEventListener('click', () => toggleDevice(d.id));
    deviceGrid.appendChild(card);
  });
}

// ── Toggle selection ─────────────────────────
function toggleDevice(id) {
  if (selected.includes(id)) {
    selected = selected.filter(x => x !== id);
  } else {
    if (selected.length >= MAX_SELECT) return;
    selected.push(id);
  }
  updatePickerUI();
}

function updatePickerUI() {
  document.querySelectorAll('.device-card').forEach(card => {
    const id = parseInt(card.dataset.id);
    const isSel = selected.includes(id);
    const isFull = selected.length >= MAX_SELECT && !isSel;

    card.classList.toggle('selected', isSel);
    card.classList.toggle('disabled', isFull);
  });

  selectedCount.textContent = selected.length;
  compareBtn.disabled = selected.length < 2;
}

// ── Buttons ───────────────────────────────────
compareBtn.addEventListener('click', buildCompare);

clearBtn.addEventListener('click', () => {
  selected = [];
  updatePickerUI();
  compareSection.classList.add('hidden');
  chartsSection.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Build comparison ──────────────────────────
function buildCompare() {
  const devs = selected.map(id => DEVICES.find(d => d.id === id));
  buildHeaderRow(devs);
  buildSpecTable(devs);
  buildCharts(devs);

  compareSection.classList.remove('hidden');
  chartsSection.classList.remove('hidden');

  compareSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Header row ────────────────────────────────
function buildHeaderRow(devs) {
  // column count = label col + N device cols
  const cols = devs.length + 1;
  compareHeaderRow.style.gridTemplateColumns = `180px repeat(${devs.length}, 1fr)`;
  compareHeaderRow.innerHTML = '';

  // empty corner
  const corner = document.createElement('div');
  corner.className = 'col-header';
  corner.style.background = 'var(--bg)';
  corner.innerHTML = `<span style="font-size:11px;color:var(--text-lo);">DEVICE</span>`;
  compareHeaderRow.appendChild(corner);

  devs.forEach(d => {
    const col = document.createElement('div');
    col.className = 'col-header';
    col.innerHTML = `
      <div class="phone-img-wrap">
        <div class="img-placeholder">
          <span class="phone-icon">📱</span>
          <span class="img-dim">${d.image_dimensions}</span>
        </div>
      </div>
      <span class="card-brand">${d.brand}</span>
      <span class="card-model">${d.model}</span>
      <span class="col-price">${d.misc.price.split(' / ')[0]}</span>
      <button class="col-remove" data-id="${d.id}">✕ Remove</button>
    `;
    compareHeaderRow.appendChild(col);
  });

  compareHeaderRow.querySelectorAll('.col-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      selected = selected.filter(id => id !== parseInt(btn.dataset.id));
      updatePickerUI();
      if (selected.length < 2) {
        compareSection.classList.add('hidden');
        chartsSection.classList.add('hidden');
      } else {
        buildCompare();
      }
    });
  });
}

// ── Spec table builder ────────────────────────
function buildSpecTable(devs) {
  specTable.innerHTML = '';
  const cols = devs.length;
  const gridCols = `180px repeat(${cols}, 1fr)`;

  const SECTIONS = [
    {
      label: '📋 Overview',
      rows: [
        { label: 'Announced',     fn: d => d.launch.announced },
        { label: 'Status',        fn: d => d.launch.status },
        { label: 'Network',       fn: d => d.network },
      ]
    },
    {
      label: '📐 Body',
      rows: [
        { label: 'Dimensions',    fn: d => d.body.dimensions },
        { label: 'Weight',        fn: d => d.body.weight, cmp: 'low' },
        { label: 'Build',         fn: d => d.body.build },
        { label: 'SIM',           fn: d => d.body.sim },
        { label: 'Protection',    fn: d => d.body.protection },
        { label: 'Body Features', fn: d => d.body.features.length ? d.body.features.join(' · ') : '—' },
      ]
    },
    {
      label: '🖥️ Display',
      rows: [
        { label: 'Type',          fn: d => d.display.type },
        { label: 'Refresh Rate',  fn: d => d.display.refresh, cmp: 'high' },
        { label: 'Screen Size',   fn: d => d.display.size, cmp: 'high' },
        { label: 'Resolution',    fn: d => d.display.resolution },
        { label: 'Peak Brightness',fn: d => d.display.brightness, cmp: 'high' },
        { label: 'Protection',    fn: d => d.display.protection },
      ]
    },
    {
      label: '⚙️ Platform',
      rows: [
        { label: 'OS',            fn: d => d.platform.os },
        { label: 'Chipset',       fn: d => d.platform.chipset },
        { label: 'CPU',           fn: d => d.platform.cpu },
        { label: 'GPU',           fn: d => d.platform.gpu },
      ]
    },
    {
      label: '💾 Memory',
      rows: [
        { label: 'Card Slot',     fn: d => d.memory.card_slot === 'No' ? '<span class="no-badge">No</span>' : '<span class="yes-badge">Yes</span>', html: true },
        { label: 'Internal',      fn: d => d.memory.internal },
      ]
    },
    {
      label: '📷 Main Camera',
      rows: [
        { label: 'Configuration', fn: d => d.main_camera.config },
        { label: 'Main Lens',     fn: d => d.main_camera.main },
        { label: 'Telephoto',     fn: d => d.main_camera.tele2 || d.main_camera.tele1 || '—' },
        { label: 'Ultrawide',     fn: d => d.main_camera.ultra || '—' },
        { label: 'Video',         fn: d => d.main_camera.video },
      ]
    },
    {
      label: '🤳 Selfie Camera',
      rows: [
        { label: 'Lens',          fn: d => d.selfie.mp },
        { label: 'Video',         fn: d => d.selfie.video },
      ]
    },
    {
      label: '🔊 Sound',
      rows: [
        { label: 'Speakers',      fn: d => d.sound.speakers },
        { label: '3.5mm Jack',    fn: d => d.sound.jack === 'Yes'
            ? '<span class="yes-badge">Yes</span>'
            : '<span class="no-badge">No</span>', html: true },
        { label: 'Audio Features',fn: d => d.sound.features || '—' },
      ]
    },
    {
      label: '📡 Connectivity',
      rows: [
        { label: 'Wi-Fi',         fn: d => d.comms.wlan },
        { label: 'Bluetooth',     fn: d => d.comms.bt },
        { label: 'NFC',           fn: d => d.comms.nfc === 'Yes'
            ? '<span class="yes-badge">Yes</span>'
            : '<span class="no-badge">No</span>', html: true },
        { label: 'USB',           fn: d => d.comms.usb },
      ]
    },
    {
      label: '🔋 Battery',
      rows: [
        { label: 'Capacity',      fn: d => d.battery.capacity, cmp: 'high' },
        { label: 'Wired Charging',fn: d => d.battery.wired },
        { label: 'Wireless',      fn: d => d.battery.wireless || '—' },
        { label: 'Reverse',       fn: d => d.battery.reverse || '—' },
      ]
    },
    {
      label: '📊 Benchmarks',
      rows: [
        { label: 'AnTuTu',        fn: d => d.tests.antutu.toLocaleString(), cmp: 'high', raw: d => d.tests.antutu },
        { label: 'Geekbench v6',  fn: d => d.tests.geekbench.toLocaleString(), cmp: 'high', raw: d => d.tests.geekbench },
        { label: '3DMark',        fn: d => d.tests['3dmark'].toLocaleString(), cmp: 'high', raw: d => d.tests['3dmark'] },
        { label: 'Brightness',    fn: d => d.tests.brightness ? d.tests.brightness + ' nits' : '—', cmp: 'high', raw: d => d.tests.brightness || 0 },
        { label: 'Battery Life',  fn: d => d.tests.battery_h + ' h', cmp: 'high', raw: d => d.tests.battery_h },
      ]
    },
    {
      label: '🎨 Miscellaneous',
      rows: [
        { label: 'Colors',        fn: d => d.misc.colors.map(c => `<span class="tag">${c}</span>`).join(''), html: true },
        { label: 'Price',         fn: d => d.misc.price },
      ]
    },
  ];

  SECTIONS.forEach(section => {
    const group = document.createElement('div');
    group.className = 'spec-group';

    const groupLabel = document.createElement('div');
    groupLabel.className = 'spec-group-label';
    groupLabel.textContent = section.label;
    group.appendChild(groupLabel);

    section.rows.forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.className = 'spec-row';
      rowEl.style.gridTemplateColumns = gridCols;

      // label cell
      const labelCell = document.createElement('div');
      labelCell.className = 'spec-row-label label-cell';
      labelCell.textContent = row.label;
      rowEl.appendChild(labelCell);

      // find best value for highlight
      let bestIdx = -1;
      if (row.cmp && row.raw) {
        const vals = devs.map(d => row.raw(d));
        const best = row.cmp === 'high' ? Math.max(...vals) : Math.min(...vals);
        bestIdx = vals.indexOf(best);
      }

      devs.forEach((d, i) => {
        const cell = document.createElement('div');
        cell.className = 'spec-cell';
        if (i === bestIdx) cell.classList.add('highlight');

        const val = row.fn(d);
        if (row.html) {
          cell.innerHTML = val;
        } else {
          cell.textContent = val;
        }
        rowEl.appendChild(cell);
      });

      group.appendChild(rowEl);
    });

    specTable.appendChild(group);
  });
}

// ── Charts ────────────────────────────────────
function buildCharts(devs) {
  renderChart('chartAntutu',  devs, d => d.tests.antutu,     d => (d.tests.antutu / 1e6).toFixed(2) + 'M');
  renderChart('chartGeek',    devs, d => d.tests.geekbench,  d => d.tests.geekbench.toLocaleString());
  renderChart('chart3dmark',  devs, d => d.tests['3dmark'],  d => d.tests['3dmark'].toLocaleString());
  renderChart('chartBattery', devs, d => d.tests.battery_h,  d => d.tests.battery_h + 'h');
}

function renderChart(containerId, devs, valFn, labelFn) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const vals = devs.map(valFn);
  const max  = Math.max(...vals);

  devs.forEach((d, i) => {
    const val = vals[i];
    const pct = max > 0 ? (val / max) * 100 : 0;
    const isBest = val === max;

    const row = document.createElement('div');
    row.className = 'bar-row';
    row.innerHTML = `
      <div class="bar-label" title="${d.brand} ${d.model}">${d.brand} ${d.model}</div>
      <div class="bar-track">
        <div class="bar-fill ${isBest ? 'best' : ''}" style="width:0%" data-pct="${pct}"></div>
      </div>
      <div class="bar-value">${labelFn(d)}</div>
    `;
    container.appendChild(row);
  });

  // animate after paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      container.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    });
  });
}

// ── Init ──────────────────────────────────────
buildGrid();
