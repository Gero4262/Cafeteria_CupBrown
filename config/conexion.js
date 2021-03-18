var mysql = require("mysql");

var con= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecoda');
        }else{
            console.log('Error');
        }
    }
);

module.exports=con;