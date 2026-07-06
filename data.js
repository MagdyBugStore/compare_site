// ---------------------------------------------------------
// PRODUCT DATA — Built-in Electronic Appliances
// image: null -> placeholder shown in UI.
// Replace with a real image path, e.g. "images/samsung-microwave.jpg"
// Recommended sizes -> see IMAGE_SPEC below.
// ---------------------------------------------------------

const IMAGE_SPEC = {
  card:    { w: 600,  h: 600,  label: "Product Card Image" },
  gallery: { w: 1000, h: 1000, label: "Product Gallery Image" },
  thumb:   { w: 160,  h: 160,  label: "Cart / Compare Thumb" }
};

const BRANDS = ["Samsung", "LG", "Bosch", "Siemens", "Beko"];
const CATEGORIES = ["Microwave", "Oven", "Hob", "Fryer", "Hood", "Fridge", "Freezer", "Dishwasher"];

// Each category lists one variant per brand (5 brands => 5 different
// brands can always be selected and compared side-by-side for that category).
const CATEGORY_DATA = {
  Microwave: [
    { brand: "Samsung", model: "MS23K3555EK", price: 189.99, summaryKeys: ["capacity", "powerOutput"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "462 x 272 x 351 mm", weight: "12.6 kg", color: "Black", controlType: "Dial",
      capacity: "23 L", powerOutput: "800 W", grillPower: "1100 W", cavityMaterial: "Ceramic Enamel",
      programs: "5 auto-cook", childLock: "Yes", turntable: "Yes (Glass, 315 mm)",
    }},
    { brand: "LG", model: "MS2535GIS", price: 159.99, summaryKeys: ["capacity", "powerOutput"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "489 x 275 x 379 mm", weight: "13.2 kg", color: "Black", controlType: "Touch",
      capacity: "25 L", powerOutput: "1000 W", grillPower: "1000 W", cavityMaterial: "Stainless Steel",
      programs: "10 auto-cook", childLock: "Yes", turntable: "Yes (Glass, 320 mm)",
    }},
    { brand: "Bosch", model: "BFL523MS0", price: 249.99, summaryKeys: ["capacity", "powerOutput"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "592 x 382 x 318 mm", weight: "17.5 kg", color: "Stainless Steel", controlType: "Touch + Dial",
      capacity: "21 L", powerOutput: "900 W", grillPower: "—", cavityMaterial: "Stainless Steel",
      programs: "8 auto-cook", childLock: "Yes", turntable: "No (flatbed)",
    }},
    { brand: "Siemens", model: "BF525LMS0", price: 269.99, summaryKeys: ["capacity", "powerOutput"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "592 x 382 x 318 mm", weight: "17.8 kg", color: "Stainless Steel", controlType: "Touch",
      capacity: "21 L", powerOutput: "900 W", grillPower: "—", cavityMaterial: "Stainless Steel",
      programs: "9 auto-cook", childLock: "Yes", turntable: "No (flatbed)",
    }},
    { brand: "Beko", model: "MOC20100W", price: 99.99, summaryKeys: ["capacity", "powerOutput"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "452 x 262 x 344 mm", weight: "11.4 kg", color: "White", controlType: "Dial",
      capacity: "20 L", powerOutput: "700 W", grillPower: "—", cavityMaterial: "Painted Steel",
      programs: "3 auto-cook", childLock: "No", turntable: "Yes (Glass, 245 mm)",
    }},
  ],

  Oven: [
    { brand: "Samsung", model: "NV7B4340VAK", price: 549.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "A+", warranty: "2 years",
      dimensions: "595 x 595 x 548 mm", weight: "32 kg", color: "Black Stainless", installationType: "Built-in",
      capacity: "76 L", power: "3400 W", maxTemp: "275 °C", cookingFunctions: "12 functions",
      selfClean: "Pyrolytic", coolingFan: "Yes", childLock: "Yes",
    }},
    { brand: "LG", model: "WSED7613S", price: 599.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "A", warranty: "2 years",
      dimensions: "595 x 570 x 550 mm", weight: "34 kg", color: "Stainless Steel", installationType: "Built-in",
      capacity: "70 L", power: "3300 W", maxTemp: "250 °C", cookingFunctions: "10 functions",
      selfClean: "Catalytic", coolingFan: "Yes", childLock: "Yes",
    }},
    { brand: "Bosch", model: "HBA574BS0", price: 699.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "A+++", warranty: "2 years",
      dimensions: "595 x 595 x 548 mm", weight: "36 kg", color: "Stainless Steel", installationType: "Built-in",
      capacity: "71 L", power: "3600 W", maxTemp: "300 °C", cookingFunctions: "13 functions",
      selfClean: "Pyrolytic", coolingFan: "Yes", childLock: "Yes",
    }},
    { brand: "Siemens", model: "HB574ABS0", price: 729.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "A+++", warranty: "2 years",
      dimensions: "595 x 595 x 548 mm", weight: "36.5 kg", color: "Stainless Steel", installationType: "Built-in",
      capacity: "71 L", power: "3600 W", maxTemp: "300 °C", cookingFunctions: "14 functions",
      selfClean: "Pyrolytic", coolingFan: "Yes", childLock: "Yes",
    }},
    { brand: "Beko", model: "BBIM12300XMS", price: 379.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "B", warranty: "2 years",
      dimensions: "595 x 595 x 548 mm", weight: "29 kg", color: "Stainless Steel", installationType: "Built-in",
      capacity: "72 L", power: "2800 W", maxTemp: "250 °C", cookingFunctions: "8 functions",
      selfClean: "Catalytic", coolingFan: "Yes", childLock: "Yes",
    }},
  ],

  Hob: [
    { brand: "Samsung", model: "NZ64R3747BK", price: 429.99, summaryKeys: ["burners", "type"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "590 x 52 x 520 mm", type: "Induction", color: "Black Glass", controlType: "Touch Slider",
      burners: "4 zones", totalPower: "7200 W", maxZonePower: "3000 W (Flex Zone)",
      safetyCutOff: "Yes", timer: "Yes", residualHeatIndicator: "Yes",
    }},
    { brand: "LG", model: "CBIZ4720B", price: 389.99, summaryKeys: ["burners", "type"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "590 x 55 x 520 mm", type: "Induction", color: "Black Glass", controlType: "Touch",
      burners: "4 zones", totalPower: "7000 W", maxZonePower: "2600 W",
      safetyCutOff: "Yes", timer: "Yes", residualHeatIndicator: "Yes",
    }},
    { brand: "Bosch", model: "PXY675DC1E", price: 649.99, summaryKeys: ["burners", "type"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "590 x 51 x 520 mm", type: "Induction", color: "Black Glass", controlType: "TFT Touch Display",
      burners: "4 zones + FlexInduction", totalPower: "7400 W", maxZonePower: "3600 W (Flex Zone)",
      safetyCutOff: "Yes", timer: "Yes", residualHeatIndicator: "Yes",
    }},
    { brand: "Siemens", model: "EX675LYC1E", price: 679.99, summaryKeys: ["burners", "type"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "590 x 51 x 520 mm", type: "Induction", color: "Black Glass", controlType: "TFT Touch Display",
      burners: "4 zones + FlexInduction", totalPower: "7400 W", maxZonePower: "3600 W (Flex Zone)",
      safetyCutOff: "Yes", timer: "Yes", residualHeatIndicator: "Yes",
    }},
    { brand: "Beko", model: "HII64200MT", price: 279.99, summaryKeys: ["burners", "type"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "590 x 56 x 520 mm", type: "Induction", color: "Black Glass", controlType: "Touch",
      burners: "4 zones", totalPower: "6600 W", maxZonePower: "2200 W",
      safetyCutOff: "Yes", timer: "Yes", residualHeatIndicator: "Yes",
    }},
  ],

  Fryer: [
    { brand: "Samsung", model: "NZ63AF-Air5000", price: 129.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "310 x 327 x 340 mm", weight: "5.8 kg", color: "Black", basketMaterial: "Non-stick Coated Steel",
      capacity: "5.0 L", power: "1700 W", tempRange: "40–200 °C",
      presets: "6 presets", digitalDisplay: "Yes", autoShutoff: "Yes",
    }},
    { brand: "LG", model: "AF-CookD6", price: 119.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "300 x 320 x 330 mm", weight: "5.5 kg", color: "Black", basketMaterial: "Non-stick Coated Steel",
      capacity: "5.5 L", power: "1800 W", tempRange: "40–200 °C",
      presets: "8 presets", digitalDisplay: "Yes", autoShutoff: "Yes",
    }},
    { brand: "Bosch", model: "TFA4103B", price: 159.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "320 x 335 x 345 mm", weight: "6.4 kg", color: "Black", basketMaterial: "Ceramic-coated",
      capacity: "4.2 L", power: "1600 W", tempRange: "40–200 °C",
      presets: "9 presets", digitalDisplay: "Yes", autoShutoff: "Yes",
    }},
    { brand: "Siemens", model: "TF4A1000", price: 164.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "320 x 335 x 345 mm", weight: "6.5 kg", color: "Black", basketMaterial: "Ceramic-coated",
      capacity: "4.2 L", power: "1600 W", tempRange: "40–200 °C",
      presets: "9 presets", digitalDisplay: "Yes", autoShutoff: "Yes",
    }},
    { brand: "Beko", model: "AF1000W", price: 74.99, summaryKeys: ["capacity", "power"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "290 x 310 x 320 mm", weight: "4.9 kg", color: "White", basketMaterial: "Non-stick Coated Steel",
      capacity: "4.0 L", power: "1500 W", tempRange: "40–200 °C",
      presets: "4 presets", digitalDisplay: "No (Dial)", autoShutoff: "Yes",
    }},
  ],

  Hood: [
    { brand: "Samsung", model: "NK24M5070BS", price: 219.99, summaryKeys: ["extractionRate", "type"], specs: {
      energyRating: "B", warranty: "2 years",
      dimensions: "600 x 500-830 x 500 mm", type: "Chimney", color: "Stainless Steel", controlType: "Push Button",
      extractionRate: "650 m³/h", noiseLevel: "64 dB", speeds: "3 + boost",
      lighting: "LED", ductingMode: "Ducted or Recirculating",
    }},
    { brand: "LG", model: "HCED9017B", price: 199.99, summaryKeys: ["extractionRate", "type"], specs: {
      energyRating: "A", warranty: "2 years",
      dimensions: "900 x 550-850 x 500 mm", type: "Chimney", color: "Black Glass", controlType: "Touch",
      extractionRate: "700 m³/h", noiseLevel: "61 dB", speeds: "3 + boost",
      lighting: "LED", ductingMode: "Ducted or Recirculating",
    }},
    { brand: "Bosch", model: "DWB097E50", price: 449.99, summaryKeys: ["extractionRate", "type"], specs: {
      energyRating: "A+", warranty: "2 years",
      dimensions: "900 x 350-650 x 500 mm", type: "Built-in", color: "Stainless Steel", controlType: "Slider",
      extractionRate: "760 m³/h", noiseLevel: "59 dB", speeds: "4",
      lighting: "LED", ductingMode: "Ducted or Recirculating",
    }},
    { brand: "Siemens", model: "LC97BHM50", price: 469.99, summaryKeys: ["extractionRate", "type"], specs: {
      energyRating: "A+", warranty: "2 years",
      dimensions: "900 x 350-650 x 500 mm", type: "Built-in", color: "Stainless Steel", controlType: "Slider",
      extractionRate: "760 m³/h", noiseLevel: "59 dB", speeds: "4",
      lighting: "LED", ductingMode: "Ducted or Recirculating",
    }},
    { brand: "Beko", model: "HCA62640B", price: 139.99, summaryKeys: ["extractionRate", "type"], specs: {
      energyRating: "C", warranty: "2 years",
      dimensions: "600 x 500-830 x 480 mm", type: "Chimney", color: "Black", controlType: "Push Button",
      extractionRate: "580 m³/h", noiseLevel: "67 dB", speeds: "3",
      lighting: "LED", ductingMode: "Ducted or Recirculating",
    }},
  ],

  Fridge: [
    { brand: "Samsung", model: "RB34T602ESA", price: 799.99, summaryKeys: ["totalCapacity", "climateClass"], specs: {
      energyRating: "A", warranty: "2 years (10 yrs compressor)",
      dimensions: "595 x 1927 x 650 mm", weight: "68 kg", color: "Silver", doorType: "Fridge-Freezer (60/40)",
      totalCapacity: "344 L", fridgeCapacity: "230 L", freezerCapacity: "114 L", climateClass: "SN-T",
      noFrost: "Yes (All-around Cooling)", smartConnectivity: "Yes (SmartThings)", waterDispenser: "No", noiseLevel: "36 dB",
    }},
    { brand: "LG", model: "GBB72SWVGN", price: 849.99, summaryKeys: ["totalCapacity", "climateClass"], specs: {
      energyRating: "A", warranty: "2 years (10 yrs compressor)",
      dimensions: "595 x 2030 x 686 mm", weight: "72 kg", color: "Silver", doorType: "Fridge-Freezer (70/30)",
      totalCapacity: "384 L", fridgeCapacity: "277 L", freezerCapacity: "107 L", climateClass: "SN-T",
      noFrost: "Yes (Linear Cooling)", smartConnectivity: "Yes (LG ThinQ)", waterDispenser: "No", noiseLevel: "35 dB",
    }},
    { brand: "Bosch", model: "KGN39VICT", price: 999.99, summaryKeys: ["totalCapacity", "climateClass"], specs: {
      energyRating: "C", warranty: "2 years",
      dimensions: "600 x 2030 x 660 mm", weight: "70 kg", color: "Stainless Steel", doorType: "Fridge-Freezer (70/30)",
      totalCapacity: "366 L", fridgeCapacity: "246 L", freezerCapacity: "120 L", climateClass: "SN-T",
      noFrost: "Yes (VitaFresh + LowFrost)", smartConnectivity: "Yes (Home Connect)", waterDispenser: "No", noiseLevel: "37 dB",
    }},
    { brand: "Siemens", model: "KG39NVICT", price: 1029.99, summaryKeys: ["totalCapacity", "climateClass"], specs: {
      energyRating: "C", warranty: "2 years",
      dimensions: "600 x 2030 x 660 mm", weight: "70 kg", color: "Stainless Steel", doorType: "Fridge-Freezer (70/30)",
      totalCapacity: "366 L", fridgeCapacity: "246 L", freezerCapacity: "120 L", climateClass: "SN-T",
      noFrost: "Yes (VitaFresh + LowFrost)", smartConnectivity: "Yes (Home Connect)", waterDispenser: "No", noiseLevel: "37 dB",
    }},
    { brand: "Beko", model: "RCNA365E40ZXBN", price: 549.99, summaryKeys: ["totalCapacity", "climateClass"], specs: {
      energyRating: "E", warranty: "2 years",
      dimensions: "600 x 1860 x 600 mm", weight: "62 kg", color: "Silver", doorType: "Fridge-Freezer (65/35)",
      totalCapacity: "324 L", fridgeCapacity: "215 L", freezerCapacity: "109 L", climateClass: "SN-T",
      noFrost: "Yes (NeoFrost)", smartConnectivity: "No", waterDispenser: "No", noiseLevel: "40 dB",
    }},
  ],

  Freezer: [
    { brand: "Samsung", model: "RZ32M7125SA", price: 549.99, summaryKeys: ["capacity", "type"], specs: {
      energyRating: "E", warranty: "2 years (10 yrs compressor)",
      dimensions: "595 x 1855 x 650 mm", weight: "58 kg", color: "Silver", type: "Upright",
      capacity: "323 L", climateClass: "SN-T", freezingCapacity: "16 kg/24h",
      noFrost: "Yes", fastFreeze: "Yes", alarm: "Yes (door + temp)", lock: "No",
    }},
    { brand: "LG", model: "GFF590SLGZ", price: 579.99, summaryKeys: ["capacity", "type"], specs: {
      energyRating: "E", warranty: "2 years (10 yrs compressor)",
      dimensions: "595 x 1865 x 668 mm", weight: "60 kg", color: "Silver", type: "Upright",
      capacity: "336 L", climateClass: "SN-T", freezingCapacity: "18 kg/24h",
      noFrost: "Yes", fastFreeze: "Yes", alarm: "Yes (door + temp)", lock: "No",
    }},
    { brand: "Bosch", model: "GSN36VWEV", price: 649.99, summaryKeys: ["capacity", "type"], specs: {
      energyRating: "D", warranty: "2 years",
      dimensions: "600 x 1860 x 650 mm", weight: "61 kg", color: "White", type: "Upright",
      capacity: "242 L", climateClass: "SN-T", freezingCapacity: "20 kg/24h",
      noFrost: "Yes (NoFrost)", fastFreeze: "Yes (SuperFreeze)", alarm: "Yes", lock: "Yes",
    }},
    { brand: "Siemens", model: "GS36NVIEV", price: 669.99, summaryKeys: ["capacity", "type"], specs: {
      energyRating: "D", warranty: "2 years",
      dimensions: "600 x 1860 x 650 mm", weight: "61 kg", color: "White", type: "Upright",
      capacity: "242 L", climateClass: "SN-T", freezingCapacity: "20 kg/24h",
      noFrost: "Yes (noFrost)", fastFreeze: "Yes (superFreezing)", alarm: "Yes", lock: "Yes",
    }},
    { brand: "Beko", model: "FSE1071AN", price: 299.99, summaryKeys: ["capacity", "type"], specs: {
      energyRating: "Not Rated", warranty: "2 years",
      dimensions: "690 x 845 x 545 mm", weight: "31 kg", color: "White", type: "Chest",
      capacity: "99 L", climateClass: "SN-T", freezingCapacity: "10 kg/24h",
      noFrost: "No (static)", fastFreeze: "Yes", alarm: "Yes", lock: "Yes",
    }},
  ],

  Dishwasher: [
    { brand: "Samsung", model: "DW60M6050FS", price: 549.99, summaryKeys: ["placeSettings", "programs"], specs: {
      energyRating: "D", warranty: "2 years",
      dimensions: "598 x 850 x 600 mm", color: "Stainless Steel", installationType: "Built-in",
      placeSettings: "14", waterConsumption: "9.5 L/cycle", noiseLevel: "42 dB",
      programs: "8 programs", delayTimer: "Yes (1–24h)", halfLoad: "Yes", childLock: "Yes",
    }},
    { brand: "LG", model: "DF425HSS", price: 599.99, summaryKeys: ["placeSettings", "programs"], specs: {
      energyRating: "D", warranty: "2 years",
      dimensions: "598 x 845 x 600 mm", color: "Stainless Steel", installationType: "Built-in",
      placeSettings: "14", waterConsumption: "9.0 L/cycle", noiseLevel: "40 dB",
      programs: "10 programs", delayTimer: "Yes (1–24h)", halfLoad: "Yes", childLock: "Yes",
    }},
    { brand: "Bosch", model: "SMV4HVX00E", price: 699.99, summaryKeys: ["placeSettings", "programs"], specs: {
      energyRating: "C", warranty: "2 years",
      dimensions: "598 x 815 x 550 mm", color: "Stainless Steel", installationType: "Fully Integrated",
      placeSettings: "13", waterConsumption: "9.5 L/cycle", noiseLevel: "44 dB",
      programs: "6 programs", delayTimer: "Yes (1–24h)", halfLoad: "Yes", childLock: "Yes",
    }},
    { brand: "Siemens", model: "SN65EX10CE", price: 729.99, summaryKeys: ["placeSettings", "programs"], specs: {
      energyRating: "C", warranty: "2 years",
      dimensions: "598 x 815 x 550 mm", color: "Stainless Steel", installationType: "Fully Integrated",
      placeSettings: "14", waterConsumption: "9.5 L/cycle", noiseLevel: "44 dB",
      programs: "6 programs", delayTimer: "Yes (1–24h)", halfLoad: "Yes", childLock: "Yes",
    }},
    { brand: "Beko", model: "BDIN15320Q", price: 379.99, summaryKeys: ["placeSettings", "programs"], specs: {
      energyRating: "E", warranty: "2 years",
      dimensions: "598 x 820 x 570 mm", color: "Stainless Steel", installationType: "Fully Integrated",
      placeSettings: "15", waterConsumption: "10.5 L/cycle", noiseLevel: "46 dB",
      programs: "5 programs", delayTimer: "Yes (1–19h)", halfLoad: "No", childLock: "Yes",
    }},
  ],
};

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-+|-+$)/g, "");
}

