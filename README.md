# NativeFederationMFE

**NativeFederationMFE** is a demonstration of a **Micro-Frontend (MFE) architecture built with Angular** using **Native Federation** — a modern way to compose independently developed front-end apps at runtime. This repository shows how to structure multiple Angular applications (shell + remotes) in a monorepo and share runtime dependencies without bundling conflicts.

Native Federation leverages Angular’s ESBuild-based build system and browser-native capabilities (ESM + importmaps), enabling fast builds and true micro-frontend integration across teams and deployments.

---

## 🧠 Why Native Federation?

Micro-frontends help large applications scale by splitting them into smaller, independently deployed parts. Native Federation builds on this idea by offering a **browser-native alternative to traditional Module Federation**, without requiring webpack and aligning with Angular’s modern CLI tooling. :contentReference[oaicite:0]{index=0}

---

## 📁 Project Structure

```

NativeFederationMFE/
├── projects/
│   ├── core/               # Host app (Shell)
│   ├── mfe1/                # Remote Angular app 1
│   ├── mfe2/                # Remote Angular app 2
│   ├── shared-ui/           # Shared UI library
│   ├── shared-auth/         # Shared Auth library
│   ├── shared-events/       # Shared event contracts & bus
├── angular.json
├── package.json
└── README.md

````

---

## 🚀 Key Concepts

### Shell (Host)

- Bootstraps the application
- Loads remote micro-frontends dynamically
- Defines routing and shared UI

### Remotes (MFEs)

- Independently served Angular applications
- Expose modules/components via Native Federation

### Shared Libraries

- Code shared between apps
- Includes events, UI components, and utilities
- Built once and linked to all consuming apps

### Native Federation

Native Federation allows applications to share modules dynamically using browser standards (ESM and import maps). It provides faster builds and better integration with Angular CLI’s esbuild support compared to traditional Module Federation. :contentReference[oaicite:1]{index=1}

---

## 🧩 Features

✔ Standalone Angular applications composed at runtime  
✔ Shared business logic (events, UI, auth)  
✔ Fast ESBuild-based builds  
✔ Clear separation between host and remotes  
✔ Modern Angular CLI integration

---

## 📦 Prerequisites

Make sure you have installed:

- Node.js (latest LTS recommended)
- Angular CLI (v16+ recommended)

---

## 👩‍💻 Local Development

### Install dependencies

```bash
npm install
````

### Serve the applications

In separate terminals:

```bash
ng serve core --port 4200
ng serve mfe1 --port 4201
ng serve mfe2 --port 4202
```

Navigate to `http://localhost:4200` to see the shell app loading remotes.

---

## 🏗️ Production Build

Build each project for production:

```bash
ng build shell --configuration production
ng build core --configuration production
ng build mfe1 --configuration production
ng build mfe2 --configuration production
ng build notification --configuration production
```

Deploy the contents of the `dist/` folders to your chosen host.

---

## 💡 Shared Events & Communication

This project uses a shared **EventBusService** to broadcast domain events (e.g., `ORDER_CREATED`), and the shell listens and displays notifications via a popup/snackbar mechanism. Events are defined in a shared library and consumed across MFEs to enable decoupled communication.

---

## 🛠 Tips & Best Practices

* Ensure shared Angular dependencies are marked singleton in federation config to avoid duplication.
* Use **native import maps** for production asset URLs.
* Keep UI-agnostic code (events, business logic) separated from UI logic.

---

## 📜 Learn More

To understand the key ideas behind Native Federation and Angular micro-frontends:

* Micro-Frontends with Native Federation article (browser-native federation fundamentals) ([DEV Community][1])
* Angular Micro-Frontend Architecture guides (intro to modular frontend ecosystems) ([DEV Community][2])


```

---

## 🔧 What you *can further add* (optional)

You might want to include:

✔ Screenshots of the running app  
✔ Federation configuration samples  
✔ Example routes (shell + remotes)  
✔ Deployment instructions (Netlify / AWS / GitHub Pages)  

---
