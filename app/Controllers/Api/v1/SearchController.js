const notify = require('../../../Helpers/notify')

module.exports = {
  index: async ctx => {
    let type = ctx.query.type
    let id = ctx.query.id

    if (type !== 'mal' && type !== 'kitsu' && type !== 'anilist') {
      console.error('Not Found')
    }

    ctx.body = {
      services: await notify(type, id)
    }
  }
}
