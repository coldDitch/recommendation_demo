const express = require('express')
const cors = require('cors')
const app = express() 
const mysql = require('mysql')
const FetchAalto = require('./fetch_courses/aaltooodi.js')

const aalto_data=new FetchAalto() 
const course=aalto_data.getData('CS-E3210')
console.log('working')

app.use(cors())

app.get('/', (req,res) => {
	res.send('hello')
})

app.get('/questions', (req,res) => {
	const {major,minor,year,favorite_course}=req.query
	res.send('Answered')
})

app.listen(4000, ()=> {
	console.log('Server listening port 4000')
})


