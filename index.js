const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const port = process.env.PORT || 5000
const FetchAalto = require('./fetch_courses/aaltooodi.js')
const Fetch=new FetchAalto()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/aicore', {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', (err) => {
	console.log(err)
})

db.once('open', () => {
	console.log('connected to db')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const Course = require('./models/course')
const coursedata=null
Course.find({}, (err, courses) => {
		if(err) {
			console.log(err)
			null
		}
		else {
			coursedata=courses
			console.log(coursedata)
		}
})
function send_first_course(course) {
	console.log("test2")
	app.get('/api/recommend', (req,res) => {
		console.log("test5")
		res.send(course)
		console.log(course)})
	console.log("test3")
}
send_first_course(coursedata[0])
//Fetch.getData('MS-E1462')
app.listen(port, () => console.log(`Listening on port ${port}`))

