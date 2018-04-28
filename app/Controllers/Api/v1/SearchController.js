const notify = require('../../../Helpers/notify')

module.exports = {
  index: async ctx => {
    let type = ctx.query.type
    let id = ctx.query.id

    if (type !== 'mal' && type !== 'kitsu' && type !== 'anilist') {
      console.error('Not Found')
    }

    await notify(type, id)
      .then((results) => {
        ctx.body = {
          services: results
        }
      })
      .catch((err) => {
        ctx.status = 404
        ctx.body = {
          status: 404,
          message: err.message
        }
      })
  }
}
