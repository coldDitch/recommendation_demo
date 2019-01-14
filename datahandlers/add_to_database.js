const Course = require('../models/course')
const mongoose = require('mongoose')
module.exports = (data) => {
	mongoose.connect('mongodb://localhost/aicore', {useNewUrlParser: true})
	let db = mongoose.connection
	db.on('error', (err) => {
		console.log(err)
	})
	db.once('open', () => {
		console.log('connected to db')
	})
	let course = new Course()
	course.name = data.name
	course.university = data.university
	course.organization = data.organization
	course.open = data.open
	course.webpage = data.webpage
	course.description = data.description
	course.vector = data.vector
	course.requirements = data.requirements
	console.log(course)
	course.save((err)=>{
		console.log("Course "+data.name+" failed")
		console.log(err)
	})
}
