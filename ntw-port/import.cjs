
const { getFirestore } = require('firebase-admin/firestore')
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


var db = getFirestore() ;

var user = [
    {
        "username": "SF",
        "password": "San Francisco",
       
    }
]

user.forEach(function(obj){
    db.collection("cities").doc(obj.id).set({
        username: obj.username,
        password: obj.password
       
    }).then( docRef => { console.log("Document written with ID : "+docRef.id)})
});


