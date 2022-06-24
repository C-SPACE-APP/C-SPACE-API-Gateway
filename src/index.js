const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', proxy('http://localhost:3002', {
    proxyErrorHandler: function(err, res, next) {
      switch (err && err.code) {
        default:
            return res.status(500).json({ message: 'Service Unavailable'})
      }
    }}))

app.use('/auth', proxy('http://localhost:3003', {
    proxyErrorHandler: function(err, res, next) {
      switch (err && err.code) {
        default:
            return res.status(500).json({ message: 'Service Unavailable'})
      }
    }}))

app.use('/tag', proxy('http://localhost:3004', {
    proxyErrorHandler: function(err, res, next) {
      switch (err && err.code) {
        default:
            return res.status(500).json({ message: 'Service Unavailable'})
      }
    }}))

app.use('/interaction', proxy('http://localhost:3005', {
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      default:
          return res.status(500).json({ message: 'Service Unavailable'})
    }
  }}))
  
app.use('/post', proxy('http://localhost:3006', {
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      default:
          return res.status(500).json({ message: 'Service Unavailable'})
    }
  }}))


app.use('/posttag', proxy('http://localhost:3007', {
  proxyErrorHandler: function(err, res, next) {
    switch (err && err.code) {
      default:
          return res.status(500).json({ message: 'Service Unavailable'})
    }
  }}))

app.use('/', async (req, res) => {
    res.json({
                message: 'Inside API Gateway'
            })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`API Gateway started on Port ${PORT}`)
})