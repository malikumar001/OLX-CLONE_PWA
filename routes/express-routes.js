const passport = require("passport");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

const Ad = require('../models/Ad');

module.exports = app => {

  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());


    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
       
        cb(null, './uploads');
      },
      filename: (req, file, cb) => {
       
        const newFilename = `${uuidv4()}_${Date.now()}_${path.extname(file.originalname)}`;
        cb(null, newFilename);
      },
    });

      const imageType = (req, file, cb) => {
          if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
            cb(null, true);
          }else {
            cb(null, false);
          }
      }

    const upload = multer({ storage, limits: {
      fileSize: 1024 * 1024 * 5  //5mb
    } });


  app.post('/file', upload.array("selectedFile"), (req, res) => {
    console.log(req);
    console.log(req.body);
  }); 

  app.post('/api/postAd', upload.array("selectedFile"), (req, res) => {
    console.log(req.body)
    const ads = new Ad({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      product: req.body.product,
      name: req.body.name,
      profilePic: req.body.profilePic,
      uniqueId: req.body.uniqueId,
      phone: req.body.phone,
      milliSeconds: req.body.milliSeconds,
      date: req.body.date,
      detail: req.body.detail,
      price: req.body.price,
      featured: req.body.featured,
      location: req.body.location,
      catagory: req.body.catagory,
      image1: req.files[0].path,
      image2: req.files[1].path,
      image3: req.files[2].path,
      image4: req.files[3].path
    });
    ads.save()
    .then(item => {
      console.log("Data Saved")
    }).catch(err => console.log(err)

    );
    console.log(req.body);
  });

 

app.get("/api/allads", (req, res) => {

    Ad.find({}, (err, allads) =>  res.send({allads})
    
);

});
  

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
     passport.authenticate("google"),
      (req, res) => {
        res.redirect('/')
      }    
    );

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/')
})


app.get('/api/user', (req, res) => {

      res.send(req.user)
})

};
