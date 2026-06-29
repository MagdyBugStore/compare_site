// ---------------------------------------------------------
// PRODUCT DATA (sourced from imported spec JSON)
// image: null -> placeholder shown in UI.
// Replace with a real image path, e.g. "images/galaxy-s26.jpg"
// Recommended sizes -> see IMAGE_SPEC below.
// ---------------------------------------------------------

const IMAGE_SPEC = {
  card:    { w: 600,  h: 600,  label: "Product Card Image" },
  gallery: { w: 1000, h: 1000, label: "Product Gallery Image" },
  thumb:   { w: 160,  h: 160,  label: "Cart / Compare Thumb" }
};

const PRODUCTS = [
  {
    "slug": "samsung-galaxy-s26-ultra-hypothetical-spec",
    "id": 1,
    "brand": "Samsung",
    "model": "Galaxy S26 Ultra (Hypothetical Spec)",
    "name": "Samsung Galaxy S26 Ultra (Hypothetical Spec)",
    "price": 949.99,
    "priceDisplay": "$949.99 / €937.99 / £799.00 / ₹119,990",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    "launch": {
      "announced": "2026, February 25",
      "status": "Available. Released 2026, March 06"
    },
    "body": {
      "dimensions": "163.6 x 78.1 x 7.9 mm",
      "weight": "214 g",
      "build": "Glass front (Corning Gorilla Armor 2), glass back (Gorilla Glass Victus 2), aluminum frame",
      "sim": "Nano-SIM + Nano-SIM + eSIM + eSIM (max 2 at a time) - INT",
      "protection": "IP68 dust tight and water resistant (up to 1.5m for 30 min)",
      "features": [
        "Stylus",
        "Armor aluminum 2 frame"
      ]
    },
    "display": {
      "type": "Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)",
      "size": "6.9 inches",
      "resolution": "1440 x 3120 pixels, 19.5:9 ratio (~500 ppi density)",
      "protection": "Corning Gorilla Armor 2, Mohs level 6, DX anti-reflective coating",
      "features": [
        "Privacy Display"
      ]
    },
    "platform": {
      "os": "Android 16, up to 7 major Android upgrades, One UI 8.5",
      "chipset": "Qualcomm SM8850-1-AD Snapdragon 8 Elite Gen 5 (3 nm)",
      "cpu": "Octa-core (2x4.74 GHz Oryon V3 Phoenix L + 6x3.62 GHz Oryon V3 Phoenix M)",
      "gpu": "Adreno 840 (1.3GHz)"
    },
    "memory": {
      "card_slot": "No",
      "internal": "256GB 12GB RAM, 512GB 12GB RAM, 1TB 16GB RAM (UFS 4.X)"
    },
    "main_camera": {
      "configuration": "Quad",
      "lenses": [
        "200 MP, f/1.4, 23mm (wide), 1/1.3\", 0.6µm, multi-directional PDAF, OIS",
        "10 MP, f/2.4, 67mm (telephoto), 1/3.94\", 1.0µm, PDAF, OIS, 3x optical zoom",
        "50 MP, f/2.9, 111mm (periscope telephoto), 1/2.52\", 0.7µm, PDAF, OIS, 5x optical zoom",
        "50 MP, f/1.9, 120˚ (ultrawide), 1/2.5\", 0.7µm, dual pixel PDAF"
      ],
      "features": [
        "Laser AF",
        "Best Face",
        "Horizon Lock",
        "LED flash",
        "auto-HDR",
        "panorama"
      ],
      "video": "8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps, 10-bit HDR, gyro-EIS"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "12 MP, f/2.2, 23mm (wide), 1/3.2\", 1.12µm, dual pixel PDAF"
      ],
      "features": [
        "HDR",
        "HDR10+"
      ],
      "video": "4K@30/60fps, 1080p@30fps"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": [
        "High-bitrate audio support"
      ]
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
      "bluetooth": "6.0, A2DP, LE",
      "positioning": "GPS, GLONASS, BDS, GALILEO, QZSS",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.2, DisplayPort 1.2, OTG"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, ultrasonic)",
        "accelerometer",
        "gyro",
        "proximity",
        "compass",
        "barometer"
      ],
      "additional": [
        "Samsung DeX",
        "Samsung Wireless DeX",
        "Ultra Wideband (UWB) support"
      ]
    },
    "battery": {
      "type": "Li-Ion 5000 mAh",
      "charging": "60W wired, PD3.0, 75% in 30 min, 25W wireless (Qi2.2), 4.5W reverse wireless"
    },
    "misc": {
      "colors": [
        "Cobalt Violet",
        "Sky Blue",
        "Black",
        "White",
        "Silver Shadow",
        "Pink Gold"
      ],
      "models": [
        "SM-S948B",
        "SM-S948B/DS",
        "SM-S948U"
      ],
      "price": "$949.99 / €937.99 / £799.00 / ₹119,990"
    },
    "tests": {
      "performance": {
        "antutu": "2627986 (v10), 3892165 (v11)",
        "geekbench": "11566 (v6)",
        "3dmark": "7744 (Wild Life Extreme)"
      },
      "display": "1480 nits max brightness (measured)",
      "loudspeaker": "-25.9 LUFS (Very good)",
      "battery_life": "Active use score 16:23h"
    }
  },
  {
    "slug": "apple-iphone-17-pro-max",
    "id": 2,
    "brand": "Apple",
    "model": "iPhone 17 Pro Max",
    "name": "Apple iPhone 17 Pro Max",
    "price": 1199.0,
    "priceDisplay": "$1199.00 / €1449.00 / £1199.00",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    "launch": {
      "announced": "2025, September 09",
      "status": "Available. Released 2025, September 19"
    },
    "body": {
      "dimensions": "159.9 x 76.7 x 8.25 mm",
      "weight": "221 g",
      "build": "Glass front (Cerning Shield), glass back, Titanium frame (Grade 5)",
      "sim": "eSIM only - USA, Nano-SIM + eSIM - INT",
      "protection": "IP68 dust/water resistant (up to 6m for 30 min)",
      "features": [
        "Action Button",
        "Capture Button"
      ]
    },
    "display": {
      "type": "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 2500 nits",
      "size": "6.9 inches",
      "resolution": "1320 x 2868 pixels, 19.5:9 ratio (~460 ppi density)",
      "protection": "Ceramic Shield glass (2025 gen)",
      "features": [
        "Always-On display",
        "Dynamic Island"
      ]
    },
    "platform": {
      "os": "iOS 19, upgradable to iOS 25",
      "chipset": "Apple A19 Pro (3 nm)",
      "cpu": "Hexa-core (2x4.40 GHz + 4x2.60 GHz)",
      "gpu": "Apple GPU (6-core graphics)"
    },
    "memory": {
      "card_slot": "No",
      "internal": "256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "48 MP, f/1.8, 24mm (wide), 1/1.28\", 1.22µm, dual pixel PDAF, sensor-shift OIS",
        "48 MP, f/2.8, 120mm (periscope telephoto), 1/2.6\", 5x optical zoom, OIS",
        "48 MP, f/2.2, 13mm (ultrawide), 0.7µm, PDAF"
      ],
      "features": [
        "Dual-LED dual-tone flash",
        "HDR (photo/panorama)",
        "TOF 3D LiDAR scanner"
      ],
      "video": "4K@24/30/60/120fps, 1080p@30/60/120/240fps, 10-bit HDR, Dolby Vision HDR, ProRes"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "24 MP, f/1.9, 23mm (wide), PDAF, OIS"
      ],
      "features": [
        "HDR",
        "SL 3D (depth/biometrics sensor)"
      ],
      "video": "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": [
        "Spatial Audio"
      ]
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Hotspot",
      "bluetooth": "5.4, A2DP, LE",
      "positioning": "GPS, GLONASS, GALILEO, BDS, QZSS, NavIC",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.2 Gen 2, DisplayPort"
    },
    "features": {
      "sensors": [
        "Face ID",
        "accelerometer",
        "gyro",
        "proximity",
        "compass",
        "barometer"
      ],
      "additional": [
        "Ultra Wideband 3 (UWB) support",
        "Emergency SOS via satellite"
      ]
    },
    "battery": {
      "type": "Li-Ion 4850 mAh",
      "charging": "30W wired, PD2.0, 50% in 30 min, 25W wireless (MagSafe)"
    },
    "misc": {
      "colors": [
        "Titanium Gray",
        "Titanium Black",
        "Titanium Gold",
        "Titanium White"
      ],
      "models": [
        "A3296",
        "A3297",
        "A3295"
      ],
      "price": "$1199.00 / €1449.00 / £1199.00"
    },
    "tests": {
      "performance": {
        "antutu": "2150000 (v10)",
        "geekbench": "10850 (v6)",
        "3dmark": "6900 (Wild Life Extreme)"
      },
      "display": "2000 nits max brightness (measured)",
      "loudspeaker": "-24.2 LUFS (Excellent)",
      "battery_life": "Active use score 17:10h"
    }
  },
  {
    "slug": "google-pixel-10-pro-xl",
    "id": 3,
    "brand": "Google",
    "model": "Pixel 10 Pro XL",
    "name": "Google Pixel 10 Pro XL",
    "price": 1099.0,
    "priceDisplay": "$1,099.00 / €1,199.00",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": {
      "announced": "2025, August 13",
      "status": "Available. Released 2025, August 22"
    },
    "body": {
      "dimensions": "162.8 x 76.6 x 8.5 mm",
      "weight": "221 g",
      "build": "Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass Victus 2), aluminum frame",
      "sim": "Nano-SIM and eSIM",
      "protection": "IP68 dust/water resistant (up to 1.5m for 30 min)",
      "features": []
    },
    "display": {
      "type": "LTPO OLED, 120Hz, HDR10+, 3000 nits (peak)",
      "size": "6.8 inches",
      "resolution": "1344 x 2992 pixels, 20:9 ratio (~486 ppi density)",
      "protection": "Corning Gorilla Glass Victus 2",
      "features": [
        "Always-on display"
      ]
    },
    "platform": {
      "os": "Android 15, upgradable to Android 22",
      "chipset": "Google Tensor G5 (3 nm)",
      "cpu": "Octa-core (1x3.4 GHz Cortex-X4 & 3x2.6 GHz Cortex-A720 & 4x2.0 GHz Cortex-A520)",
      "gpu": "PowerVR Tesla Custom GPU"
    },
    "memory": {
      "card_slot": "No",
      "internal": "128GB 16GB RAM, 256GB 16GB RAM, 512GB 16GB RAM"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "50 MP, f/1.7, 25mm (wide), 1/1.31\", 1.2µm, dual pixel PDAF, OIS",
        "48 MP, f/2.8, 113mm (telephoto), 1/2.55\", multi-directional PDAF, OIS, 5x optical zoom",
        "48 MP, f/1.7, 123˚ (ultrawide), 1/2.55\", dual pixel PDAF"
      ],
      "features": [
        "Multi-zone Laser AF",
        "LED flash",
        "Pixel Shift",
        "Best Take",
        "Magic Eraser"
      ],
      "video": "8K@30fps, 4K@30/60fps, 1080p@30/60/120/240fps, gyro-EIS, 10-bit HDR"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "42 MP, f/2.2, 17mm (ultrawide), PDAF"
      ],
      "features": [
        "Auto-HDR",
        "Panorama"
      ],
      "video": "4K@30/60fps, 1080p@30/60fps"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": []
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
      "bluetooth": "5.4, A2DP, LE, aptX HD",
      "positioning": "GPS (L1+L5), GLONASS, GALILEO, QZSS, BDS",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.2"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, ultrasonic)",
        "accelerometer",
        "gyro",
        "proximity",
        "compass",
        "barometer",
        "thermometer (skin temperature)"
      ],
      "additional": [
        "Ultra Wideband (UWB) support",
        "Satellite SOS"
      ]
    },
    "battery": {
      "type": "Li-Ion 5060 mAh",
      "charging": "45W wired, PD3.0, 70% in 30 min, 23W wireless, reverse wireless"
    },
    "misc": {
      "colors": [
        "Obsidian",
        "Porcelain",
        "Hazel",
        "Rose Quartz"
      ],
      "models": [
        "G2YBB",
        "GECF0"
      ],
      "price": "$1,099.00 / €1,199.00"
    },
    "tests": {
      "performance": {
        "antutu": "1720000 (v10)",
        "geekbench": "7450 (v6)",
        "3dmark": "5200 (Wild Life Extreme)"
      },
      "display": "1620 nits max brightness (measured)",
      "loudspeaker": "-26.5 LUFS (Very good)",
      "battery_life": "Active use score 14:45h"
    }
  },
  {
    "slug": "oneplus-13",
    "id": 4,
    "brand": "OnePlus",
    "model": "13",
    "name": "OnePlus 13",
    "price": 799.0,
    "priceDisplay": "$799.00 / €899.00 / ₹69,999",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": {
      "announced": "2024, October 31",
      "status": "Available. Released 2024, November 05"
    },
    "body": {
      "dimensions": "162.9 x 76.5 x 8.5 mm",
      "weight": "210 g",
      "build": "Glass front (Gorilla Glass Victus 2), glass back or eco-leather back, aluminum frame",
      "sim": "Dual SIM (Nano-SIM, dual stand-by)",
      "protection": "IP68/IP69 dust/water resistant (up to 1.5m for 30 min)",
      "features": [
        "Alert Slider"
      ]
    },
    "display": {
      "type": "LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+, 4500 nits (peak)",
      "size": "6.82 inches",
      "resolution": "1440 x 3168 pixels (~510 ppi density)",
      "protection": "Corning Gorilla Glass Victus 2",
      "features": [
        "Always-on display"
      ]
    },
    "platform": {
      "os": "Android 15, OxygenOS 15 (Global), ColorOS 15 (China)",
      "chipset": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2x4.32 GHz Oryon V2 Phoenix L + 6x3.53 GHz Oryon V2 Phoenix M)",
      "gpu": "Adreno 830"
    },
    "memory": {
      "card_slot": "No",
      "internal": "256GB 12GB RAM, 512GB 16GB RAM, 1TB 24GB RAM (UFS 4.0)"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "50 MP, f/1.6, 23mm (wide), 1/1.43\", 1.12µm, multi-directional PDAF, OIS",
        "50 MP, f/2.6, 73mm (periscope telephoto), 1/1.95\", PDAF, OIS, 3x optical zoom",
        "50 MP, f/2.0, 15mm, 120˚ (ultrawide), PDAF"
      ],
      "features": [
        "Hasselblad Color Calibration",
        "Dual-LED flash",
        "HDR",
        "panorama"
      ],
      "video": "8K@30fps, 4K@30/60fps, 1080p@30/60/240fps, gyro-EIS, Auto HDR"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "32 MP, f/2.4, 21mm (wide), 1/2.74\", 0.8µm"
      ],
      "features": [
        "Auto-HDR",
        "panorama"
      ],
      "video": "4K@30/60fps, 1080p@30/60fps, gyro-EIS"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": [
        "24-bit/192kHz Hi-Res audio"
      ]
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
      "bluetooth": "5.4, A2DP, LE, aptX HD, LHDC",
      "positioning": "GPS (L1+L5), GLONASS, BDS, GALILEO, QZSS",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.2, OTG"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, ultrasonic)",
        "accelerometer",
        "gyro",
        "proximity",
        "compass",
        "color spectrum"
      ],
      "additional": [
        "Infrared port"
      ]
    },
    "battery": {
      "type": "Si-Carbon 6000 mAh",
      "charging": "100W wired, PD, 100% in 36 min, 50W wireless, 10W reverse wireless"
    },
    "misc": {
      "colors": [
        "Black",
        "Blue",
        "White"
      ],
      "models": [
        "PJZ110"
      ],
      "price": "$799.00 / €899.00 / ₹69,999"
    },
    "tests": {
      "performance": {
        "antutu": "2780000 (v11)",
        "geekbench": "9400 (v6)",
        "3dmark": "7200 (Wild Life Extreme)"
      },
      "display": "1750 nits max brightness (measured)",
      "loudspeaker": "-25.1 LUFS (Very good)",
      "battery_life": "Active use score 18:40h"
    }
  },
  {
    "slug": "xiaomi-15-pro",
    "id": 5,
    "brand": "Xiaomi",
    "model": "15 Pro",
    "name": "Xiaomi 15 Pro",
    "price": 850.0,
    "priceDisplay": "€850.00 (China imported roughly)",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / CDMA / HSPA / LTE / 5G",
    "launch": {
      "announced": "2024, October 29",
      "status": "Available. Released 2024, October 31"
    },
    "body": {
      "dimensions": "161.3 x 75.3 x 8.4 mm",
      "weight": "213 g",
      "build": "Glass front, glass back or ceramic back, aluminum frame",
      "sim": "Dual SIM (Nano-SIM, dual stand-by)",
      "protection": "IP68 dust/water resistant (up to 1.5m for 30 min)",
      "features": []
    },
    "display": {
      "type": "LTPO OLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 3200 nits (peak)",
      "size": "6.73 inches",
      "resolution": "1440 x 3200 pixels, 20:9 ratio (~522 ppi density)",
      "protection": "Xiaomi Dragon Crystal Glass 2.0",
      "features": []
    },
    "platform": {
      "os": "Android 15, HyperOS 2",
      "chipset": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2x4.32 GHz Oryon V2 + 6x3.53 GHz Oryon V2)",
      "gpu": "Adreno 830"
    },
    "memory": {
      "card_slot": "No",
      "internal": "256GB 12GB RAM, 512GB 16GB RAM, 1TB 16GB RAM (UFS 4.0)"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "50 MP, f/1.4, 23mm (wide), 1/1.31\", 1.2µm, dual pixel PDAF, OIS",
        "50 MP, f/2.5, 120mm (periscope telephoto), 1/2.51\", PDAF, OIS, 5x optical zoom",
        "50 MP, f/2.2, 14mm, 115˚ (ultrawide), AF"
      ],
      "features": [
        "Leica lenses",
        "Dual-LED dual-tone flash",
        "HDR",
        "panorama"
      ],
      "video": "8K@24/30fps, 4K@24/30/60fps, 1080p@30/60/120/240/960fps, gyro-EIS, Dolby Vision HDR"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "32 MP, f/2.0, 22mm (wide), 0.7µm"
      ],
      "features": [
        "HDR",
        "panorama"
      ],
      "video": "4K@30/60fps, 1080p@30/60fps, gyro-EIS"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": [
        "24-bit/192kHz audio",
        "Snapdragon Sound"
      ]
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
      "bluetooth": "5.4, A2DP, LE, aptX HD, aptX Adaptive, LHDC",
      "positioning": "GPS (L1+L5), GLONASS, BDS (B1I+B1C+B2a), GALILEO, QZSS, NavIC",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.2 Gen2, DisplayPort"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, ultrasonic)",
        "accelerometer",
        "proximity",
        "gyro",
        "compass",
        "barometer",
        "color spectrum"
      ],
      "additional": [
        "Infrared port",
        "Satellite communication support (optional)"
      ]
    },
    "battery": {
      "type": "Si-Carbon 6100 mAh",
      "charging": "90W wired, PD3.0, 50W wireless, 10W reverse wireless"
    },
    "misc": {
      "colors": [
        "Black",
        "White",
        "Silver",
        "Green",
        "Liquid Silver"
      ],
      "models": [
        "2410DPN6CC"
      ],
      "price": "€850.00 (China imported roughly)"
    },
    "tests": {
      "performance": {
        "antutu": "2735000 (v11)",
        "geekbench": "9320 (v6)",
        "3dmark": "7150 (Wild Life Extreme)"
      },
      "display": "1690 nits max brightness (measured)",
      "loudspeaker": "-24.8 LUFS (Very good)",
      "battery_life": "Active use score 19:15h"
    }
  },
  {
    "slug": "samsung-galaxy-a56-5g",
    "id": 6,
    "brand": "Samsung",
    "model": "Galaxy A56 5G",
    "name": "Samsung Galaxy A56 5G",
    "price": 449.0,
    "priceDisplay": "$449.00 / €420.00 / £369.00",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": {
      "announced": "2025, March 12",
      "status": "Available. Released 2025, March 20"
    },
    "body": {
      "dimensions": "161.5 x 76.5 x 8.0 mm",
      "weight": "198 g",
      "build": "Glass front (Gorilla Glass Victus), glass back, plastic frame",
      "sim": "Single SIM (Nano-SIM) or Hybrid Dual SIM",
      "protection": "IP67 dust/water resistant (up to 1m for 30 min)",
      "features": []
    },
    "display": {
      "type": "Super AMOLED, 120Hz, HDR10+, 1500 nits (HBM)",
      "size": "6.6 inches",
      "resolution": "1080 x 2340 pixels, 19.5:9 ratio (~390 ppi density)",
      "protection": "Corning Gorilla Glass Victus",
      "features": [
        "Always-on display"
      ]
    },
    "platform": {
      "os": "Android 15, One UI 7.1",
      "chipset": "Exynos 1580 (4 nm)",
      "cpu": "Octa-core (1x2.9 GHz Cortex-A720 & 3x2.6 GHz Cortex-A720 & 4x1.95 GHz Cortex-A520)",
      "gpu": "Xclipse 540"
    },
    "memory": {
      "card_slot": "microSDXC (uses shared SIM slot)",
      "internal": "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "50 MP, f/1.8, (wide), 1/1.56\", PDAF, OIS",
        "12 MP, f/2.2, 123˚ (ultrawide), 1.12µm",
        "5 MP, f/2.4, (macro)"
      ],
      "features": [
        "LED flash",
        "panorama",
        "HDR"
      ],
      "video": "4K@30fps, 1080p@30/60fps, gyro-EIS"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "32 MP, f/2.2, 26mm (wide)"
      ],
      "features": [
        "HDR"
      ],
      "video": "4K@30fps, 1080p@30/60fps"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": []
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
      "bluetooth": "5.4, A2DP, LE",
      "positioning": "GPS, GLONASS, GALILEO, BDS, QZSS",
      "nfc": "Yes (market/region dependent)",
      "radio": "No",
      "usb": "USB Type-C 2.0, OTG"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, optical)",
        "accelerometer",
        "gyro",
        "compass",
        "virtual proximity sensing"
      ],
      "additional": []
    },
    "battery": {
      "type": "Li-Ion 5000 mAh",
      "charging": "45W wired"
    },
    "misc": {
      "colors": [
        "Awesome Iceblue",
        "Awesome Lilac",
        "Awesome Navy",
        "Awesome Lemon"
      ],
      "models": [
        "SM-A566B",
        "SM-A566B/DS"
      ],
      "price": "$449.00 / €420.00 / £369.00"
    },
    "tests": {
      "performance": {
        "antutu": "895000 (v10)",
        "geekbench": "3850 (v6)",
        "3dmark": "2800 (Wild Life)"
      },
      "display": "1050 nits max brightness (measured)",
      "loudspeaker": "-26.8 LUFS (Good)",
      "battery_life": "Active use score 13:50h"
    }
  },
  {
    "slug": "sony-xperia-1-vii",
    "id": 7,
    "brand": "Sony",
    "model": "Xperia 1 VII",
    "name": "Sony Xperia 1 VII",
    "price": 1299.0,
    "priceDisplay": "$1299.00 / €1399.00",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": {
      "announced": "2025, May 15",
      "status": "Available. Released 2025, June 05"
    },
    "body": {
      "dimensions": "162.0 x 74.0 x 8.2 mm",
      "weight": "195 g",
      "build": "Glass front (Gorilla Glass Victus 2), glass back, aluminum frame",
      "sim": "Nano-SIM and eSIM or Dual SIM",
      "protection": "IP65/IP68 dust/water resistant (up to 1.5m for 30 min)",
      "features": []
    },
    "display": {
      "type": "OLED, 1B colors, 120Hz, HDR10, BT.2020",
      "size": "6.5 inches",
      "resolution": "1644 x 3840 pixels, 21:9 ratio (~643 ppi density)",
      "protection": "Corning Gorilla Glass Victus 2",
      "features": []
    },
    "platform": {
      "os": "Android 15, upgradable to Android 18",
      "chipset": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2x4.32 GHz + 6x3.53 GHz)",
      "gpu": "Adreno 830"
    },
    "memory": {
      "card_slot": "microSDXC (dedicated slot)",
      "internal": "256GB 12GB RAM, 512GB 16GB RAM"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "58 MP, f/1.9, 24mm (wide), 1/1.35\", 1.12µm, dual pixel PDAF, OIS",
        "12 MP, f/2.3, 85mm - f/3.5, 170mm (telephoto), continuous optical zoom, dual pixel PDAF, OIS",
        "48 MP, f/2.2, 16mm (ultrawide), 1/2\", dual pixel PDAF"
      ],
      "features": [
        "Zeiss T* lens coating",
        "LED flash",
        "eye tracking",
        "real-time tracking"
      ],
      "video": "4K@24/25/30/60/120fps HDR, 5-axis gyro-EIS, OIS"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "12 MP, f/2.0, 24mm (wide), 1/2.9\""
      ],
      "features": [
        "HDR"
      ],
      "video": "4K@30/60fps, 1080p@30/60fps, gyro-EIS"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "Yes",
      "features": [
        "24-bit/192kHz audio",
        "Dynamic vibration system",
        "360 Reality Audio"
      ]
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
      "bluetooth": "5.4, A2DP, LE Audio, aptX HD, aptX Adaptive, LDAC",
      "positioning": "GPS (L1+L5), GLONASS, BDS, GALILEO, QZSS",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.2, DisplayPort"
    },
    "features": {
      "sensors": [
        "Fingerprint (side-mounted)",
        "accelerometer",
        "gyro",
        "proximity",
        "barometer",
        "compass",
        "color spectrum"
      ],
      "additional": [
        "Native Sony Alpha camera link"
      ]
    },
    "battery": {
      "type": "Li-Ion 5000 mAh",
      "charging": "33W wired, PD3.0, 50% in 30 min, Wireless charging, Reverse wireless"
    },
    "misc": {
      "colors": [
        "Black",
        "Platinum Silver",
        "Khaki Green"
      ],
      "models": [
        "XQ-EC54",
        "XQ-EC72"
      ],
      "price": "$1299.00 / €1399.00"
    },
    "tests": {
      "performance": {
        "antutu": "2610000 (v11)",
        "geekbench": "9100 (v6)",
        "3dmark": "6950 (Wild Life Extreme)"
      },
      "display": "1350 nits max brightness (measured)",
      "loudspeaker": "-24.1 LUFS (Excellent)",
      "battery_life": "Active use score 15:10h"
    }
  },
  {
    "slug": "asus-rog-phone-9-pro",
    "id": 8,
    "brand": "Asus",
    "model": "ROG Phone 9 Pro",
    "name": "Asus ROG Phone 9 Pro",
    "price": 1199.99,
    "priceDisplay": "$1199.99 / €1299.00",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": {
      "announced": "2024, November 19",
      "status": "Available. Released 2024, November 26"
    },
    "body": {
      "dimensions": "163.8 x 76.8 x 8.9 mm",
      "weight": "227 g",
      "build": "Glass front (Gorilla Glass Victus 2), glass back, aluminum frame",
      "sim": "Dual SIM (Nano-SIM, dual stand-by)",
      "protection": "IP68 dust/water resistant (up to 1.5m for 30 min)",
      "features": [
        "Pressure sensitive zones (Gaming triggers)",
        "AniMe Vision LED display (on the back)"
      ]
    },
    "display": {
      "type": "LTPO AMOLED, 1B colors, 185Hz, HDR10, 2500 nits (peak)",
      "size": "6.78 inches",
      "resolution": "1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
      "protection": "Corning Gorilla Glass Victus 2",
      "features": [
        "Always-on display"
      ]
    },
    "platform": {
      "os": "Android 15, ROG UI",
      "chipset": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
      "cpu": "Octa-core (2x4.32 GHz Oryon V2 + 6x3.53 GHz Oryon V2)",
      "gpu": "Adreno 830"
    },
    "memory": {
      "card_slot": "No",
      "internal": "512GB 16GB RAM, 1TB 24GB RAM (UFS 4.0)"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "50 MP, f/1.9, 24mm (wide), 1/1.56\", PDAF, 6-axis gimbal OIS",
        "32 MP, f/2.4, (telephoto), PDAF, OIS, 3x optical zoom",
        "13 MP, f/2.2, 13mm, 120˚ (ultrawide)"
      ],
      "features": [
        "LED flash",
        "HDR",
        "panorama"
      ],
      "video": "8K@30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps; gyro-EIS, HDR10+"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "32 MP, f/2.5, 22mm (wide), 1/3.2\""
      ],
      "features": [
        "Panorama",
        "HDR"
      ],
      "video": "1080p@30fps"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers (2 amplifiers)",
      "jack_3_5mm": "Yes",
      "features": [
        "32-bit/384kHz audio",
        "Dirac Virtuo Spatial Sound"
      ]
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
      "bluetooth": "5.4, A2DP, LE, aptX HD, aptX Adaptive, aptX Lossless",
      "positioning": "GPS (L1+L5), GLONASS, BDS, GALILEO, QZSS, NavIC",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.1 (side), USB Type-C 2.0 (bottom), OTG, accessory connector"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, optical)",
        "accelerometer",
        "gyro",
        "proximity",
        "compass"
      ],
      "additional": []
    },
    "battery": {
      "type": "Si-Carbon 5800 mAh",
      "charging": "65W wired, PD3.0, Quick Charge 5, 100% in 43 min, 15W wireless (Qi), 10W reverse wired"
    },
    "misc": {
      "colors": [
        "Phantom Black"
      ],
      "models": [
        "AI2401_D"
      ],
      "price": "$1199.99 / €1299.00"
    },
    "tests": {
      "performance": {
        "antutu": "2910000 (v11)",
        "geekbench": "9750 (v6)",
        "3dmark": "7600 (Wild Life Extreme)"
      },
      "display": "1650 nits max brightness (measured)",
      "loudspeaker": "-23.5 LUFS (Outstanding)",
      "battery_life": "Active use score 20:15h"
    }
  },
  {
    "slug": "motorola-edge-60-ultra",
    "id": 9,
    "brand": "Motorola",
    "model": "Edge 60 Ultra",
    "name": "Motorola Edge 60 Ultra",
    "price": 999.0,
    "priceDisplay": "$999.00 / €899.00",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": {
      "announced": "2025, April 18",
      "status": "Available. Released 2025, May 02"
    },
    "body": {
      "dimensions": "161.1 x 72.4 x 8.1 mm",
      "weight": "197 g",
      "build": "Glass front (Gorilla Glass Ultra), wood back or eco-leather back, aluminum frame",
      "sim": "SIM + eSIM",
      "protection": "IP68 dust/water resistant (up to 1.5m for 30 min)",
      "features": []
    },
    "display": {
      "type": "P-OLED, 1B colors, 144Hz, HDR10+, Dolby Vision, 2800 nits (peak)",
      "size": "6.7 inches",
      "resolution": "1220 x 2712 pixels, 20:9 ratio (~446 ppi density)",
      "protection": "Corning Gorilla Glass Ultra",
      "features": []
    },
    "platform": {
      "os": "Android 15, Hello UI",
      "chipset": "Qualcomm Snapdragon 8s Gen 4 (4 nm)",
      "cpu": "Octa-core (1x3.3 GHz + 3x3.0 GHz + 4x2.0 GHz)",
      "gpu": "Adreno 745"
    },
    "memory": {
      "card_slot": "No",
      "internal": "512GB 12GB RAM, 1TB 16GB RAM (UFS 4.0)"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "50 MP, f/1.6, (wide), 1/1.3\", omnidirectional PDAF, Laser AF, OIS",
        "64 MP, f/2.4, 72mm (periscope telephoto), 0.7µm, PDAF, OIS, 3x optical zoom",
        "50 MP, f/2.0, 122˚ (ultrawide), 0.8µm, PDAF"
      ],
      "features": [
        "Dual-LED flash2",
        "Panorama",
        "HDR"
      ],
      "video": "4K@30/60fps, 1080p@30/60/120/240fps, 10-bit HDR10+, gyro-EIS"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "50 MP, f/1.9, (wide), 0.64µm, PDAF"
      ],
      "features": [
        "HDR"
      ],
      "video": "4K@30/60fps, 1080p@30/60fps"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": [
        "Snapdragon Sound",
        "Dolby Atmos"
      ]
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band",
      "bluetooth": "5.4, A2DP, LE, aptX HD, aptX Adaptive",
      "positioning": "GPS, GLONASS, GALILEO, BDS, NavIC",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 3.1, OTG, DisplayPort 1.4"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, optical)",
        "accelerometer",
        "gyro",
        "proximity",
        "compass"
      ],
      "additional": [
        "Ultra Wideband (UWB) support",
        "Smart Connect desktop support"
      ]
    },
    "battery": {
      "type": "Li-Po 4700 mAh",
      "charging": "125W wired, 100% in 20 min, 50W wireless, 10W reverse wireless"
    },
    "misc": {
      "colors": [
        "Nordic Wood",
        "Forest Grey",
        "Peach Fuzz"
      ],
      "models": [
        "XT2545-1"
      ],
      "price": "$999.00 / €899.00"
    },
    "tests": {
      "performance": {
        "antutu": "1810000 (v10)",
        "geekbench": "5800 (v6)",
        "3dmark": "5100 (Wild Life Extreme)"
      },
      "display": "1510 nits max brightness (measured)",
      "loudspeaker": "-25.4 LUFS (Very good)",
      "battery_life": "Active use score 13:12h"
    }
  },
  {
    "slug": "nothing-phone-3",
    "id": 10,
    "brand": "Nothing",
    "model": "Phone (3)",
    "name": "Nothing Phone (3)",
    "price": 599.0,
    "priceDisplay": "$599.00 / €649.00 / £549.00",
    "image": null,
    "category": "Smartphones",
    "network": "GSM / HSPA / LTE / 5G",
    "launch": {
      "announced": "2025, July 11",
      "status": "Available. Released 2025, July 21"
    },
    "body": {
      "dimensions": "162.1 x 76.4 x 8.3 mm",
      "weight": "201 g",
      "build": "Glass front (Gorilla Glass 5), transparent glass back, aluminum frame",
      "sim": "Dual SIM (Nano-SIM, dual stand-by)",
      "protection": "IP54 splash and dust resistant",
      "features": [
        "Glyph Interface (LED lights on the back)"
      ]
    },
    "display": {
      "type": "LTPO OLED, 1B colors, 120Hz, HDR10+, 2000 nits (peak)",
      "size": "6.7 inches",
      "resolution": "1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
      "protection": "Corning Gorilla Glass 5",
      "features": [
        "Always-on display"
      ]
    },
    "platform": {
      "os": "Android 15, Nothing OS 3.0",
      "chipset": "Qualcomm Snapdragon 8s Gen 3 (4 nm)",
      "cpu": "Octa-core (1x3.0 GHz Cortex-X4 & 4x2.8 GHz Cortex-A720 & 3x2.0 GHz Cortex-A520)",
      "gpu": "Adreno 735"
    },
    "memory": {
      "card_slot": "No",
      "internal": "128GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM"
    },
    "main_camera": {
      "configuration": "Triple",
      "lenses": [
        "50 MP, f/1.88, 24mm (wide), 1/1.56\", PDAF, OIS",
        "50 MP, f/2.2, 114˚ (ultrawide), 1/2.76\", AF",
        "32 MP, f/2.4, (telephoto), PDAF, OIS, 2x optical zoom"
      ],
      "features": [
        "LED flash, Glyph lights (fill light)",
        "panorama",
        "HDR"
      ],
      "video": "4K@30/60fps, 1080p@30/60fps, gyro-EIS, live HDR"
    },
    "selfie_camera": {
      "configuration": "Single",
      "lenses": [
        "32 MP, f/2.4, (wide), 1/2.74\""
      ],
      "features": [
        "HDR"
      ],
      "video": "1080p@30/60fps"
    },
    "sound": {
      "loudspeaker": "Yes, with stereo speakers",
      "jack_3_5mm": "No",
      "features": []
    },
    "comms": {
      "wlan": "Wi-Fi 802.11 a/b/g/n/ac/6e/7, dual-band, Wi-Fi Direct",
      "bluetooth": "5.3, A2DP, LE, aptX HD, LDAC",
      "positioning": "GPS (L1+L5), GLONASS, BDS, GALILEO, QZSS",
      "nfc": "Yes",
      "radio": "No",
      "usb": "USB Type-C 2.0, OTG"
    },
    "features": {
      "sensors": [
        "Fingerprint (under display, optical)",
        "accelerometer",
        "gyro",
        "proximity",
        "compass"
      ],
      "additional": []
    },
    "battery": {
      "type": "Li-Ion 4900 mAh",
      "charging": "65W wired, PD3.0, 100% in 40 min, 15W wireless, 5W reverse wireless"
    },
    "misc": {
      "colors": [
        "White",
        "Dark Grey"
      ],
      "models": [
        "A015"
      ],
      "price": "$599.00 / €649.00 / £549.00"
    },
    "tests": {
      "performance": {
        "antutu": "1520000 (v10)",
        "geekbench": "5150 (v6)",
        "3dmark": "4650 (Wild Life Extreme)"
      },
      "display": "1210 nits max brightness (measured)",
      "loudspeaker": "-25.8 LUFS (Very good)",
      "battery_life": "Active use score 14:10h"
    }
  }
];
