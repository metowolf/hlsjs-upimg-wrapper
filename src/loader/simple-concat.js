export default (Hlsjs, upimgConfig) => {
  const loader = class Loader extends Hlsjs.DefaultConfig.loader {
    constructor(config) {
      super(config)
      const load = this.load.bind(this)
      this.load = function (context, config, callbacks) {
        if (context.type === 'manifest') {
          const onSuccess = callbacks.onSuccess
          callbacks.onSuccess = function (response, stats, context) {
            let data = response.data
            const index = data.indexOf('I0VYVE0zVQ')
            if (index === -1) {
              throw new Error('[simple-concat] split playlist failed!')
            }
            data = data.slice(index)
            data = atob(data)
            response.data = data
            onSuccess(response, stats, context)
          }
        }
        if (context.responseType === 'arraybuffer') {
          const onSuccess = callbacks.onSuccess
          callbacks.onSuccess = function (response, stats, context) {
            response.data = response.data.slice(upimgConfig.offset || 0)
            onSuccess(response, stats, context)
          }
        }
        load(context, config, callbacks)
      }
    }
  }
  return loader
}
