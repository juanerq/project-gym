import models from '../../../models/index.js'
const Users = models.Users

export const existsUserById = async (id) => {
  const exists = await Users.findByPk(id)
  if (exists) throw new Error(`User already exists with id ${id}`)
}
