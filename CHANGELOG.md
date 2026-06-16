# Smart Energy Finance v0.2.5

## 🖥️ New Premium HTML Dashboard

![Smart Energy Finance Dashboard](https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/news%20dashboard.png)

### 🚀 New Features
- Brand-new Premium HTML Dashboard.
- Fully responsive design for desktop, tablet and mobile.
- Interactive donut charts and historical graphs.
- Automatic FR / EN language support.
- Automatic dashboard generation.

### 🔄 Dashboard Modes
New dashboard generation options:
- `lovelace` → Lovelace dashboard only
- `html` → HTML dashboard only
- `both` → Lovelace + HTML dashboards
- `disabled` → No dashboard generation

### 🔗 Smart Energy Premium Integration
- Automatic integration with existing Premium dashboards.
- Compatible with JK-BMS Premium and Smart Voltronic Premium.
- Shared multi-module dashboard support.

### 🔧 Improvements
- Improved dashboard generation and updates.
- Better multi-dashboard management.
- Reduced Premium-related log verbosity.
- Various UI and performance optimizations.

### 🐞 Fixes
- Fixed dashboard integration issues.
- Fixed several HTML dashboard generation problems.
- Improved dashboard stability and navigation.

# 🚀 Smart Energy Finance — v0.2.0

## ✨ Added

* Manual correction of energy (kWh) and financial (€) data from Home Assistant
* Ability to edit any past date
* Automatic recalculation of day, month, and year totals

## 📌 Date format

* Required format: `YYYY-MM-DD` (e.g. 2026-05-04)

## 🔒 Safety

* Cannot modify current or future dates

## 🧹 Misc

* Added "Clear correction fields" button
* Added last correction status sensor
* Data persistence after restart

---


### **Changelog 0.1.9**

* Bug fixe to restart 


### **Changelog 0.1.7**

* Bug fixe 

### **Changelog 0.1.6**

**New**

* Added `send_bip` option

**Details**

* Introduces a new optional `send_bip` setting in the add-on configuration
* This option is used **only for anonymous usage tracking** (number of active installations)
* No personal data or sensitive information is collected

**Notes**

* Feature is enabled by default
* Can be disabled at any time via the add-on options

---

## 🚀 Version 0.1.5

### 🎉 Initial Release

* First public release of **Smart Energy Finance**
* Full Home Assistant add-on integration
* Automatic MQTT discovery for all entities
* Automatic dashboard creation (Energy / Economy / Battery)

---

### ⚡ Core Features

* Real-time energy financial analysis
* Solar production value calculation
* Battery financial impact analysis
* Grid import / export cost tracking
* Daily / Monthly / Yearly savings calculation

---

### 📊 Dashboard

* Fully automated premium dashboard
* Energy distribution view (solar / battery / grid)
* Financial donut charts
* Battery analytics dashboard
* Economy dashboard with detailed breakdown

---

### 📈 Premium Features

* Advanced dashboards and analytics
* Daily / Monthly / Yearly history tracking
* Battery financial insights
* Enhanced visualizations and charts

---

### ⚙️ Configuration

* Support for multiple contract types:

  * Fixed pricing
  * Time-based tariffs
  * Tempo (EDF France)
* Custom currency support
* Flexible input system (energy or power sensors)

---

### 🌍 Internationalization

* Full English support
* Full French support
* Dashboard auto-translation (FR / EN)

---

### 🛠️ Technical

* Node-RED powered engine
* MQTT-based architecture
* Persistent storage system
* Timezone normalization and validation
* Runtime dependency management

---

### ❤️ Notes

* Premium access available via Ko-fi
* Energy (kWh) sensors recommended for best accuracy

---
