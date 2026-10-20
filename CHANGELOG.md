# Smart Energy Finance — v0.3.1

## 🚀 Major Update — Premium Custom Consumption Tracking

Version 0.3.1 introduces a new Premium consumption monitoring system, allowing users to track the energy usage and estimated electricity costs of individual devices directly from Home Assistant.

### ⚡ New — Custom Consumption Monitoring

- New dedicated **Consumption** dashboard section.
- Add and configure multiple devices directly from the HTML dashboard.
- Compatible with electric vehicles, appliances, heating systems, pool equipment and other electrical devices.
- Supports Home Assistant energy counters (Wh/kWh) and power sensors (W/kW).
- Automatic sensor unit detection.
- Automatic energy integration based on actual elapsed time for power sensors.
- Daily, monthly and yearly energy consumption tracking.
- Estimated electricity cost calculations using the configured electricity tariff.
- Compatible with fixed-price, time-based and EDF Tempo contracts.
- Independent consumption tracking without modifying existing Finance calculations.

### 🎨 Dashboard Improvements

- New device configuration interface.
- 92 icons organized into 9 categories.
- Improved icon selection and navigation.
- Interactive consumption charts and detailed device information.
- Clearer cost information and explanations.
- Improved responsive interface for desktop, tablet and mobile.
- French and English support.

### 📁 Device Organization & Data Management

- New device grouping options for better organization.
- Dedicated configuration persistence for custom consumption monitoring.
- Backup and restore functionality for custom consumption settings.
- Improved separation between custom device data and core Finance data.

### 🛠️ Improvements & Fixes

- Removed manual sensor unit selection.
- Removed unnecessary fixed integration interval settings.
- Improved handling of unavailable sensor values.
- Improved cumulative energy counter handling.
- Existing cumulative sensor values are not counted as new consumption when monitoring starts.
- Fixed icon selector closing unexpectedly during dashboard updates.
- Reduced unnecessary configuration interface rebuilds.
- Improved stability when updating device settings.
- Preserved compatibility with existing Finance functions.

### ℹ️ Important Information

Custom consumption costs are estimates based on the configured electricity tariff.

For systems using solar panels and battery storage, these calculations do not necessarily represent the actual amount billed by the electricity provider.

The monitoring system does not automatically distinguish between grid electricity, solar production and battery energy.

### 🔒 Premium Features

Custom consumption monitoring and its advanced dashboard features are available to Premium users.

Existing standard Finance features remain unchanged.

### 🌍 Compatibility

- Home Assistant
- Node-RED
- Smart Energy Finance Premium HTML Dashboard
- Desktop, tablet and mobile devices
- French and English interfaces

---

**Smart Energy Finance v0.3.1 — More flexibility, better device monitoring and improved energy cost visibility.**

### **Changelog 0.2.8**

* Bug fixe to history 

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
