var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // REVER AULA 36 04:40 databaseURL: "https://ecommerce-225c8.firebaseio.com",
});

module.exports = admin;
