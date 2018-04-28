const Router = require('koa-router')
const router = new Router()

const SearchController = require('../app/Controllers/Api/v1/SearchController')

router.get('/api/v1/search', SearchController.index)

module.exports = router
