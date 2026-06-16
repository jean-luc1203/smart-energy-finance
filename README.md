# Smart Energy Finance

## 📊 Overview

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/compteur.png" width="900"/>

➡️ French documentation:  
https://github.com/jean-luc1203/smart-energy-finance/blob/main/smart-energy-finance/README_FR.md

Smart Energy Finance is an advanced Home Assistant add-on designed to analyze the financial side of your energy system.

It helps you understand:

* real electricity cost
* solar production value
* battery profitability
* grid dependency
* self-sufficiency level
* savings over time

The add-on automatically creates Home Assistant entities and dashboards to display daily, monthly and yearly financial analytics.

---

# 🖥️ New Premium HTML Dashboard (v0.2.5)

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/news%20dashboard.png" width="900"/>

Smart Energy Finance now includes a brand-new Premium HTML Dashboard.

Designed for desktop, tablet and mobile devices, it provides a modern interface focused on energy savings, profitability analysis and financial monitoring.

### Features

* Modern responsive HTML interface
* Daily, monthly and yearly savings dashboards
* Interactive financial donut charts
* Advanced historical charts
* Detailed energy cost analysis
* Real-time financial indicators
* Automatic FR / EN language support
* Automatic dashboard generation
* Premium Smart Energy ecosystem integration

### Smart Energy Premium Ecosystem

The new dashboard supports automatic integration with other SmartPhoton Premium modules.

When several Premium modules are installed:

* JK-BMS
* Smart Voltronic
* Smart Energy Finance
* Future SmartPhoton modules

They are automatically merged into a single unified dashboard with shared navigation.

If Smart Energy Finance is installed alone, a standalone dashboard is automatically created.

---

## ❤️ Support the developer

If you like this project, you can support development here:

[![Ko-fi](https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/kofi-button.png)](https://ko-fi.com/tapion69)

Premium access is available via Ko-fi.  
After support/purchase, you will receive your premium key.

---

## ⚠️ Important recommendation

For the best results, it is strongly recommended to use:

* ✅ Daily energy counters in kWh
* ❌ Raw power sensors in W

Why?

* More accurate calculations
* Better long-term stability
* Reliable daily, monthly and yearly history
* Reduced calculation drift
* Better financial precision

Power sensors can work in some cases, but energy counters remain the most reliable solution.

---

## 🔌 Compatibility

This module is compatible with:

* Solar systems
* Battery storage systems
* Home Assistant Energy Dashboard
* Smart Voltronic
* JK-BMS
* Custom Home Assistant entities
* MQTT energy integrations

The add-on is designed to remain flexible and work with many different system architectures.

---

## 💰 What Smart Energy Finance calculates

The add-on automatically creates financial entities for:

* Daily savings
* Monthly savings
* Yearly savings
* Solar production value
* Battery discharge value
* Grid import costs
* Grid export revenue
* Real cost including subscription
* Estimated cost without solar
* Self-sufficiency ratio
* Grid dependency ratio

---

## ⚡ Premium Energy Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/energie.png" width="900"/>

The Energy dashboard includes:

* Solar / Battery / Grid distribution
* Real-time energy mix
* Self-sufficiency analysis
* Grid dependency overview
* Energy cost context
* Premium analytics cards

---

## 🔋 Premium Battery Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/batterie.png" width="900"/>

The Battery dashboard includes:

* Battery charge analysis
* Battery discharge analysis
* Battery profitability tracking
* Monthly and yearly battery statistics
* Premium donut charts
* Detailed savings analytics

---

## 💶 Premium Economy Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/economie.png" width="900"/>

The Economy dashboard includes:

* Daily financial distribution
* Monthly savings tracking
* Yearly savings tracking
* Solar value analysis
* Battery contribution analysis
* Subscription impact analysis
* Historical charts
* Premium financial analytics

---

## 📈 Premium Features

Premium mode unlocks advanced capabilities:

### Included with Premium

* Premium Lovelace dashboards
* Premium HTML dashboard
* Interactive financial charts
* Daily / Monthly / Yearly history
* Advanced battery analytics
* Long-term statistics
* Historical archives
* Financial performance monitoring
* Smart Energy Premium integration
* Automatic dashboard generation

---

## 💳 How to get Premium

Premium access is available through Ko-fi:

https://ko-fi.com/tapion69

After support/purchase, you will receive a Premium Key.

Simply add the key to the add-on configuration to unlock Premium features.

---

## ⚙️ Example configuration

```yaml
mqtt_host: core-mosquitto
mqtt_port: 1883
mqtt_user: user
mqtt_password: password

currency: EUR
contract_type: tempo

monthly_subscription_price: 12.5

dashboard_language: en
dashboard_custom_cards_installed: true
premium_key: YOUR_KEY
```

---

## 📊 Main generated sensors

### Financial

* sensor.smart_energy_finance_day_savings_vs_no_solar
* sensor.smart_energy_finance_month_savings_vs_no_solar
* sensor.smart_energy_finance_year_savings_vs_no_solar

### Energy

* sensor.smart_energy_finance_day_solar_kwh
* sensor.smart_energy_finance_day_grid_import_kwh
* sensor.smart_energy_finance_day_grid_export_kwh
* sensor.smart_energy_finance_day_load_kwh

### Battery

* sensor.smart_energy_finance_battery_day_savings
* sensor.smart_energy_finance_battery_month_savings
* sensor.smart_energy_finance_battery_year_savings

### History Archive

* sensor.smart_energy_finance_history_archive

Contains:

* Daily history
* Monthly history
* Yearly history

---

## 🚀 Automatic Dashboard Generation

The add-on automatically generates:

* Premium Home Assistant dashboards
* Premium HTML dashboards
* FR / EN interfaces based on add-on configuration
* Shared Smart Energy Premium dashboards when multiple modules are installed

No manual Lovelace configuration is required.

The system automatically detects other SmartPhoton Premium modules and integrates them into a unified dashboard experience.

---

## 🛠️ Technologies used

* Node-RED
* MQTT Discovery
* Home Assistant Supervisor API
* HTML5
* JavaScript
* ApexCharts

---

## 🧑‍💻 Author

Developed by Tapion69

---

## ❤️ Support

If you enjoy this project and would like to support future development:

https://ko-fi.com/tapion69
