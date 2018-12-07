let mysql = require('mysql');
var http = require('http');

var conn = mysql.createConnection(
{
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'TestDB'
})
conn.connect(function(err)
{
    if(err) console.log(err);
    console.log('Connected!!');
    var sql = "select * from customers";
    //var sql1 = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    conn.query(sql, function (err,result,fields)
    {
        if (err) console.log(err);
        console.log(result);
    })
})
