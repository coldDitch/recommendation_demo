
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/aicore', {useNewUrlParser: true})
let db = mongoose.connection
db.once('error', (err) => {
	console.log(err)
})
db.once('open', () => {
	console.log('connected to db')
})
module.exports = class 
