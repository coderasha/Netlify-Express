const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()
 
router.get('/totalSupply/0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6', function (req, res) {
  res.send('137865569')
})
 
app.use('/.netlify/functions/api',router)

module.exports.handler = serverless(app)