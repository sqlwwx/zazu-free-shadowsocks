const freeShadowsocks = require('free-shadowsocks')

const template = (server) => ({
  id: server.address,
  icon: 'fa-globe',
  title: `${server.password}`,
  subtitle: `${server.address} ${server.method} ${server.port}`,
  value: server.password
})

module.exports = (pluginContext) => {
  return () => {
    return freeShadowsocks().then((servers) => {
      return Promise.resolve(
        servers.map(template)
      )
    })
  }
}
