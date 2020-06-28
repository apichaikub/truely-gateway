import gateway from 'fast-gateway'
import config from './config'

const PORT = process.env.PORT

const server = gateway({
  routes: [
    {
      prefix: '/authorization',
      target: config.services.authorization,
    },
    {
      prefix: '/user',
      target: config.services.user,
    },
    {
      prefix: '/product',
      target: config.services.product,
    },
    {
      prefix: '/tokenvalidation',
      target: config.services.tokenvalidation,
    },
  ],
})

server.start(PORT)
