
console.log("hello")

const express= require('express')

var app= express();

//var json= require('json')

app.get('/',function(req,res)
{
    res.send("start server")
})

app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html')
})

var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})

app.post('/submitform',urlEncoded,function(req,res){
    res.send("data submitted "+req.body.name+ " " + req.body.mobile+ " " + req.body.mail)
})

var server= app.listen(8000, function()
{
    var host = server.address().address // local one  
    var port = server.address().port 
})

