javascript-monorepo
===================

Usage
-----

| Alias                   | Tool                     | Description                     |
|-------------------------|--------------------------|---------------------------------|
| `yarn cleanup`          | `lerna`                  | Clean all packages              |
| `yarn create-component` | `create-react-component` | Create a new React component    |
| `yarn create-app`       | `create-react-app`       | Create a new React app          |
| `yarn diff`             | `lerna`                  | View changes since last release |
| `yarn lint`             | `eslint`                 | Static code analysis            |
| `yarn release`          | `lerna`                  | Update/release packages         |
| `yarn styleguide`       | `styleguidist`           | Start the component workbench   |
| `yarn test`             | `jest`                   | Run all tests                   |
| `yarn updated`          | `lerna`                  | List updated packages           |


Example workflow
----------------

```bash
# We should initialize the repository
yarn

# Let's add a new component called react-button
yarn create-component react-button
yarn styleguide
editor packages/react-button/src/*.jsx
git commit -am "Add react-button"
yarn release

# And now let's add a new website called www.example.com
yarn create-app www.example.com
cd websites/www.example.com
yarn start &
cd ../..
editor websites/www.example.com/src/App.js
git commit -am "Initial www.example.com proof of concept"
git push origin master

# We should use our react-button here
yarn add react-button
editor src/App.js
git commit -am "www.example.com: Add react-button"
git push origin master

# Now let's update our react-button
cd ../..
editor packages/react-button/src/*.jsx
git commit -am "react-button: Awesome new feature"
yarn release

# Repeat!
```
