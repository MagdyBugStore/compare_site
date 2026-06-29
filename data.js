const DEVICES = [
  {
    "id": 1,
    "brand": "Samsung",
    "model": "Galaxy S26 Ultra",
    "image_dimensions": "360 × 780 px",
    "network": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    "launch": { "announced": "2026, February 25", "status": "Available. Released 2026, March 06" },
    "body": {
      "dimensions": "163.6 × 78.1 × 7.9 mm",
      "weight": "214 g",
      "build": "Gorilla Armor 2 front & back, Armor Aluminum 2 frame",
      "sim": "Nano-SIM + Nano-SIM + eSIM + eSIM",
      "protection": "IP68 (1.5m / 30 min)",
      "features": ["Stylus", "Armor aluminum 2 frame"]
    },
    "display": {
      "type": "Dynamic LTPO AMOLED 2X",
      "refresh": "120 Hz",
      "size": "6.9\"",
      "resolution": "1440 × 3120 px (~500 ppi)",
      "brightness": "2600 nits peak",
      "protection": "Gorilla Armor 2, anti-reflective"
    },
    "platform": {
      "os": "Android 16 / One UI 8.5",
      "chipset": "Snapdragon 8 Elite Gen 5 (3 nm)",
      "cpu": "Octa-core (2×4.74 GHz + 6×3.62 GHz)",
      "gpu": "Adreno 840 (1.3 GHz)"
    },
    "memory": { "card_slot": "No", "internal": "256 GB / 512 GB / 1 TB — up to 16 GB RAM (UFS 4.x)" },
    "main_camera": {
      "config": "Quad",
      "main": "200 MP f/1.4 23mm wide, OIS",
      "tele1": "10 MP f/2.4 67mm 3× OIS",
      "tele2": "50 MP f/2.9 111mm periscope 5× OIS",
      "ultra": "50 MP f/1.9 120° ultrawide",
      "video": "8K@24/30fps · 4K@30/60/120fps"
    },
    "selfie": { "mp": "12 MP f/2.2", "video": "4K@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "High-bitrate audio" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "6.0",
      "nfc": "Yes",
      "usb": "USB-C 3.2 / DisplayPort 1.2"
    },
    "battery": { "capacity": "5000 mAh", "wired": "60 W (75% in 30 min)", "wireless": "25 W Qi2.2", "reverse": "4.5 W" },
    "misc": { "colors": ["Cobalt Violet", "Sky Blue", "Black", "White", "Silver Shadow", "Pink Gold"], "price": "$949.99 / €937.99 / £799" },
    "tests": {
      "antutu": 3892165,
      "geekbench": 11566,
      "3dmark": 7744,
      "brightness": 1480,
      "battery_h": 16.38
    }
  },
  {
    "id": 2,
    "brand": "Apple",
    "model": "iPhone 17 Pro Max",
    "image_dimensions": "355 × 770 px",
    "network": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    "launch": { "announced": "2025, September 09", "status": "Available. Released 2025, September 19" },
    "body": {
      "dimensions": "159.9 × 76.7 × 8.25 mm",
      "weight": "221 g",
      "build": "Cerning Shield front, glass back, Grade 5 Titanium frame",
      "sim": "eSIM only (USA) / Nano-SIM + eSIM (INT)",
      "protection": "IP68 (6m / 30 min)",
      "features": ["Action Button", "Capture Button"]
    },
    "display": {
      "type": "LTPO Super Retina XDR OLED",
      "refresh": "120 Hz",
      "size": "6.9\"",
      "resolution": "1320 × 2868 px (~460 ppi)",
      "brightness": "2500 nits peak",
      "protection": "Ceramic Shield 2025"
    },
    "platform": {
      "os": "iOS 19 (upgradable to iOS 25)",
      "chipset": "Apple A19 Pro (3 nm)",
      "cpu": "Hexa-core (2×4.40 GHz + 4×2.60 GHz)",
      "gpu": "Apple GPU 6-core"
    },
    "memory": { "card_slot": "No", "internal": "256 GB / 512 GB / 1 TB — 12 GB RAM" },
    "main_camera": {
      "config": "Triple",
      "main": "48 MP f/1.8 24mm wide, sensor-shift OIS",
      "tele2": "48 MP f/2.8 120mm periscope 5× OIS",
      "ultra": "48 MP f/2.2 13mm ultrawide PDAF",
      "video": "4K@24/30/60/120fps · ProRes · Dolby Vision"
    },
    "selfie": { "mp": "24 MP f/1.9 OIS", "video": "4K@24/30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "Spatial Audio" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "5.4",
      "nfc": "Yes",
      "usb": "USB-C 3.2 Gen 2 / DisplayPort"
    },
    "battery": { "capacity": "4850 mAh", "wired": "30 W (50% in 30 min)", "wireless": "25 W MagSafe", "reverse": "—" },
    "misc": { "colors": ["Titanium Gray", "Titanium Black", "Titanium Gold", "Titanium White"], "price": "$1199 / €1449 / £1199" },
    "tests": {
      "antutu": 2150000,
      "geekbench": 10850,
      "3dmark": 6900,
      "brightness": 2000,
      "battery_h": 17.17
    }
  },
  {
    "id": 3,
    "brand": "Google",
    "model": "Pixel 10 Pro XL",
    "image_dimensions": "358 × 774 px",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": { "announced": "2025, August 13", "status": "Available. Released 2025, August 22" },
    "body": {
      "dimensions": "162.8 × 76.6 × 8.5 mm",
      "weight": "221 g",
      "build": "Gorilla Glass Victus 2 front & back, aluminum frame",
      "sim": "Nano-SIM and eSIM",
      "protection": "IP68 (1.5m / 30 min)",
      "features": []
    },
    "display": {
      "type": "LTPO OLED",
      "refresh": "120 Hz",
      "size": "6.8\"",
      "resolution": "1344 × 2992 px (~486 ppi)",
      "brightness": "3000 nits peak",
      "protection": "Gorilla Glass Victus 2"
    },
    "platform": {
      "os": "Android 15 (upgradable to Android 22)",
      "chipset": "Google Tensor G5 (3 nm)",
      "cpu": "Octa-core (1×3.4 GHz X4 + 3×2.6 GHz A720 + 4×2.0 GHz A520)",
      "gpu": "PowerVR Tesla Custom"
    },
    "memory": { "card_slot": "No", "internal": "128 GB / 256 GB / 512 GB — 16 GB RAM" },
    "main_camera": {
      "config": "Triple",
      "main": "50 MP f/1.7 25mm wide, OIS",
      "tele2": "48 MP f/2.8 113mm 5× OIS",
      "ultra": "48 MP f/1.7 123° ultrawide PDAF",
      "video": "8K@30fps · 4K@30/60fps · 10-bit HDR"
    },
    "selfie": { "mp": "42 MP f/2.2 17mm ultrawide", "video": "4K@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "—" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "5.4",
      "nfc": "Yes",
      "usb": "USB-C 3.2"
    },
    "battery": { "capacity": "5060 mAh", "wired": "45 W (70% in 30 min)", "wireless": "23 W", "reverse": "Yes" },
    "misc": { "colors": ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"], "price": "$1099 / €1199" },
    "tests": {
      "antutu": 1720000,
      "geekbench": 7450,
      "3dmark": 5200,
      "brightness": 1620,
      "battery_h": 14.75
    }
  },
  {
    "id": 4,
    "brand": "OnePlus",
    "model": "13",
    "image_dimensions": "358 × 774 px",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": { "announced": "2024, October 31", "status": "Available. Released 2024, November 05" },
    "body": {
      "dimensions": "162.9 × 76.5 × 8.5 mm",
      "weight": "210 g",
      "build": "Gorilla Glass Victus 2 front & back / eco-leather back, aluminum frame",
      "sim": "Dual SIM Nano-SIM",
      "protection": "IP68/IP69 (1.5m / 30 min)",
      "features": ["Alert Slider"]
    },
    "display": {
      "type": "LTPO AMOLED",
      "refresh": "120 Hz",
      "size": "6.82\"",
      "resolution": "1440 × 3168 px (~510 ppi)",
      "brightness": "4500 nits peak",
      "protection": "Gorilla Glass Victus 2"
    },
    "platform": {
      "os": "Android 15 / OxygenOS 15",
      "chipset": "Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2×4.32 GHz + 6×3.53 GHz Oryon V2)",
      "gpu": "Adreno 830"
    },
    "memory": { "card_slot": "No", "internal": "256 GB / 512 GB / 1 TB — up to 24 GB RAM (UFS 4.0)" },
    "main_camera": {
      "config": "Triple (Hasselblad)",
      "main": "50 MP f/1.6 23mm wide, OIS",
      "tele2": "50 MP f/2.6 73mm periscope 3× OIS",
      "ultra": "50 MP f/2.0 15mm 120° ultrawide PDAF",
      "video": "8K@30fps · 4K@30/60fps · Auto HDR"
    },
    "selfie": { "mp": "32 MP f/2.4", "video": "4K@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "24-bit/192 kHz Hi-Res" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "5.4",
      "nfc": "Yes",
      "usb": "USB-C 3.2 / OTG"
    },
    "battery": { "capacity": "6000 mAh", "wired": "100 W (100% in 36 min)", "wireless": "50 W", "reverse": "10 W" },
    "misc": { "colors": ["Black", "Blue", "White"], "price": "$799 / €899 / ₹69,999" },
    "tests": {
      "antutu": 2780000,
      "geekbench": 9400,
      "3dmark": 7200,
      "brightness": 1750,
      "battery_h": 18.67
    }
  },
  {
    "id": 5,
    "brand": "Xiaomi",
    "model": "15 Pro",
    "image_dimensions": "355 × 770 px",
    "network": "GSM / CDMA / HSPA / LTE / 5G",
    "launch": { "announced": "2024, October 29", "status": "Available. Released 2024, October 31" },
    "body": {
      "dimensions": "161.3 × 75.3 × 8.4 mm",
      "weight": "213 g",
      "build": "Glass front, glass/ceramic back, aluminum frame",
      "sim": "Dual SIM Nano-SIM",
      "protection": "IP68 (1.5m / 30 min)",
      "features": []
    },
    "display": {
      "type": "LTPO OLED",
      "refresh": "120 Hz",
      "size": "6.73\"",
      "resolution": "1440 × 3200 px (~522 ppi)",
      "brightness": "3200 nits peak",
      "protection": "Dragon Crystal Glass 2.0"
    },
    "platform": {
      "os": "Android 15 / HyperOS 2",
      "chipset": "Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2×4.32 GHz + 6×3.53 GHz Oryon V2)",
      "gpu": "Adreno 830"
    },
    "memory": { "card_slot": "No", "internal": "256 GB / 512 GB / 1 TB — up to 16 GB RAM (UFS 4.0)" },
    "main_camera": {
      "config": "Triple (Leica)",
      "main": "50 MP f/1.4 23mm wide, OIS",
      "tele2": "50 MP f/2.5 120mm periscope 5× OIS",
      "ultra": "50 MP f/2.2 14mm 115° ultrawide AF",
      "video": "8K@24/30fps · 4K@24/30/60fps · Dolby Vision"
    },
    "selfie": { "mp": "32 MP f/2.0", "video": "4K@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "24-bit/192 kHz · Snapdragon Sound" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "5.4",
      "nfc": "Yes",
      "usb": "USB-C 3.2 Gen2 / DisplayPort"
    },
    "battery": { "capacity": "6100 mAh", "wired": "90 W", "wireless": "50 W", "reverse": "10 W" },
    "misc": { "colors": ["Black", "White", "Silver", "Green", "Liquid Silver"], "price": "≈€850" },
    "tests": {
      "antutu": 2735000,
      "geekbench": 9320,
      "3dmark": 7150,
      "brightness": 1690,
      "battery_h": 19.25
    }
  },
  {
    "id": 6,
    "brand": "Samsung",
    "model": "Galaxy A56 5G",
    "image_dimensions": "356 × 770 px",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": { "announced": "2025, March 12", "status": "Available. Released 2025, March 20" },
    "body": {
      "dimensions": "161.5 × 76.5 × 8.0 mm",
      "weight": "198 g",
      "build": "Gorilla Glass Victus front, glass back, plastic frame",
      "sim": "Single / Hybrid Dual SIM",
      "protection": "IP67 (1m / 30 min)",
      "features": []
    },
    "display": {
      "type": "Super AMOLED",
      "refresh": "120 Hz",
      "size": "6.6\"",
      "resolution": "1080 × 2340 px (~390 ppi)",
      "brightness": "1500 nits HBM",
      "protection": "Gorilla Glass Victus"
    },
    "platform": {
      "os": "Android 15 / One UI 7.1",
      "chipset": "Exynos 1580 (4 nm)",
      "cpu": "Octa-core (1×2.9 GHz A720 + 3×2.6 GHz A720 + 4×1.95 GHz A520)",
      "gpu": "Xclipse 540"
    },
    "memory": { "card_slot": "microSDXC (shared slot)", "internal": "128 GB / 256 GB — up to 12 GB RAM" },
    "main_camera": {
      "config": "Triple",
      "main": "50 MP f/1.8 wide, OIS",
      "ultra": "12 MP f/2.2 123° ultrawide",
      "macro": "5 MP f/2.4 macro",
      "video": "4K@30fps · 1080p@30/60fps"
    },
    "selfie": { "mp": "32 MP f/2.2", "video": "4K@30fps · 1080p@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "—" },
    "comms": {
      "wlan": "Wi-Fi 6 dual-band",
      "bt": "5.4",
      "nfc": "Yes (region-dependent)",
      "usb": "USB-C 2.0 / OTG"
    },
    "battery": { "capacity": "5000 mAh", "wired": "45 W", "wireless": "—", "reverse": "—" },
    "misc": { "colors": ["Iceblue", "Lilac", "Navy", "Lemon"], "price": "$449 / €420 / £369" },
    "tests": {
      "antutu": 895000,
      "geekbench": 3850,
      "3dmark": 2800,
      "brightness": 1050,
      "battery_h": 13.83
    }
  },
  {
    "id": 7,
    "brand": "Sony",
    "model": "Xperia 1 VII",
    "image_dimensions": "346 × 780 px",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": { "announced": "2025, May 15", "status": "Available. Released 2025, June 05" },
    "body": {
      "dimensions": "162.0 × 74.0 × 8.2 mm",
      "weight": "195 g",
      "build": "Gorilla Glass Victus 2 front & back, aluminum frame",
      "sim": "Nano-SIM and eSIM",
      "protection": "IP65/IP68 (1.5m / 30 min)",
      "features": []
    },
    "display": {
      "type": "OLED 4K",
      "refresh": "120 Hz",
      "size": "6.5\"",
      "resolution": "1644 × 3840 px (~643 ppi)",
      "brightness": "—",
      "protection": "Gorilla Glass Victus 2"
    },
    "platform": {
      "os": "Android 15 (upgradable to Android 18)",
      "chipset": "Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2×4.32 GHz + 6×3.53 GHz)",
      "gpu": "Adreno 830"
    },
    "memory": { "card_slot": "microSDXC (dedicated)", "internal": "256 GB / 512 GB — up to 16 GB RAM" },
    "main_camera": {
      "config": "Triple (Zeiss)",
      "main": "58 MP f/1.9 24mm wide, OIS",
      "tele2": "12 MP f/2.3–3.5 continuous zoom 85–170mm OIS",
      "ultra": "48 MP f/2.2 16mm ultrawide PDAF",
      "video": "4K@24/25/30/60/120fps · 5-axis EIS"
    },
    "selfie": { "mp": "12 MP f/2.0", "video": "4K@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "Yes", "features": "24-bit/192 kHz · 360 Reality Audio" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "5.4 aptX Adaptive LDAC",
      "nfc": "Yes",
      "usb": "USB-C 3.2 / DisplayPort"
    },
    "battery": { "capacity": "5000 mAh", "wired": "33 W (50% in 30 min)", "wireless": "Yes", "reverse": "Yes" },
    "misc": { "colors": ["Black", "Platinum Silver", "Khaki Green"], "price": "$1299 / €1399" },
    "tests": {
      "antutu": 2610000,
      "geekbench": 9100,
      "3dmark": 6950,
      "brightness": 1350,
      "battery_h": 15.17
    }
  },
  {
    "id": 8,
    "brand": "Asus",
    "model": "ROG Phone 9 Pro",
    "image_dimensions": "360 × 780 px",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": { "announced": "2024, November 19", "status": "Available. Released 2024, November 26" },
    "body": {
      "dimensions": "163.8 × 76.8 × 8.9 mm",
      "weight": "227 g",
      "build": "Gorilla Glass Victus 2 front & back, aluminum frame",
      "sim": "Dual SIM Nano-SIM",
      "protection": "IP68 (1.5m / 30 min)",
      "features": ["Pressure-sensitive gaming triggers", "AniMe Vision LED display"]
    },
    "display": {
      "type": "LTPO AMOLED",
      "refresh": "185 Hz",
      "size": "6.78\"",
      "resolution": "1080 × 2400 px (~388 ppi)",
      "brightness": "2500 nits peak",
      "protection": "Gorilla Glass Victus 2"
    },
    "platform": {
      "os": "Android 15 / ROG UI",
      "chipset": "Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2×4.32 GHz + 6×3.53 GHz Oryon V2)",
      "gpu": "Adreno 830"
    },
    "memory": { "card_slot": "No", "internal": "512 GB / 1 TB — up to 24 GB RAM (UFS 4.0)" },
    "main_camera": {
      "config": "Triple",
      "main": "50 MP f/1.9 24mm, 6-axis gimbal OIS",
      "tele1": "32 MP f/2.4 3× OIS",
      "ultra": "13 MP f/2.2 120° ultrawide",
      "video": "8K@30fps · 4K@30/60/120fps · HDR10+"
    },
    "selfie": { "mp": "32 MP f/2.5", "video": "1080p@30fps" },
    "sound": { "speakers": "Stereo (2 amplifiers)", "jack": "Yes", "features": "32-bit/384 kHz · Dirac Virtuo Spatial" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "5.4 aptX Lossless",
      "nfc": "Yes",
      "usb": "USB-C 3.1 (side) + USB-C 2.0 (bottom)"
    },
    "battery": { "capacity": "5800 mAh", "wired": "65 W (100% in 43 min)", "wireless": "15 W Qi", "reverse": "10 W" },
    "misc": { "colors": ["Phantom Black"], "price": "$1199.99 / €1299" },
    "tests": {
      "antutu": 2910000,
      "geekbench": 9750,
      "3dmark": 7600,
      "brightness": 1650,
      "battery_h": 20.25
    }
  },
  {
    "id": 9,
    "brand": "Motorola",
    "model": "Edge 60 Ultra",
    "image_dimensions": "352 × 766 px",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": { "announced": "2025, April 18", "status": "Available. Released 2025, May 02" },
    "body": {
      "dimensions": "161.1 × 72.4 × 8.1 mm",
      "weight": "197 g",
      "build": "Gorilla Glass Ultra front, wood/eco-leather back, aluminum frame",
      "sim": "SIM + eSIM",
      "protection": "IP68 (1.5m / 30 min)",
      "features": []
    },
    "display": {
      "type": "P-OLED",
      "refresh": "144 Hz",
      "size": "6.7\"",
      "resolution": "1220 × 2712 px (~446 ppi)",
      "brightness": "2800 nits peak",
      "protection": "Gorilla Glass Ultra"
    },
    "platform": {
      "os": "Android 15 / Hello UI",
      "chipset": "Snapdragon 8s Gen 4 (4 nm)",
      "cpu": "Octa-core (1×3.3 GHz + 3×3.0 GHz + 4×2.0 GHz)",
      "gpu": "Adreno 745"
    },
    "memory": { "card_slot": "No", "internal": "512 GB / 1 TB — up to 16 GB RAM (UFS 4.0)" },
    "main_camera": {
      "config": "Triple",
      "main": "50 MP f/1.6 wide, OIS",
      "tele2": "64 MP f/2.4 72mm periscope 3× OIS",
      "ultra": "50 MP f/2.0 122° ultrawide PDAF",
      "video": "4K@30/60fps · 10-bit HDR10+"
    },
    "selfie": { "mp": "50 MP f/1.9", "video": "4K@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "Snapdragon Sound · Dolby Atmos" },
    "comms": {
      "wlan": "Wi-Fi 7 tri-band",
      "bt": "5.4 aptX Adaptive",
      "nfc": "Yes",
      "usb": "USB-C 3.1 / DisplayPort 1.4"
    },
    "battery": { "capacity": "4700 mAh", "wired": "125 W (100% in 20 min)", "wireless": "50 W", "reverse": "10 W" },
    "misc": { "colors": ["Nordic Wood", "Forest Grey", "Peach Fuzz"], "price": "$999 / €899" },
    "tests": {
      "antutu": 1810000,
      "geekbench": 5800,
      "3dmark": 5100,
      "brightness": 1510,
      "battery_h": 13.20
    }
  },
  {
    "id": 10,
    "brand": "Nothing",
    "model": "Phone (3)",
    "image_dimensions": "354 × 768 px",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": { "announced": "2025, July 11", "status": "Available. Released 2025, July 21" },
    "body": {
      "dimensions": "162.1 × 76.4 × 8.3 mm",
      "weight": "201 g",
      "build": "Gorilla Glass 5 front, transparent glass back, aluminum frame",
      "sim": "Dual SIM Nano-SIM",
      "protection": "IP54 (splash & dust)",
      "features": ["Glyph Interface LED"]
    },
    "display": {
      "type": "LTPO OLED",
      "refresh": "120 Hz",
      "size": "6.7\"",
      "resolution": "1080 × 2412 px (~394 ppi)",
      "brightness": "2000 nits peak",
      "protection": "Gorilla Glass 5"
    },
    "platform": {
      "os": "Android 15 / Nothing OS 3.0",
      "chipset": "Snapdragon 8s Gen 3 (4 nm)",
      "cpu": "Octa-core (1×3.0 GHz X4 + 4×2.8 GHz A720 + 3×2.0 GHz A520)",
      "gpu": "Adreno 735"
    },
    "memory": { "card_slot": "No", "internal": "128 GB / 256 GB / 512 GB — up to 12 GB RAM" },
    "main_camera": {
      "config": "Triple",
      "main": "50 MP f/1.88 24mm wide, OIS",
      "ultra": "50 MP f/2.2 114° ultrawide AF",
      "tele1": "32 MP f/2.4 2× OIS",
      "video": "4K@30/60fps · live HDR"
    },
    "selfie": { "mp": "32 MP f/2.4", "video": "1080p@30/60fps" },
    "sound": { "speakers": "Stereo", "jack": "No", "features": "—" },
    "comms": {
      "wlan": "Wi-Fi 7 dual-band",
      "bt": "5.3 aptX HD LDAC",
      "nfc": "Yes",
      "usb": "USB-C 2.0 / OTG"
    },
    "battery": { "capacity": "4900 mAh", "wired": "65 W (100% in 40 min)", "wireless": "15 W", "reverse": "5 W" },
    "misc": { "colors": ["White", "Dark Grey"], "price": "$599 / €649 / £549" },
    "tests": {
      "antutu": 1520000,
      "geekbench": 5150,
      "3dmark": 4650,
      "brightness": 1210,
      "battery_h": 14.17
    }
  }
];