const PRODUCTS = [];
let _id = 1;
CATEGORIES.forEach(category => {
  CATEGORY_DATA[category].forEach(variant => {
    const name = `${variant.brand} ${variant.model}`;
    PRODUCTS.push({
      slug: slugify(name),
      id: _id++,
      brand: variant.brand,
      model: variant.model,
      name,
      price: variant.price,
      priceDisplay: `$${variant.price.toFixed(2)}`,
      image: null,
      category,
      summary: variant.summaryKeys.map(k => variant.specs[k]).join(" · "),
      specs: variant.specs,
    });
  });
});

// ---------------------------------------------------------
// Comparison / spec-table field groups, per appliance category.
// Shared by the product detail page and the compare table so
// both views stay in sync with a single source of truth.
// ---------------------------------------------------------
const COMPARE_GROUPS_BY_CATEGORY = {
  Microwave: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Weight", p => p.specs.weight],
      ["Color", p => p.specs.color],
      ["Control Type", p => p.specs.controlType],
    ]},
    { group: "Capacity & Power", rows: [
      ["Capacity", p => p.specs.capacity],
      ["Power Output", p => p.specs.powerOutput],
      ["Grill Power", p => p.specs.grillPower],
      ["Cavity Material", p => p.specs.cavityMaterial],
    ]},
    { group: "Features", rows: [
      ["Programs", p => p.specs.programs],
      ["Child Lock", p => p.specs.childLock],
      ["Turntable", p => p.specs.turntable],
    ]},
  ],
  Oven: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Weight", p => p.specs.weight],
      ["Color", p => p.specs.color],
      ["Installation Type", p => p.specs.installationType],
    ]},
    { group: "Capacity & Power", rows: [
      ["Capacity", p => p.specs.capacity],
      ["Power", p => p.specs.power],
      ["Max Temperature", p => p.specs.maxTemp],
      ["Cooking Functions", p => p.specs.cookingFunctions],
    ]},
    { group: "Features", rows: [
      ["Self Clean", p => p.specs.selfClean],
      ["Cooling Fan", p => p.specs.coolingFan],
      ["Child Lock", p => p.specs.childLock],
    ]},
  ],
  Hob: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Type", p => p.specs.type],
      ["Color", p => p.specs.color],
      ["Control Type", p => p.specs.controlType],
    ]},
    { group: "Performance", rows: [
      ["Burners / Zones", p => p.specs.burners],
      ["Total Power", p => p.specs.totalPower],
      ["Max Zone Power", p => p.specs.maxZonePower],
    ]},
    { group: "Features", rows: [
      ["Safety Cut-off", p => p.specs.safetyCutOff],
      ["Timer", p => p.specs.timer],
      ["Residual Heat Indicator", p => p.specs.residualHeatIndicator],
    ]},
  ],
  Fryer: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Weight", p => p.specs.weight],
      ["Color", p => p.specs.color],
      ["Basket Material", p => p.specs.basketMaterial],
    ]},
    { group: "Capacity & Power", rows: [
      ["Capacity", p => p.specs.capacity],
      ["Power", p => p.specs.power],
      ["Temperature Range", p => p.specs.tempRange],
    ]},
    { group: "Features", rows: [
      ["Presets", p => p.specs.presets],
      ["Digital Display", p => p.specs.digitalDisplay],
      ["Auto Shutoff", p => p.specs.autoShutoff],
    ]},
  ],
  Hood: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Type", p => p.specs.type],
      ["Color", p => p.specs.color],
      ["Control Type", p => p.specs.controlType],
    ]},
    { group: "Performance", rows: [
      ["Extraction Rate", p => p.specs.extractionRate],
      ["Noise Level", p => p.specs.noiseLevel],
      ["Speeds", p => p.specs.speeds],
    ]},
    { group: "Features", rows: [
      ["Lighting", p => p.specs.lighting],
      ["Ducting Mode", p => p.specs.ductingMode],
    ]},
  ],
  Fridge: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Weight", p => p.specs.weight],
      ["Color", p => p.specs.color],
      ["Door Type", p => p.specs.doorType],
    ]},
    { group: "Capacity", rows: [
      ["Total Capacity", p => p.specs.totalCapacity],
      ["Fridge Capacity", p => p.specs.fridgeCapacity],
      ["Freezer Capacity", p => p.specs.freezerCapacity],
      ["Climate Class", p => p.specs.climateClass],
    ]},
    { group: "Features", rows: [
      ["No Frost", p => p.specs.noFrost],
      ["Smart Connectivity", p => p.specs.smartConnectivity],
      ["Water Dispenser", p => p.specs.waterDispenser],
      ["Noise Level", p => p.specs.noiseLevel],
    ]},
  ],
  Freezer: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Weight", p => p.specs.weight],
      ["Color", p => p.specs.color],
      ["Type", p => p.specs.type],
    ]},
    { group: "Capacity", rows: [
      ["Capacity", p => p.specs.capacity],
      ["Climate Class", p => p.specs.climateClass],
      ["Freezing Capacity", p => p.specs.freezingCapacity],
    ]},
    { group: "Features", rows: [
      ["No Frost", p => p.specs.noFrost],
      ["Fast Freeze", p => p.specs.fastFreeze],
      ["Alarm", p => p.specs.alarm],
      ["Lock", p => p.specs.lock],
    ]},
  ],
  Dishwasher: [
    { group: "Overview", rows: [
      ["Energy Rating", p => p.specs.energyRating],
      ["Warranty", p => p.specs.warranty],
    ]},
    { group: "Design", rows: [
      ["Dimensions", p => p.specs.dimensions],
      ["Color", p => p.specs.color],
      ["Installation Type", p => p.specs.installationType],
    ]},
    { group: "Capacity & Efficiency", rows: [
      ["Place Settings", p => p.specs.placeSettings],
      ["Water Consumption", p => p.specs.waterConsumption],
      ["Noise Level", p => p.specs.noiseLevel],
    ]},
    { group: "Features", rows: [
      ["Programs", p => p.specs.programs],
      ["Delay Timer", p => p.specs.delayTimer],
      ["Half Load", p => p.specs.halfLoad],
      ["Child Lock", p => p.specs.childLock],
    ]},
  ],
};
