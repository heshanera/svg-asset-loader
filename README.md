# svg-asset-loader
Webpack loader for processing SVG files. Loader options allows 3 options: embedding SVGs directly into the HTML, combining SVGs into a single spritesheet injected into the HTML, or extracting SVGs into an external sprite file for linking.

[![Node](https://img.shields.io/badge/Node-v20.10.0-%233C873A)](https://nodejs.org/dist/v20.14.0/docs/api/)&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://github.com/heshanera/svg-asset-loader/blob/master/LICENSE)&nbsp;

## Usage

### Spritesheet injection [:link:](https://github.com/heshanera/svg-asset-loader/tree/master/examples/injectSVGs)
```js
// webpack.config.js
import path from 'path';

const config = {
  ...
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: path.resolve('../../dist/index.js'),
      },
    ],
  },
  ...
};

export default config;
```
```js
// index.js
import icon from '../../assets/stop-watch.svg';
import icon2 from '../../assets/coconut-tree.svg';

...
<div>
  <svg viewBox="${icon.viewBox}">
    <use href="#${icon.id}"></use>
  </svg>
  <svg viewBox="${icon2.viewBox}">
    <use href="#${icon2.id}"></use>
  </svg>
</div>
...
```

### Inline [:link:](https://github.com/heshanera/svg-asset-loader/tree/master/examples/inlineSVGs)
```js
// webpack.config.js
import path from 'path';

const config = {
  ...
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: path.resolve('../../dist/index.js'),
        options: {
          strategy: 'inline',
        },
      },
    ],
  },
  ...
};

export default config;
```
```js
// index.js
import icon from '../../assets/stop-watch.svg';
import icon2 from '../../assets/coconut-tree.svg';

...
<div>
  <img src=${icon} height="100px" width="100px" />
  <img src=${icon2} height="100px" width="100px" />
</div>
...
```


### Extraction and linking [:link:](https://github.com/heshanera/svg-asset-loader/tree/master/examples/extractSVGs)
```js
// webpack.config.js
import path from 'path';

const config = {
  ...
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: path.resolve('../../dist/index.js'),
        options: {
          strategy: 'extract',
          outFile: './public/spritesheet.svg',
          prefix: './spritesheet.svg',
        },
      },
    ],
  },
  ...
};

export default config;
```
```js
// index.js
import icon from '../../assets/stop-watch.svg';
import icon2 from '../../assets/coconut-tree.svg';

...
<div>
  <svg viewBox="${icon.viewBox}">
    <use href=${icon.href}></use>
  </svg>
  <svg viewBox="${icon2.viewBox}">
    <use href=${icon2.href}></use>
  </svg>
</div>
...
```

## Loader Options

| Property   | Default | Description |
| ---------- | ------------ | -------- |
| strategy   | `inject`     | SVG loading strategy <br /> Available strategies: `inject`, `extract`, `inline`  |
| outFile    | `sprite.svg` | File name for the generated svg spritesheet <br /> To be used with the `extract` strategy    |
| prefix     | `sprite.svg` | File path to access the generated spritesheet <br /> To be used with the `extract` strategy <br />  href: `{prefix}#{id}`   |