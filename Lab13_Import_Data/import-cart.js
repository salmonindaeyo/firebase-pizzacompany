var admin = require("firebase-admin");
const { getFirestore , Timestamp } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "/***** replace with your databaseURL ************/"
});

var db = getFirestore() ;

var user = [
    {
        "id": "winner",
        "username": "winner",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    } ,
    {
        "id": "mint",
        "username": "mint",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    } ,
    {
        "id": "amon",
        "username": "amon",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    },
    {
        "id": "nine",
        "username": "nine",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    },
    {
        "id": "ploy",
        "username": "ploy",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    } ,
    {
        "id": "jack",
        "username": "jack",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    } ,
    {
        "id": "pizza",
        "username": "pizza",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    } ,
    {
        "id": "cat",
        "username": "cat",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    },
    {
        "id": "dog",
        "username": "dog",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    },
    {
        "id": "ilovepizza55",
        "username": "ilovepizza55",
        "password": "123456" ,
        "createOn" : Timestamp.fromDate(new Date())
    
    }
]

user.forEach(function(obj){
    db.collection("user").doc(obj.id).set({
        username: obj.username,
        password: obj.password ,
        createOn : obj.createOn
     
    }).then( docRef => { console.log("Document written with ID : "+docRef.id)})
});


