export const validatorCompiler = ({ schema, method, url, httpPart }) => {
  return data => schema.validate(data)
}
