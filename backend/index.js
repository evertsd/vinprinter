const express = require('express')
const app = express()
const { vinResource } = require('./endpoints/vinResource')

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/vin', vinResource)

app.listen(process.env.PORT || 3000)
