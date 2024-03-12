## Project Components

* Generate tsconfig.json: `tsc --init`
* typescript: language
* React core libraries: react react-dom

### Webpack
bundle JavaScript files for usage in a browser. The dependencies are: `webpack webpack-cli webpack-dev-server`

### Babel
Is toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. The dependencies are: `@babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-typescript`

* @babel/preset-env is for converting modern ECMAScript code
* @babel/preset-react is for JSX and other React-related transformations
* @babel/preset-typescript is for TypeScript support

### Webpack

`html-webpack-plugin` generates an HTML file, injects the bundled JavaScript, and writes this file to the dist directory

### PNPM

* Install pnpm: `pnpm install -g pnpm`
* Run dev: `pnpm start`
* Build project: `pnpm build`
