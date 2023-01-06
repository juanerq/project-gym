import Joi from 'joi'

import { validatorCompiler } from '../../../../../middlewares/validator.handler.js'
import { existsUserById } from './user.db.validators.js'

const schema = {
  id: Joi.string(),
  name: Joi.string(),
  phone: Joi.string().error(new Error('El numero de telefono no es valido')),
  birthday: Joi.date().error(new Error('La fecha de nacimiento no es valida')),
  email: Joi.string().email(),
  gender: Joi.string().valid('M', 'F'),
  status: Joi.boolean()
}

export const createUserSchema = {
  schema: {
    querystring: Joi.object().keys({
      name: Joi.number()
    }),
    body: Joi.object().keys({
      id: schema.id.required(),
      name: schema.name.required(),
      phone: schema.phone.required(),
      birthday: schema.birthday.required(),
      gender: schema.gender.required(),
      status: schema.status.required(),
      email: schema.email
    })
  },
  validatorCompiler,
  preHandler: async (req, reply, done) => {
    try {
      await existsUserById(req.body.id)
    } catch (error) {
      reply.code(400)
      done(error)
    }
  }
}

export default schema
