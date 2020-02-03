const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {

      console.log('OPTIONS', options);
      console.log('JWT PAYLOAD', jwt_payload)
      // console.log('JWT FROM REQUEST', options.jwtFromRequest());      

      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            // return the user to the frontend
            return done(null, user);
          }
          // return false since there is no user
          return done(null, false);
        })
        .catch(err => { 
          console.log('SUPER ERROR');
          console.log(err);
        });
    })
  );
};