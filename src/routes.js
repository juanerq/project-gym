import routesUser from '../src/modules/users/routes/index.js'

export default function (fastify, opts, done) {
  fastify.register(routesUser, { prefix: 'users' })
  done()
}
