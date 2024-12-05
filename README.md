E-Commerce UI Kit Monorepo
A scalable and reusable component library for e-commerce applications, built with React.js, Nx, and TypeScript.

Features
React.js Based: Modern component-driven architecture.
Styled Components: CSS-in-JS styling for modular and dynamic UI design.
Radix UI Primitives: Accessible, low-level components as building blocks.
Clean Architecture: Enforces separation of concerns and maintainable code organization.
Storybook Integration: Isolated component development and documentation.
End-to-End Testing: Powered by Cypress for robust application testing.
Extendable: Add projects using other frameworks or styling tools.
TypeScript Support: Ensures strong typing and maintainable code.
Testing Ready: Pre-configured with Jest and Vitest for unit and integration testing.
Automation:
GitHub Actions for CI workflows.
Husky pre-commit hooks for test automation.
Getting Started
Prerequisites
Node.js (>= 14.x)
Nx CLI: Install with npm install -g nx.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/BrahimS/e-comerce-uikit.git
cd e-comerce-uikit
Install dependencies:
bash
Copy code
npm install
Usage
Development Server
Run a development server for a specific app:

bash
Copy code
npx nx serve [app-name]
Build Applications
Build an app for production:

bash
Copy code
npx nx build [app-name]
Run Tests
Execute tests for a project:

bash
Copy code
npx nx test [project-name]
Storybook
Start Storybook to visualize and test components in isolation:

bash
Copy code
npx nx storybook shared-ui
Cypress Testing
Run Cypress for end-to-end tests:

bash
Copy code
npx nx e2e [project-name]
Project Structure
apps/: Specific applications (e.g., admin dashboards or user-facing platforms).
libs/shared-ui/: Reusable UI components.
storybook/: Configuration for Storybook component previews.
e2e/: End-to-end testing configuration and tests.
Radix UI and Custom Components
Components are built using Radix UI for accessibility and extensibility.
Users can create custom components or extend existing ones to suit their needs.
Styling with Styled Components
Uses Styled Components for scoped, modular, and themeable styling.
Contributors can integrate other styling solutions like SCSS or Tailwind CSS as needed.
Clean Architecture
This project adopts a Clean Architecture approach, promoting:

Separation of Concerns: Divides application logic into clear, manageable layers.
Reusability: Modular design for scalability.
Maintainability: Clear boundaries for consistent and robust development.
Contributing
Fork the repository.
Create a feature branch: git checkout -b feature/your-feature-name.
Commit your changes: git commit -m "Describe your changes".
Push the branch: git push origin feature/your-feature-name.
Open a pull request.
License
This project is licensed under the MIT License.

