const express = require('express')
const bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mydb",
    password: "Aanisha@20",
    port: 5432
})



app.get('/', function (req, res) {
    res.sendFile('/index.html', { root: __dirname })
})

    pool.query("SELECT * from data",(err, res) => {
        console.log(err, res)
        pool.end()
    })

app.listen(process.env.PORT)