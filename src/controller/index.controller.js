const admin = require('firebase-admin');
var serviceAccount = require("../../firecontacts-2654e-firebase-adminsdk-r37kh-b9cc9aab77.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE,
});

const db = admin.database();

const controller = {}

controller.index = (req, res) => {
    db.ref('contacts').once('value', (snapshot) => {
        const data = snapshot.val();

        res.render('index', { contacts : data})
    });

}

controller.addContact = (req, res) => {
    console.log(req.body);
    const newContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    };

    db.ref('contacts').push(newContact);
    res.redirect('/');
}

controller.deleteContact = (req, res) => {
    const id = req.params.id;
    db.ref('contacts/' + id).remove();
    res.redirect('/')
}


module.exports = controller;
