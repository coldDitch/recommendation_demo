let mongoose = require('mongoose')

let course_schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	university: {
		type: String,
		required: true
	},
	organization: {
		type: String,
		required: false
	},
	open: {
		type: Boolean,
		required: false
	},
	webpage: {
		type: String,
			required: false
	},
	description: {
		type: String,
		required: false
	},
	vector: {
		type: [Number],
		required: false 
	},
	requirements: {
		type: [String],
		required: false
	}
})

let Course = module.exports = mongoose.model("Course", course_schema)
