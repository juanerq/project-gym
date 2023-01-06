import config from './config/index.js'
import Fastify from 'fastify'

import { setErrorHandler } from './src/middlewares/errors.handler.js'

import routes from './src/routes.js'

const fastify = Fastify()

fastify
  .register(routes, { prefix: 'api' })
  .setErrorHandler(setErrorHandler)
  .listen({ port: config.port }, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
