const zod = require('zod')

const teste1Schema = zod.string()

const teste2Schema = zod.object({
    name: zod.string(),
    id: zod.number(),
    job: zod.string()
})

const teste3Schema = zod.string()

const teste4Schema = zod.string()

const teste5Schema = zod.string()

module.exports = {
    teste1Schema,
    teste2Schema,
    teste3Schema,
    teste4Schema,
    teste5Schema
}
