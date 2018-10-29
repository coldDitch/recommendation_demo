const Request = require('request')
const cheerio = require('cheerio')

module.exports = class FetchAalto {
	constructor() {
		this.info={}
	}

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

	parse(data){
		for(let i in data){
			const el=data[i]
			const name=el.opintokohde.opintokohteenNimi
			this.info[name]={}		
			this.info[name].organization=el.opintokohde.vastuuorganisaationNimi
			this.info[name].points=el.opintokohde.laajuusOp
			this.info[name].university='Aalto'
			this.info[name].open=el.opetustapahtumat[0].ilmoittautumiskelpoinen
			this.info[name].webpage='https://oodi.aalto.fi/a/opintjakstied.jsp?OpinKohd='+el.opetustapahtumat[0].opetustapahtumaId+'&haettuOpas=-1'
			this.info[name].code=el.opintokohde.opintokohteenTunniste
			this.info[name].description=this.scrape_info(this.info[name].code)
		}
	console.log(this.info)
	}

	scrape_info(code) {
		//TODO try to not DOS
		Request.get('https://courses.aalto.fi/course/'+code,
			(err,res,body) => {
				if(err){
					return ""
				}
				const $ = cheerio.load(body)
				const description=$('.typography__P-kooxu7-4')
				console.log(description.text())
				return description.text()
			})

	}
}

