const Request = require('request')
const cheerio = require('cheerio')

//module export class
module.exports = class FetchAalto {
	constructor() {
		this.info=[]
	}

//requests data and passes it to parse()
	getData(course,callback){
		Request.get('https://oodi.aalto.fi/a/api/public/opetushaku/hae?nimiTaiTunniste='+course,
			async (err,res,body) => {
				if(err){
					return false
				}
				const data=JSON.parse(body)
				this.parse(data,callback)
				return true
			})
	}
//saves all pulled courses to info
	parse(data,callback){
		for(let i in data){
			const el={}
			const course=data[i]
			el.name=course.opintokohde.opintokohteenNimi
			el.organization=course.opintokohde.vastuuorganisaationNimi
			el.points=course.opintokohde.laajuusOp
			el.university='Aalto'
			el.data=course.opintokohde.opintokohteenTunniste
			if(course.opetustapahtumat.length>0){
				el.open=course.opetustapahtumat[0].ilmoittautumiskelpoinen
				el.webpage='https://oodi.aalto.fi/a/opintjakstied.jsp?OpinKohd='+course.opetustapahtumat[0].opetustapahtumaId+'&haettuOpas=-1'
			}
			else {
				el.open=false
			}
			this.scrape_info(el,callback)
		}
	}
//scrapes description from courses
	scrape_info(data,callback) {
		setTimeout(()=>	{	
			Request.get('https://courses.aalto.fi/course/'+data.data,
			(err,res,body) => {
				if(err){
					console.log('error finding course '+data+' from courses')
				}
				const $ = cheerio.load(body)
				const description = $('.typography__P-kooxu7-4')
				data.description = description.text()
				console.log(data)	
				this.info.push(data)
				callback(data)
				console.log("Doned")
			})
		},10)
	}
}
