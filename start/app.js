const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const router = require('./routes')

const app = new Koa()

app.use(logger())
app.use(bodyParser())
app.use(router.routes())

app.listen(3000)
