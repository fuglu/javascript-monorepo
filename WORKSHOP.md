sipgate-javascript Workshop
===========================

You will need Node.js ([Mac](https://nodejs.org/en/download/current/) or [Linux](https://github.com/nodesource/distributions#installation-instructions))
and [Yarn](https://yarnpkg.com/en/docs/install).


Build a package from scratch
----------------------------

```bash
# Create a new folder
mkdir /tmp/demo-package
cd /tmp/demo-package

# Than create a new package
npm init --scope=sipgate -y

# Add the index.js
cat >> index.js << EOF
exports.default = function() {
  console.log('Hello world');
};
EOF

# Test your index.js
node << EOF
var log = require('./index.js').default;
log();
EOF
# > Hello world

# And finally publish your package
npm publish
```


Use your package everywhere
---------------------------

```bash
# Install create-react-app
npm install -g create-react-app

# Create a new app
cd /tmp
create-react-app demo-website
cd demo-website/
npm install --save @sipgate/demo-package

# Edit the src/App.js and import your package
#   import log from '@sipgate/demo-package';
# and add a componentWillMount function to the class
#   componentWillMount() {
#     log();
#   }
editor src/App.js

# Now start your website
npm start

# Have a look at the console
# > The answer is 42
```


Add Babel
---------

```bash
# Maybe you want to use ECMAScript 2015 (ES6) and beyond
rm index.js
mkdir src
cat >> src/index.js << EOF
export default () => {
  console.log('The answer is 42');
};
EOF

# But we have a problem now
node << EOF
var log = require('./src/index.js');
EOF
# > SyntaxError: Unexpected token export


# Install babel to transpile the file
npm install --save-dev babel-cli babel-preset-es2015

# Configure babel
cat >> .babelrc << EOF
{
  "presets": ["es2015"]
}
EOF

# Edit your package.json and add
#   "build": "babel src -d dist",
#   "prepublish": "npm run build"
# to the scripts section
editor package.json

# Build the package
npm run build

# Try again
node << EOF
var log = require('./dist/index.js').default;
log();
EOF
# > The answer is 42

# Edit your package.json and set
#   "main": "dist/index.js",
editor package.json

# And finally update your package
npm publish

# Oops! Forgot to update the version
npm version patch

# Publish the new version
npm publish
```


Build a react-example-button
----------------------------

```bash
# Initialize the repository
yarn

# Create react-example-button
yarn create-component react-example-button

# Style the button
editor -O packages/react-example-button/src/*

# View your component
yarn styleguide

# Commit when you are done
git add packages/react-example-button
git commit -m'Add react-example-button'

# Release the new component
yarn release
```

Need some style?
```jsx
const style = {
  background: '#009ee3',
  border: 'none',
  boxShadow: 'none',
  color: 'white',
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '28px',
  padding: '10px 20px',
  textShadow: 'none',
};
```


Build a react-example-header
----------------------------

```bash
# Create react-example-header
yarn create-component react-example-header

# Add a logo or something like that
editor -O packages/react-example-header/src/*

# View your component
yarn styleguide

# Commit when you are done
git add packages/react-example-header
git commit -m'Add react-example-header'

# Release the new component
yarn release
```

Need some style?
```jsx
const style = {
  container: {
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
    display: 'block',
    padding: '5px 13px',
    marginBottom: '10px',
  },
  logo: {
    height: '39px',
    marginLeft: '13px',
    width: 'auto',
    display: 'block',
    lineHeight: '78px',
  },
};
```


Use create-react-app to bootstrap a new website
-----------------------------------------------

```bash
# Create a new folder
mkdir websites
cd websites

# Create a new website
create-react-app www.example.com
cd www.example.com/

# Install our packages
yarn add @sipgate/react-example-button @sipgate/react-example-header

# Edit the src/App.js and import your packages
#   import Button from '@sipgate/react-example-button';
#   import Header from '@sipgate/react-example-header';
# and play around with render()
editor src/App.js

# Now start your website
npm start
# > You should see your header and your button
```


Now let's introduce a breaking change
-------------------------------------

```bash
# Update the example button and make some breaking changes
editor -O packages/react-example-button/src/*

# Commit when you are done
git add packages/react-example-button
git commit -m'Breaking change'

# Release the new component and increase the major version
yarn release
```
