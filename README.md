# can-define-lazy-value

[![Build Status](https://travis-ci.org/canjs/can-define-lazy-value.svg?branch=master)](https://travis-ci.org/canjs/can-define-lazy-value)

Define lazy properties with Object.defineProperty

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-define-lazy-value';
```

### CommonJS use

Use `require` to load `can-define-lazy-value` and everything else
needed to create a template that uses `can-define-lazy-value`:

```js
var plugin = require("can-define-lazy-value");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-define-lazy-value/dist/global/can-define-lazy-value.js'></script>
```
