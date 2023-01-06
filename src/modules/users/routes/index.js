import * as userControllers from '../controllers/user.controller.js'

import { createUserSchema } from '../handlers/schemas/users/user.schema.js'

export default function (fastify, _opts, done) {
  fastify.post('/', createUserSchema, userControllers.createUser)
  fastify.get('/:userId?', userControllers.getUsers)
  done()
}
