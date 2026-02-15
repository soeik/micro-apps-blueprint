# Micro-Frontend Orchestration PoC (Nginx + Vite)

This Proof of Concept (PoC) demonstrates a micro-frontend (MFE) architecture using **Nginx** as a reverse proxy to orchestrate multiple independent applications within a unified environment.

## 🏗 Project Structure

The project consists of three main frontend services managed by a Gateway:

- **Gateway (Nginx):** Acts as a single entry point, handling path-based routing (`/app/deals`, `/app/tasks`) to isolated containers.
- **Shell:** The host application (entry point).
- **Deals & Tasks:** Independent micro-frontend modules served as separate services.

## 🚀 Key Features

- **Path-Based Routing:** Clean Nginx configuration mapping specific sub-paths to independent Docker services.
- **Unified Build Workflow:** Automated sequential build process for all sub-projects before containerization.
- **Dockerized Infrastructure:** Full environment isolation for each MFE, ensuring consistent behavior.
- **Vite Integration:** Optimized production builds for each micro-app module.

## 🛠 Tech Stack

- **Orchestration:** Docker, Docker Compose
- **Proxy/Web Server:** Nginx
- **Bundler:** Vite
- **Services:** Node.js-based frontend applications

## 🚦 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com
    ```

2.  **Build and Launch:** Run the following command to build all modules and start the infrastructure:

    ```bash
    npm install
    npm run start:full - builds all applications and start infrastructure
    ```

3.  **Local Access:**
    - **Shell:** [http://localhost/](http://localhost/)
    - **Deals Module:** [http://localhost/app/deals/](http://localhost/app/deals/)
    - **Tasks Module:** [http://localhost/app/tasks/](http://localhost/app/tasks/)

## 📝 Configuration Notes

- **Nginx:** Uses `proxy_pass` to route traffic to internal Docker services.
- **Vite:** Applications are currently configured to expect a fixed sub-path (e.g., `/app/deals/`).

## 🛠 Future Work

- Implementation of **Environment Agnostic Routing** (self-determining base paths).
- Dynamic `basename` detection for client-side routing.
- Shared component library integration.
- Vite Module Federation for reusable business logic.
