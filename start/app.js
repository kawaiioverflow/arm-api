const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const hbs = require('koa-hbs')
const logger = require('koa-logger')
const path = require('path')
const router = require('./routes')
const static = require('koa-static')

const app = new Koa()

app.use(
  hbs.middleware({
    viewPath: path.resolve(__dirname, '../app/Views')
  })
)

app.use(static(path.resolve(__dirname, '../app/Statics'), {}))

app.use(logger())
app.use(bodyParser())
app.use(router.routes())

app.listen(3000)
