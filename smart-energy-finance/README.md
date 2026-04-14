## 📊 Overview

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/compteur.png" width="900"/>

Smart Energy Finance is an advanced Home Assistant add-on designed to analyze the financial side of your energy system.

It helps you understand:

* real electricity cost
* solar production value
* battery profitability
* grid dependency
* self-sufficiency level
* savings over time

The add-on automatically creates Home Assistant entities and a ready-to-use dashboard to display daily, monthly, and yearly energy financial analytics.

---

## ❤️ Support the developer

If you like this project, you can support development here:

[![Ko-fi](https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/kofi-button.png)](https://ko-fi.com/tapion69)

Premium access is available via Ko-fi.
After support/purchase, you will receive your premium key.

---

## ⚠️ Important recommendation

For the best results, it is **strongly recommended** to use:

* ✅ daily energy counters in **kWh**
* ❌ NOT raw power sensors in **W**

Why:

* more accurate calculations
* better long-term stability
* reliable daily / monthly / yearly history
* fewer errors and drift over time

Power sensors can work in some cases, but energy counters remain the best and most reliable solution.

---

## 🔌 Compatibility

This module is compatible with:

* inverters
* solar panels
* battery systems
* Home Assistant energy sensors
* custom entities from other add-ons or integrations

It is designed to remain flexible and can work with many different system types as long as the required Home Assistant entities are available.

---

## 💰 What Smart Energy Finance does

The add-on automatically calculates and creates entities for:

* daily savings
* monthly savings
* yearly savings
* solar production financial value
* battery discharge financial value
* real total cost including subscription
* estimated cost without solar
* import/export cost analysis
* self-sufficiency and grid dependency ratios

---

## ⚡ Premium Energy Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/energie.png" width="900"/>

The Energy dashboard includes:

* solar / battery / grid distribution
* real-time energy mix
* self-sufficiency analysis
* grid dependency overview
* energy cost context
* premium analytics cards

---

## 🔋 Premium Battery Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/batterie.png" width="900"/>

The Battery dashboard includes:

* battery charge / discharge analysis
* battery usage financial value
* monthly and yearly battery statistics
* premium donut charts
* detailed battery savings view

---

## 💶 Premium Economy Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/smart-energy-finance/docs/images/economie.png" width="900"/>

The Economy dashboard includes:

* daily financial distribution
* monthly savings view
* yearly savings view
* solar value analysis
* battery savings impact
* subscription cost effect
* premium donut charts and history view

---

## 📈 Premium Features

Smart Energy Finance includes a **Premium mode** that unlocks advanced features.

### Premium includes:

* advanced premium dashboards
* daily / monthly / yearly history
* battery financial analytics
* advanced donut charts
* long-term statistics
* richer Home Assistant views
* premium insights for energy optimization

---

## 💳 How to get Premium

Premium is available through Ko-fi:

[https://ko-fi.com/tapion69](https://ko-fi.com/tapion69)

After support/purchase, you receive your premium key.
This key can then be added to the add-on configuration to unlock premium features.

---

## ⚙️ Example configuration

mqtt_host: core-mosquitto
mqtt_port: 1883
mqtt_user: user
mqtt_password: password

currency: EUR
contract_type: tempo

monthly_subscription_price: 12.5

dashboard_language: en
dashboard_custom_cards_installed: true

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

### History

* sensor.smart_energy_finance_history_archive

  * daily
  * monthly
  * yearly

---

## 🚀 Automatic dashboard creation

The add-on automatically creates a premium dashboard inside Home Assistant.

This means:

* no manual Lovelace setup required
* automatic entity usage
* FR / EN dashboard support
* works with or without custom cards
* optimized for premium visual presentation

---

## 🛠️ Technologies used

* Node-RED
* MQTT Discovery
* ApexCharts
* Home Assistant Supervisor API

---

## 🧑‍💻 Author

Developed by Tapion69

---

## ❤️ Support

If you enjoy this project and want to support development:

[https://ko-fi.com/tapion69](https://ko-fi.com/tapion69)
