# 🌟 ATTRI Foundation – NGO Website

## 🏢 Overview

ATTRI Foundation is a non-profit organization dedicated to empowering women, supporting children with special needs, and driving positive change across communities. This web application enables seamless donations, showcases our mission, and connects supporters with our causes and events.

---

## ✨ Features

- 💳 **Online Donations**: Secure payment integration with Razorpay.
- 🎯 **Cause Highlights**: Detailed sections for education, environment, animal welfare, and more.
- 📅 **Events & Updates**: Stay informed about upcoming events and initiatives.
- 👩‍💼 **Team & Supporters**: Meet our team and see our partners.
- 📬 **Contact & Outreach**: Easy-to-use contact form and location map.
- 📱 **Responsive Design**: Optimized for all devices.

---

## 🛠️ Tech Stack

<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><b>Frontend</b></td>
    <td>
      <img src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white" alt="React" />
      <img src="https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white" alt="Vite" />
      <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind" />
      <img src="https://img.shields.io/badge/-DaisyUI-FFB300?logo=daisyui&logoColor=white" alt="DaisyUI" />
      <img src="https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white" alt="Redux" />
      <img src="https://img.shields.io/badge/-Chart.js-FF6384?logo=chartdotjs&logoColor=white" alt="Chart.js" />
      <img src="https://img.shields.io/badge/-Framer%20Motion-EF008F?logo=framer&logoColor=white" alt="Framer Motion" />
    </td>
    <td>UI, State Management, Animations, Charts</td>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td>
      <img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" />
      <img src="https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white" alt="Express" />
      <img src="https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
      <img src="https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white" alt="Mongoose" />
    </td>
    <td>API, Server, Database</td>
  
  </tr>
  <tr>
    <td><b>Payments</b></td>
    <td>
      <img src="https://img.shields.io/badge/-Razorpay-02042B?logo=razorpay&logoColor=white" alt="Razorpay" />
    </td>
    <td>Payment Gateway</td>

  </tr>
  <tr>
    <td><b>Other</b></td>
    <td>
      <img src="https://img.shields.io/badge/-dotenv-10AA50?logo=dotenv&logoColor=white" alt="dotenv" />
      <img src="https://img.shields.io/badge/-CORS-0052CC?logo=cors&logoColor=white" alt="CORS" />
      <img src="https://img.shields.io/badge/-Morgan-000000?logo=morgan&logoColor=white" alt="Morgan" />
      <img src="https://img.shields.io/badge/-EmailJS-00B2B2?logo=emailjs&logoColor=white" alt="EmailJS" />
    </td>
    <td>Environment, Security, Logging, Email</td>

  </tr>
</table>

---

## 🚀 Getting Started

### ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

### 📝 Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/attri-foundation.git
   cd attri-foundation
   ```

2. **Install dependencies:**
   ```bash
   npm run install-server
   npm run install-client
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.development.local` and `.env.production.local` in `/server` and `/client` as needed.
   - Set your Razorpay keys, MongoDB URI, and EmailJS credentials.

4. **Run the development servers:**
   - **Backend:**
     ```bash
     npm run start-server
     ```
   - **Frontend:**
     ```bash
     npm run start-client
     ```

   > 🖥️ The frontend runs on [http://localhost:5173](http://localhost:5173)  
   > 🗄️ The backend runs on [http://localhost:3000](http://localhost:3000) by default.

---

## 🔑 Environment Variables

### 🗂️ Server (`/server/.env.*.local`)
- `PORT` – Server port (default: 3000)
- `RAZORPAY_KEY_ID` – Razorpay API Key ID
- `RAZORPAY_KEY_SECRET` – Razorpay API Secret
- `MONGODB_URI` – MongoDB connection string

### 🗂️ Client (`/client/.env`)
- `VITE_RAZORPAY_KEY_ID` – Razorpay API Key ID (public)
- `VITE_EMAILJS_SERVICE_ID` – EmailJS Service ID
- `VITE_EMAILJS_TEMPLATE_ID` – EmailJS Template ID
- `VITE_EMAILJS_PUBLIC_KEY` – EmailJS Public Key

---

## 🧑‍💻 Usage

- Visit the homepage to learn about our mission and donate.
- Explore **What We Do** and **About Us** for more information.
- Use the contact form for inquiries or partnership opportunities.

---

## 📁 Folder Structure

```
/client      # React frontend
/server      # Node.js/Express backend
```

- See each folder's README or documentation for more details.

---

## 🤝 Contribution

We welcome contributions! Please open issues or submit pull requests for improvements.

---


<p align="center">
  <b>Empowering lives, protecting the future – together.</b><br>
  <img src="https://img.icons8.com/color/96/charity.png" alt="Charity Icon" width="48"/>
</p>
