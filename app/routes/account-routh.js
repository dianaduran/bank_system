var db = require("../models");

module.exports = function(app) {
 
    //create account
    app.post("/api/account", function(req, res) {

        db.account.create(req.body).then(function(dbaccount) {
            res.json(dbaccount);
           }).catch(function(err) {
            // print the error details
            console.log(err);
        });
    });

}