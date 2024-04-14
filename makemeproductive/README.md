# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## References

-

## Configuration Specific For Extension

- manifest.json: It have the popup.html to show extension popup.
- Also have option.html added in options attribute.
- vite.config.ts : added with resolve options.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## NPM

- npm i fails: `npm ERR! code E401, npm ERR! Unable to authenticate, need: Bearer realm="amazon/shared", Basic realm="amazon/shared"`, because `npm config get registry is set to https://amazon-149122183214.d.codeartifact.us-west-2.amazonaws.com/npm/shared/`
- `npm set registry https://registry.npmjs.org/` to set it back to the default.

## NavBar UX

- Reference: https://dribbble.com/tags/navigation-bar
- 1. https://dribbble.com/shots/16050208-Sidebar-Navigation-Exploration

## Features Technical Concept Elaborated

- Menu: Sliding menu concept using css `transition` property.
- Hide and Unhide View/Edit content: Used the react state property added in App.tsx parent, passed to child as props. With using best practices like Interface for prop content.
- View: Created one component for the Clock for timebox content, contains task name, countdown timer, date-time of from & to for the timebox.
- Edit: New component,
