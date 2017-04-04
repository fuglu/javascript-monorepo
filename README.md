javascript-monorepo
===================

Usage
-----

| Alias                   | Tool                     | Description             |
|-------------------------|--------------------------|-------------------------|
| `yarn create-component` | `create-react-component` | Create a new component  |
| `yarn create-app`       | `create-react-app`       | Create a new app        |
| `yarn lint`             | `eslint`                 | Static code analysis    |
| `yarn release`          | `lerna`                  | Update/release packages |
| `yarn storybook`        | `react-storybook`        | Start storybook         |
| `yarn updated`          | `lerna`                  | See what changed        |


Example workflow
----------------

```bash
# We should initialize the repository
yarn

# Let's add a new component called react-button
yarn create-component react-button
yarn storybook &
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
