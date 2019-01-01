const Request = require('request')
const cheerio = require('cheerio')

//module export class
module.exports = class FetchAalto {
	constructor() {
		this.info={data:[]}
	}

//requests data and passes it to parse()
	getData(course){
		Request.get('https://oodi.aalto.fi/a/api/public/opetushaku/hae?nimiTaiTunniste='+course,
			(err,res,body) => {
				if(err){
					return false
				}
				const data=JSON.parse(body)
				this.parse(data)
				return true
			})
	}
//saves all pulled courses to info
	parse(data){
		for(let i in data){
			const el={}
			const course=data[i]
			el.name=course.opintokohde.opintokohteenNimi
			el.organization=course.opintokohde.vastuuorganisaationNimi
			el.points=course.opintokohde.laajuusOp
			el.university='Aalto'
			el.code=course.opintokohde.opintokohteenTunniste
			if(course.opetustapahtumat.length>0){
				el.open=course.opetustapahtumat[0].ilmoittautumiskelpoinen
				el.webpage='https://oodi.aalto.fi/a/opintjakstied.jsp?OpinKohd='+course.opetustapahtumat[0].opetustapahtumaId+'&haettuOpas=-1'
			}
			else {
				el.open=false
			}
			this.info.data.push(el)
			this.scrape_info(el.code,i)
		}
	}
//scrapes description from courses
	scrape_info(code,index) {
		//TODO try to not DOS
		Request.get('https://courses.aalto.fi/course/'+code,
			(err,res,body) => {
				if(err){
                    console.log('error finding course '+code+' from courses')
					return ""
				}
				const $ = cheerio.load(body)
				const description=$('.typography__P-kooxu7-4')
				this.info.data[index].description=description.text()
				console.log(this.info.data[index])
			})

	}
}

