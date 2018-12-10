const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const port = process.env.PORT || 5000
const FetchAalto = require('./fetch_courses/aaltooodi.js')
const Fetch=new FetchAalto()
//const DBhandler = require('./datahandlers/coursedb.js')
//const DB = new DBhandler


Fetch.getData('MS-E1462')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/recommend', (req,res) => {
	res.send(Fetch.info)})
app.listen(port, () => console.log(`Listening on port ${port}`))
//DB.connect()
//DB.add_to_db(Fetch)
