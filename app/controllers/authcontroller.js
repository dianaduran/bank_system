var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.account = function(req, res) {
 
    res.render('account');
 
}

exports.loan = function(req, res) {
 
    res.render('loan');
 
}

exports.transaction = function(req, res) {
 
    res.render('transaction');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
         res.redirect('/');
     });
 
}