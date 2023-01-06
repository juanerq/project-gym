export const errorResponse = (ctx, { status = 400, message }) => {
  ctx.status = status
  ctx.body = {
    error: true,
    message
  }
}
