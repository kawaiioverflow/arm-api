const fetch = require('node-fetch')

module.exports = async (type, id) => {
  const services = {}

  const notifyURL = await fetch(`https://notify.moe/${type}/anime/${id}`)
  const status = await notifyURL.status

  if (status !== 200) throw new Error('Not Found')

  const url = await notifyURL.url
  const notifyID = url.split('/').pop()
  const notifyAPI = await fetch(`https://notify.moe/api/anime/${notifyID}`)
  const notifyJSON = await notifyAPI.json()
  const mappings = notifyJSON.mappings

  for (var i = 0; i < mappings.length; i++) {
    switch (mappings[i].service) {
      case 'myanimelist/anime':
        services.mal = mappings[i].serviceId
        break
      case 'kitsu/anime':
        services.kitsu = mappings[i].serviceId
        break
      case 'anilist/anime':
        services.anilist = mappings[i].serviceId
        break
    }
  }

  return services
}
