//load bcrypt
var bCrypt = require('bcrypt-nodejs');
 
 
module.exports = function(passport, customer) {
 
 
    var Customer = customer;
 
    var LocalStrategy = require('passport-local').Strategy;

    //serialize
    passport.serializeUser(function(customer, done) {
    
        done(null, customer.id);
    
    });

    // deserialize customer 
    passport.deserializeUser(function(id, done) {
    
        Customer.findById(id).then(function(customer) {
    
            if (customer) {
    
                done(null, customer.get());
    
            } else {
    
                done(customer.errors, null);
    
            }
    
        });
    
    });
 
 
    passport.use('local-signup', new LocalStrategy(
 
        {
 
            usernameField: 'email',
 
            passwordField: 'password',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
 
 
 
        function(req, email, password, done) {
 
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
 
 
 
            Customer.findOne({
                where: {
                    email: email
                }
            }).then(function(customer) {
 
                if (customer)
 
                {
 
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var data =
 
                        {
                            email: email,
 
                            password: userPassword,
 
                            firstname: req.body.firstname,
 
                            lastname: req.body.lastname,

                            phone_number:req.body.phone,

                            address: req.body.address,

                            username: req.body.username
 
                        };
 
                    Customer.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
 
                            return done(null, false);
 
                        }
 
                        if (newUser) {
 
                            return done(null, newUser);
 
                        }
 
                    }).catch(function(err) {
                        // print the error details
                        console.log(err);
                    });
 
                }
 
            });
 
        }
 
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
 
    {
 
        // by default, local strategy uses username and password, we will override with email
 
        usernameField: 'email',
 
        passwordField: 'password',
 
        passReqToCallback: true // allows us to pass back the entire request to the callback
 
    },
 
 
    function(req, email, password, done) {
 
        var Customer = customer;
 
        var isValidPassword = function(userpass, password) {
 
            return bCrypt.compareSync(password, userpass);
 
        }
 
        Customer.findOne({
            where: {
                email: email
            }
        }).then(function(customer) {
 
            if (!customer) {
 
                return done(null, false, {
                   message: 'Email does not exist'
                });
 
            }
 
            if (!isValidPassword(customer.password, password)) {
 
                return done(null, false, {
                    message: 'Incorrect password.'
                });
 
            }
 
 
            var userinfo = customer.get();
            return done(null, userinfo);
 
 
        }).catch(function(err) {
 
            console.log("Error:", err);
 
            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
 
        });
 
 
    }
 
));
 
}

