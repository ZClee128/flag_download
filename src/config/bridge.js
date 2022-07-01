function setupWebViewJavascriptBridge (name, data, callback) {
  // 这里若是bridge存在则直接调用native方法并且return
  if (window.bridge) {
    window.bridge.callHandler(name, data, callback)
    return
  }
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  let WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__BRIDGE_LOADED__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(() => {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
 
export default {
  callhandler (name, data, callback) {
    setupWebViewJavascriptBridge(name, data, function (bridge) {
      // 注意：这里将bridge挂载window上，因为笔者二次调用失败。
      if (!window.bridge) {
        window.bridge = bridge
      }
      window.bridge.callHandler(name, data, callback)
    })
  },
  registerhandler (name, callback) {
    setupWebViewJavascriptBridge(function (bridge) {
      // 这里将bridge挂载window上，不然再次调用无法获取
      if (!window.bridge) {
        window.bridge = bridge
      }
      window.bridge.registerHandler(name, function (data, responseCallback) {
        callback(data, responseCallback)
      })
    })
  }
}