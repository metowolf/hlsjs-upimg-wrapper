# hlsjs-upimg-wrapper

This module wraps an instance of [`Hls.js`](https://github.com/video-dev/hls.js) to bootstrap it with the upimg decoder module.

# Usage

### Install

You can install the artifacts distributed as NPM modules:

```
npm install hlsjs-upimg-wrapper
```

### Example

```javascript
const wrapper = new HlsjsUpimgWrapper(Hls)
const hls = wrapper.createPlayer(hlsjsConfig, upimgConfig)
// Use `hls` just like your usual hls.js…
```