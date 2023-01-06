import models from '../models/index.js'
const { Users } = models

export const getUsers = async (req, reply) => {
  const { userId } = req.params
  const search = req.query.search

  let users = userId
    ? await Users.findByPk(userId)
    : await Users.findAll()

  const regex = new RegExp(search, 'i')

  if (search && users.length > 0) {
    users = users.filter(user => (
      regex.test(user.name) ||
      regex.test(user.email) ||
      regex.test(user.phone)
    ))
  }

  return users
}

export async function createUser (req, reply) {
  const body = req.body
  const newData = await Users.create(body)

  return newData
}
