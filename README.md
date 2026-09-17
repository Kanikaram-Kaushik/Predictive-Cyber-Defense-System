# 🛡️ Predictive Cyber Defense System

<p align="center">
  <img src="https://img.shields.io/badge/Status-Demo%20Environment-4CAF50?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-FF9800?style=for-the-badge" alt="Frontend" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge" alt="Backend" />
  <img src="https://img.shields.io/badge/Defense-Redis%20%2B%20ELK-1E88E5?style=for-the-badge" alt="Defense stack" />
</p>

A browser-based simulation of common web attacks and their defenses, designed to demonstrate how a modern security system responds to malicious activity in a realistic, interactive way.

This project combines a victim app, an attacker console, and an admin dashboard to show how rate limiting, IP blocking, credential abuse detection, and real-time threat visibility work together.

## ✨ Highlights

- Simulated web app for a victim organization
- Hacker console to trigger attack patterns
- Admin dashboard to observe and manage threats
- Real-time alerts and logs via Socket.IO
- Redis-backed rate limiting and blacklist enforcement
- Elasticsearch + Logstash-style ingestion pipeline
- Built with vanilla HTML, CSS, and JavaScript for easy learning and demo use

## 🧭 Project Architecture

```text
Predictive-Cyber-Defense-System
├── backend/
│   ├── server.js              # Express API + defense middleware
│   ├── logstash.conf          # Log ingestion configuration
│   ├── reset_redis.js         # Helper to clear Redis state
│   ├── package.json           # Node.js dependencies
│   └── package-lock.json
├── frontend_victim/           # Simulated target application
├── frontend_hacker/           # Attack simulation interface
├── frontend_admin/            # Security admin dashboard
├── .gitignore
└── README.md
```

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- Real-time communication: Socket.IO
- Security logic: Redis
- Analytics pipeline: Elasticsearch + Logstash
- Authentication: JWT for admin access

## 🚨 What the System Demonstrates

- Brute-force login detection
- DDoS traffic spikes and rate limiting
- Malicious payload signature blocking
- IP blacklisting and unblocking flows
- Real-time security event visualization
- Separate user, attacker, and admin perspectives

## 🧪 Demo Workflow

1. Start the backend server
2. Open the victim site in a browser
3. Use the hacker interface to launch attack scenarios
4. Observe logs and alerts in the admin console
5. Block or unban suspicious IPs from the admin dashboard

## 🚀 Getting Started

### Prerequisites

Make sure the following are available locally:

- Node.js (v18+ recommended)
- Redis
- Elasticsearch
- Logstash

### 1) Install dependencies

```bash
cd backend
npm install
```

### 2) Start Redis

```bash
redis-server
```

### 3) Start Elasticsearch

Follow your local Elasticsearch setup or use a running instance on:

```text
http://localhost:9200
```

### 4) Start Logstash

```bash
logstash -f backend/logstash.conf
```

### 5) Run the app

```bash
cd backend
npm start
```

Then open:

- Victim site: `http://localhost:3000`
- Admin console: `http://localhost:3000/admin/login.html`
- Hacker console: `http://localhost:3000/hacker`

## 🔐 Default Admin Credentials

```text
Username: admin
Password: admin123
```

## 📁 Key Files

- `backend/server.js` — application logic, middleware, routes, and threat enforcement
- `backend/logstash.conf` — log ingestion config for ELK pipeline
- `frontend_victim/` — the simulated target web application
- `frontend_hacker/` — attacker-side simulation tools
- `frontend_admin/` — security monitoring dashboard

## 🧠 Use Case

This repository is ideal for:

- cybersecurity education
- demoing attack-defense workflows
- understanding web attack signatures and mitigations
- prototype security dashboards and alert systems
- learning how a defense stack can respond to malicious traffic in real time

## 🤝 Contribution

Contributions, ideas, and improvements are welcome. If you want to extend the project with machine learning detection, improved dashboards, or more attack scenarios, feel free to fork the repo and submit a pull request.

## 📜 License

This project is available for educational and demonstration purposes. Please check the repository license if one is added later.

---

<p align="center">
  <strong>Built for learning, simulation, and cyber defense awareness.</strong>
</p>
