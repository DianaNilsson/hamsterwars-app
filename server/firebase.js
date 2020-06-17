const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

if (process.env.NODE_ENV === 'production') {

    admin.initializeApp({
        credentials: JSON.parse(process.env.GCS_KEYFILE),
        databaseURL: "https://hamsterwars-project.firebaseio.com"
    });
}
else {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://hamsterwars-project.firebaseio.com"
    });
}

const auth = admin.auth();
const db = admin.firestore();
const fieldValue = admin.firestore.FieldValue;

module.exports = {
    auth,
    db,
    fieldValue
}