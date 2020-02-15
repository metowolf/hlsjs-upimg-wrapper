import defaults from 'lodash.defaults'
import simpleConcat from './loader/simple-concat'

class HlsjsUpimgWrapper {

  constructor(hlsjsConstructor) {
    this.Hlsjs = hlsjsConstructor
  }

  createPlayer(hlsjsConfig, upimgConfig) {
    const Hlsjs = this.Hlsjs
    if (!Hlsjs) {
      throw new Error('Can not create Hls.js instance: dependency was not injected')
    }
    if (hlsjsConfig.fLoader) {
      throw new Error('`fLoader` in Hls.js config must not be defined');
    }
    if (hlsjsConfig.pLoader) {
      throw new Error('`pLoader` in Hls.js config must not be defined');
    }
    const config = defaults({}, this.getConfig(upimgConfig || {}), hlsjsConfig)
    return new Hlsjs(config)
  }

  getLoader(loader, upimgConfig) {
    if (loader === 'simple-concat') {
      return simpleConcat(this.Hlsjs, upimgConfig)
    }
    throw new Error(`Can not find ``${loader}`` loader`)
  }

  getConfig(upimgConfig) {
    return {
      loader: this.getLoader(upimgConfig.loader || 'simple-concat', upimgConfig)
    }
  }

}

export default HlsjsUpimgWrapper
