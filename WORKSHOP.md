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
npm init --scope=org -y

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

Use your package everywhere
---------------------------

```bash
# Install create-react-app
npm install -g create-react-app

# Create a new app
cd /tmp
create-react-app demo-website
cd demo-website/
npm install --save @org/demo-package

# Edit the src/App.js and import your package
#   import log from '@org/demo-package';
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