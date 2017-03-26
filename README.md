javascript-monorepo
===================

This is a proof of concept :construction:<br>
It might eat your :cat2:

Usage
-----

| Alias                   | Tool                     | Description             |
|-------------------------|--------------------------|-------------------------|
| `yarn create-component` | `create-react-component` | Create a new component  |
| `yarn create-app`       | `create-react-app`       | Create a new app        |
| `yarn lint`             | `eslint`                 | Static code analysis    |
| `yarn test`             | `jest`                   | Run test suite          |
| `yarn storybook`        | `react-storybook`        | Start storybook         |
| `yarn release`          | `lerna`                  | Update/release packages |


Example workflow
----------------

```bash
# Adding a new component
yarn create-component react-example-component
yarn storybook
editor components/react-example-component/src/*.jsx
git commit -am "Add react-example-component"
git push origin master
yarn release

# Updating an existing component
yarn storybook
editor components/react-example-component/src/*.jsx
git commit -am "Update react-example-component"
git push origin master
yarn release

# Adding a new website
yarn create-app www.example.com
cd websites/www.example.com
yarn start
editor src/App.js
git commit -am "Add www.example.com"
git push origin master

# Using your component within a website
cd websites/www.example.com
yarn add react-example-component
yarn start
editor src/App.js
git commit -am "Add react-example-component to www.example.com"
git push origin master
```
