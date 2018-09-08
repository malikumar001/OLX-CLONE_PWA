
const express = require("express");
const passport = require('passport');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

require('./models/mongoose');
require('./services/passport-auth');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, 
  keys: [keys.cookieKey]
}));

app.use('/uploads',express.static('uploads'));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/express-routes')( app );

const PORT = process.env.PORT || 8000;


  if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
  }


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
