const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const FetchAalto= require('./fetch_courses/aaltooodi.js')

const fetch=new FetchAalto()

fetch.getData('CS-E3210')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(fetch.info)
app.get('/api/recommend', (req,res) => {
	res.send(fetch.info)
})

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
})
app.post('/api/world', (req, res) => {
	console.log(req.body)
	res.send(
		`I received your POST request. This is what you sent me: ${req.body.post}`,
	)
})

app.listen(port, () => console.log(`Listening on port ${port}`));

