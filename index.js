const Boom = require('@hapi/boom')
const express = require('express')
const { arm } = require('@kawaiioverflow/arm')

const app = express()

/**
 * Endpoint
 */
app.get('/api/ids', async (req, res, next) => {
  try {
    const { service, id } = req.query

    if (service == undefined || id == undefined) {
      return next(Boom.badRequest('service and id are required'))
    }

    if (service !== 'mal' && service !== 'annict' && service !== 'anilist' && service !== 'syobocal') {
      return next(Boom.badRequest('service can be mal, annict, anilist or syobocal'))
    }

    if (isNaN(Number(id))) {
      return next(Boom.badRequest('id must be a number'))
    }

    const anime = arm.find((anime) => {
      return anime[`${service}_id`] == Number(id)
    })

    if (anime == undefined) {
      return next(Boom.notFound())
    }

    return res.json(anime)
  } catch (error) {
    return next(Boom.internal())
  }
})

/**
 * Not Found Error Handler
 */
app.use((req, res, next) => {
  return next(Boom.notFound())
})

/**
 * Global Error Handler
 */
app.use((err, req, res, next) => {
  return Boom.isBoom(err)
    ? res.status(err.output.statusCode).json(err.output.payload)
    : res.status(500).json(Boom.internal().output.payload)
})

app.listen(process.env.PORT || 3000)
