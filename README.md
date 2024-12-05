# 📦 E-Commerce UI Kit Monorepo

A scalable and reusable component library for e-commerce applications, built with **React.js**, **Nx**, and **TypeScript**.

---

## 🌟 Features

- 🚀 **React.js Based**: Modern and component-driven development.
- 🎨 **Styled Components**: Modular and dynamic CSS-in-JS styling.
- 🧩 **Radix UI Primitives**: Accessible, low-level building blocks.
- 🏗️ **Clean Architecture**: Enforces separation of concerns and maintainable code.
- 📖 **Storybook Integration**: Visualize and test components in isolation.
- ✅ **End-to-End Testing**: Powered by **Cypress** for robust application testing.
- 🔧 **TypeScript Support**: Ensures strong typing for maintainability.
- 🤝 **Flexible and Extendable**: Add new projects using other frameworks or styling tools.
- ⚡ **Automation**: 
  - **GitHub Actions** for continuous integration.
  - **Husky** for pre-commit test automation.

---

## 🚀 Getting Started

### 📋 Prerequisites
- **Node.js** (>= 14.x)
- **Nx CLI**: Install with
   ```bash 
  `npm install -g nx`
    ```

### 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/BrahimS/e-comerce-uikit.git
   cd e-comerce-uikit
    ```
   
Install dependencies:
 ```bash
  npm install
 ```

🛠️ Usage
🖥️ Development Server
Run a development server for a specific app:

 ```bash
npx nx serve [app-name]
 ```

📦 Build Applications
Build an app for production:

 ```bash
npx nx build [app-name]
 ```
🧪 Run Tests
Execute tests for a project:

 ```bash
npx nx test [project-name]
 ```
📖 Storybook
Launch Storybook to visualize and test components in isolation:

 ```bash
npx nx storybook shared-ui
 ```

🧪 Cypress Testing
Run Cypress for end-to-end tests:

 ```bash
npx nx e2e [project-name]
 ```

📂 Project Structure
```strudcture
apps/
  admin/         # Admin dashboard app
  storefront/    # Customer-facing e-commerce app

libs/
  shared-ui/     # Reusable UI components
  utils/         # Shared utility functions

storybook/       # Storybook configuration

e2e/             # Cypress end-to-end tests
 ```

🧩 Radix UI and Custom Components
Built using Radix UI for accessibility and extensibility.
Create custom components or extend existing ones to fit project-specific needs.
🎨 Styling with Styled Components
Utilizes Styled Components for dynamic, scoped, and reusable styles.
Contributors are free to integrate alternative styling tools like SCSS, Tailwind CSS, or Emotion.
🏗️ Clean Architecture
The repository adopts a Clean Architecture approach:

Separation of Concerns: Modular and maintainable code.
Reusability: Ensures scalability and flexibility.
Testability: Isolated layers for robust testing.
🤝 Contributing
We welcome contributions! Follow these steps to contribute:

Fork the repository.
Create a feature branch:
 ```bash
git checkout -b feature/your-feature-name
 ```
Commit your changes:
 ```bash
git commit -m "Describe your changes"
 ```

Push the branch:
 ```bash
git push origin feature/your-feature-name
 ```

Open a pull request.
📜 License
This project is licensed under the MIT License.

