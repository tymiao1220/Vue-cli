
const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const morgan = require('morgan')

const app = express()

const {sequelize} = require('./models')

const config = require('./config/config')
app.use(morgan('combined'))

app.use(bodyParser.json())

app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
  	app.listen(config.port)
  	console.log(`Server started on port ${config.port}`)
  })

