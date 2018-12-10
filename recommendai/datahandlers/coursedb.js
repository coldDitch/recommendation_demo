
const mysql = require('mysql')
module.exports = class DBhandler{
    constructor()  {
        this.db = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'password',
            database : 'aicore'
        })
    }
    connect(){
        this.db.connect((err) => {
            if(err){
                throw err;
            }
            console.log('mysql connected')
        })
    }
    
    add_to_db(fetchevent){
        console.log("INSERTING")
        const sql = "INSERT INTO course (id, name, uni, organization, open, webpage, description) VALUES ?"
        const values = fetchevent.info.data.map( (course) => [course.code,course.name,course.university,course.organization,course.open,course.webpage, course.description])
        this.db.query(sql, [values], (err,result) => {
            if (err) throw (err);
            console.log("inserted"+result.affectedRows)
        })
    }

}
