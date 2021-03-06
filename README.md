# @comandeer/rollup-lib-bundler

[![Build Status](https://github.com/Comandeer/rollup-lib-bundler/workflows/CI/badge.svg)](https://github.com/Comandeer/rollup-lib-bundler/actions) [![Dependency Status](https://david-dm.org/Comandeer/rollup-lib-bundler.svg)](https://david-dm.org/Comandeer/rollup-lib-bundler) [![devDependencies Status](https://david-dm.org/Comandeer/rollup-lib-bundler/dev-status.svg)](https://david-dm.org/Comandeer/rollup-lib-bundler?type=dev) [![codecov](https://codecov.io/gh/Comandeer/rollup-lib-bundler/branch/master/graph/badge.svg)](https://codecov.io/gh/Comandeer/rollup-lib-bundler) [![npm (scoped)](https://img.shields.io/npm/v/@comandeer/rollup-lib-bundler.svg)](https://npmjs.com/package/@comandeer/rollup-lib-bundler)

Super opinionated library bundler using [Rollup](https://github.com/rollup/rollup), [Babel](https://github.com/babel/babel) and [babel-minify](https://github.com/babel/minify).

## How does it work?

It gets `package.json` from the current working directory, parses it and get neeeded info:

* `name`, `author`, `version` and `license` to create beautiful banner comment,
* `main` to get path for saving ES5 bundle,
* `module` or `jsnext:main` for saving ES2015 bundle.

Of course it treats `src/index.js` as the only entry point for Rollup.

## Installation

```bash
npm install @comandeer/rollup-lib-bundler --save-dev
```

## Usage

Just make it a npm script:

```json
"scripts": {
	"build": "rlb"
}
```

## Configuration

No configuration. Consider it a feature.

## License

See [LICENSE](./LICENSE) file for details.
