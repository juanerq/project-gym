import fastify from 'fastify'
const { errorCodes } = fastify

export function setErrorHandler (error, request, reply) {
  console.error(error)
  if (error instanceof errorCodes.FST_ERR_BAD_STATUS_CODE) {
    reply.status(500).send({ ok: false })
  } else {
    reply.send(error)
  }
}
