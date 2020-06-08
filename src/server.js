import gateway from 'fast-gateway'
import config from './config'

const PORT = process.env.PORT || 5000

const server = gateway({
  routes: [
    {
      prefix: '/authorization',
      target: config.services.authorization,
    },
    {
      prefix: '/product',
      target: config.services.product,
    },
  ],
})

server.start(PORT)
