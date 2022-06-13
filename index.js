const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', proxy('http://localhost:3002'))
app.use('/auth', proxy('http://localhost:3003'))

app.use('/', (req, res) => {
    res.json({
        message: 'Inside API Gateway'
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`API Gateway started on Port ${PORT}`)
})