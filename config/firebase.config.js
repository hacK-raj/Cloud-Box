const Firebase = require('firebase-admin')
const serviceAccount = require ('../drive-4a874-firebase-adminsdk-fbsvc-734695782b.json')
const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket:  'drive-4a874.firebasestorage.app',

})

module.exports = Firebase;