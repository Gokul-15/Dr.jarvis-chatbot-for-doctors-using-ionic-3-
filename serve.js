var express = require('express');
var app = express();
var obj=require('./patientrecord.json');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
// Add headers

var fs=require('fs');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
    const doctorapp = require('assert');
    const url = 'mongodb://127.0.0.1:27017';
    	const dbName='doctorapp';





var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});

// var cors=require('cors');
// app.options(cors());
// var cors=require('cors');
// app.use(cors());var fs = require("fs");

// MongoClient.connect(url,  function (err, db) {
//     if (err) {
//         throw err;
//     } else {
//     	        console.log("successfully connected to the database");
//     	app.post('/signupdata',function(req,res){
//     			console.log(req.body);
//     	db.db('doctorapp').collection('users').insert((req.body),function(err, res) {
// 		if (err) throw err;
// 		console.log("Document inserted");
// 			                	    db.close();

//     	});

//     	});
	
//     }

// });

app.post('/logindata',function(req,res){
console.log(req.body);

var msg;

 				MongoClient.connect(url,  function (err, db) {
    if (err) {
        throw err;
    }
else {
		    	        console.log("successfully connected to the database");

	 	db.db('doctorapp').collection('users').findOne({phnum:req.body.phoneNumber},function(err, reso) {
		if (err) throw err;

		msg = reso
		console.log("Document exist");
		 db.close();
		res.status(200).json(msg);


    	});

}

});
 					console.log(msg);
 			});

app.post('/signupdata',function(req,res){
    			console.log(req.body);
    				MongoClient.connect(url,  function (err, db) {
    if (err) {
        throw err;
    }
else {
		    	        console.log("successfully connected to the database");

	 	db.db('doctorapp').collection('users').insert((req.body),function(err, res) {
		if (err) throw err;
		console.log("Document inserted");
			                	    db.close();

    	});

}
   
    	});
    			});







app.get('/patientrecord', function (req, res) {
// console.log(obj)
		res.status(200).json(obj.patientRecord);
});
app.get('/', function (req, res) {


	var c=	[
			  {
				name:'Gokul',
				dept:'cardilogy',
				floor:'Second floor',
				age:30,
				sex:'Male',
				id:'KMCH12',
				occupation:'student',
				admitedDate:'15/06/2017',
				Problem:'General Check Up  ',

		      },
		        {
				name:'Gokul',
				dept:'orthology',
				floor:'Second floor',
				age:30,
				sex:'Male',
				id:'KMCH11',
				occupation:'student',
				admitedDate:'15/06/2017',
				Problem:'General Check Up  ',

		      },{


				name:'Prakash',
				dept:'cycology',
				floor:'Second floor',
				age:40,
				sex:'male',
				id:'KMCH15',
				occupation:'Proffessor',
				admitedDate:'15/06/2017',
				Problem:'Diabetic',

				
			  },
			    {  
				name:'SriVatson',
			    dept:'orthology',
				floor:'Third floor',
				age:25,
				sex:'Male',
				id:'KMCH14',
				occupation:'Labor',
				admitedDate:'15/06/2017',
				Problem:' Discomfort pain in heart and stomach ',

				
			  },
			    {  
				name:'Kayal',
				dept:'cardilogy',
				floor:'Second floor',
				age:20,
				sex:'Female',
				id:'KMCH17',
				occupation:'Working in TCS IT Company',
				admitedDate:'15/06/2017',
				Problem:'  ',

				
			  },
			  {  
				name:'Dhaya',
				dept:'cardilogy',
				floor:'Second floor',
				age:20,
				sex:'Female',
				id:'KMCH105',
				occupation:'student',
				admitedDate:'15/06/2017',
				Problem:'  ',

				
			  },


           ];
	res.status(200).json(c);
});
// app.post('/signupdata',function(req,res){
	// 	db.collection("users").insertOne(req.body, function(err, res) {
 //        if (err) throw err;
 //        console.log("Document inserted");
 //        // close the connection to db when you are done with it
 //        db.close();
 //    });
	// console.log(req.body);
// 	MongoClient.connect('mongodb://127.0.0.1:27017/doctorapp', function(err, db) {
// 	if (err) throw err;
// 	// db pointing to newdb
// 	console.log("connected");

// 	// document to be inserted
// 	var doc = req.body;
	
// 	// insert document to 'users' collection using insertOne
// 	db.collection("user").insertOne(doc, function(err, res) {
// 		if (err) throw err;
// 		console.log("Document inserted");
// 		// close the connection to db when you are done with it
// 		db.close();
// 	});
// });
// });


app.post('/update',function(req,res){
console.log(req.body);
var response;
var json;
var info=req.body.message;
for(i=0;i<obj.patientRecord.length;i++){
				if(info.toString().toLowerCase().includes("update") || info.toString.toLowerCase.includes("updates")){						
// console.log(obj.patientRecord.length);
						var name=obj.patientRecord[i].name.toLowerCase();
								if(info.toString().toLowerCase().indexOf(name) != -1){
										for(j in obj.patientRecord[i]){
												if(info.toString().toLowerCase().includes(j)){
					// console.log(j);
													var value=info.replace(/^\D+/g, '')
					// console.log(value);
					// console.log(obj.patientRecord[i][j]);
													obj.patientRecord[i][j]=value;
													console.log(obj.patientRecord[i][j]);
													response="sucess";
												}
										}

									}
		}
	}
fs.writeFileSync('./patientrecord.json',JSON.stringify(obj,null,2));
res.json(response);
});







// //update gokul weight








// var http = require('http');


// var http=require('http')
// var server = http.createServer(function(req, res) {

// res.writeHead(200).json({

// 	name:gokul
// })

// });
// server.listen(8000);
// var express=require('express');
// var router=express.Router();
// router.post('/',function(req,res,next){

// res.json([
// {

// id:1,
// message:"hello"

// }
// 	])


// });
//  module.exports=router;
