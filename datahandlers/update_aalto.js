let Fetch_aalto = require('../fetch_courses/aaltooodi')
const add_db = require('../datahandlers/add_to_database')
function updater(){ 
	let fetcher = new Fetch_aalto()
	fetcher.getData('MS-E',to_db)
}
function to_db(data) {
	add_db(data)
	console.log("Done")
}
updater()
