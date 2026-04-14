# ⚡ Smart Energy Finance

### Financial management of your electricity provider’s various kWh rates.

---

## ❤️ Support the developer

If you like this project, you can support development here:

[![Ko-fi](https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/images/kofi-button.png)](https://ko-fi.com/tapion69)

---

## 📊 Overview

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/images/economie.png" width="800"/>

Smart Energy Finance is an advanced Home Assistant add-on designed to:

* 💰 Calculate real energy costs
* ⚡ Track solar production value
* 🔋 Evaluate battery profitability
* 📈 Analyze savings over time

---

## 🔌 Compatibility

This module is compatible with:

* Inverters
* Solar panels
* Battery systems
* Any Home Assistant energy sensors

---

## ⚙️ What it does

The system automatically creates Home Assistant entities to track:

* Daily savings
* Monthly savings
* Yearly savings
* Real cost with and without solar
* Battery value contribution

---

## ⚡ Energy Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/images/energie.png" width="800"/>

* Solar / Battery / Grid distribution
* Real-time energy mix
* Self-sufficiency tracking
* Grid dependency analysis

---

## 🔋 Battery Analytics

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/images/batterie.png" width="800"/>

* Charge / discharge tracking
* Battery energy usage
* Financial value of battery usage
* Monthly and yearly breakdown

---

## 💰 Economy Dashboard

<img src="https://raw.githubusercontent.com/jean-luc1203/smart-energy-finance/main/images/economie.png" width="800"/>

* Daily financial distribution
* Monthly overview
* Yearly analysis
* Subscription cost impact
* Solar profitability

---

## 📈 Premium Features

Smart Energy Finance includes a **Premium mode** that unlocks advanced features:

### 🔓 Premium unlocks:

* 📊 Advanced dashboards
* 📈 Historical analytics (daily / monthly / yearly)
* 🔋 Battery financial analysis
* 💡 Smart energy insights
* 📉 Detailed cost breakdown

---

## 🧠 Key Concepts

### 💰 Savings vs No Solar

The system calculates how much you saved compared to a full grid usage scenario.

---

### 🔋 Battery Value

Battery discharge is converted into real financial savings based on current electricity price.

---

### ⚡ Dynamic Pricing Support

Supports:

* Fixed tariffs
* Time-based pricing
* Tempo (EDF France)

---

## ⚙️ Configuration

Example configuration:

mqtt_host: core-mosquitto
mqtt_port: 1883
mqtt_user: user
mqtt_password: password

currency: EUR

contract_type: tempo

monthly_subscription_price: 12.5

dashboard_language: fr
dashboard_custom_cards_installed: true

---

## 📊 Generated Sensors

### 💰 Financial

* sensor.smart_energy_finance_day_savings_vs_no_solar
* sensor.smart_energy_finance_month_savings_vs_no_solar
* sensor.smart_energy_finance_year_savings_vs_no_solar

---

### ⚡ Energy

* sensor.smart_energy_finance_day_solar_kwh
* sensor.smart_energy_finance_day_grid_import_kwh

---

### 🔋 Battery

* sensor.smart_energy_finance_battery_day_savings
* sensor.smart_energy_finance_battery_month_savings

---

### 📈 History

* sensor.smart_energy_finance_history_archive

  * daily
  * monthly
  * yearly

---

## 🚀 Automatic Dashboard

The add-on automatically creates a full premium dashboard inside Home Assistant:

* No manual configuration needed
* Works with or without custom cards
* Fully translated (FR / EN)

---

## 🛠️ Technology

* Node-RED
* MQTT Discovery
* ApexCharts
* Home Assistant Supervisor API

---

## 📌 Roadmap

* CSV export
* Advanced analytics
* Energy score
* Forecast system

---

## 🧑‍💻 Author

Developed by Tapion69

---

## ❤️ Support

If you enjoy this project, consider supporting development:

👉 [https://ko-fi.com/tapion69](https://ko-fi.com/tapion69)

---
