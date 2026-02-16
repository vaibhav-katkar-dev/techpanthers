
# 🚀 TechPanthers: Store Placement Analysis

![Project Banner](https://img.shields.io/badge/TechPanthers-Store%20Placement%20Analysis-blue?style=for-the-badge&logo=google-maps)

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/License-ISC-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status">
</p>

## 🌟 Overview

**TechPanthers** is an advanced analytics platform designed to revolutionize retail expansion strategies. By leveraging data-driven insights, this tool helps businesses identify the most profitable locations for new store openings.

The platform analyzes critical metrics such as:
- 👥 **Population Density**
- 🚶 **Foot Traffic**
- 📦 **Daily Order Volume**
- 🏪 **Existing Competitor Analysis**

Through interactive heatmaps and real-time data visualization, TechPanthers provides actionable recommendations, highlighting high-potential areas (Green Zones) while warning against saturated markets (Red Zones).

---

## ✨ Key Features

- **📍 Interactive Heatmap Visualization**: Instantly visualize city zones color-coded by demand:
  - 🟢 **High Demand:** Prime location for new stores.
  - 🟡 **Medium Demand:** Moderate potential.
  - 🔴 **Low Demand/Saturated:** Avoid expansion.
  
- **🤖 Smart Recommendation Engine**: Algorithms analyze multiple data points to suggest the *single best* location in a selected city for maximum profitability.

- **📊 Dynamic Dashboards**: 
  - Real-time charts powered by **Chart.js** displaying population vs. demand.
  - Revenue projections and growth trend analysis.

- **🏙️ Multi-City Support**: Comprehensive data coverage for major metropolitan areas including **Pune, Mumbai, Delhi, and Bangalore**.

- **⚡ Real-Time Updates**: Built with **Socket.io** for seamless, real-time data communication.

---

## 🛠️ Tech Stack

### Frontend
- **HTML5 & CSS3** (Custom Responsive Design)
- **EJS** (Embedded JavaScript Templates)
- **Leaflet.js** (Interactive Maps & Heatmaps)
- **Chart.js** (Data Visualization)

### Backend
- **Node.js** (Runtime Environment)
- **Express.js** (Web Framework)
- **Socket.io** (Real-time Bidirectional Communication)

### Database & Storage
- **MongoDB & Mongoose** (Data Modeling)
- **JSON Setup** (Rapid Prototyping Data Structure)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaibhav-katkar-dev/techpanthers.git
   cd techpanthers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Database**
   - Ensure your local MongoDB instance is running on `mongodb://127.0.0.1:27017/techpanthers`
   - Alternatively, update the connection string in `app.js` to your MongoDB Atlas URI.

4. **Run the Application**
   ```bash
   node app.js
   ```

5. **Access the Dashboard**
   - Open your browser and navigate to: `http://localhost:8080/dash`

---

## 📸 MVP Prototype

This project is currently a **Small MVP (Minimum Viable Product) Prototype**. The screenshot below demonstrates the core functionality, including the dashboard, city selection, heatmap analysis, and population density charts.

![MVP Dashboard Prototype](mvp_dashboard.png)

---

## 🤝 Contributors

We love contributions! Special thanks to the team behind TechPanthers:

- **👨‍💻 [Vaibhav Katkar](https://github.com/vaibhav-katkar-dev)** - *Full Stack Developer*
- **👨‍💻 [Mahesh Thombare](https://github.com/MaheshThombare07)** - *Full Stack Developer*

---

## 📄 License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by the <b>TechPanthers Team</b>
</p>