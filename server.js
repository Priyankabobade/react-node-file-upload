// //import express from "express";
// const express = require('express');
// const bodyParser = require('body-parser');
// const todoList = require('./data');
// const multer = require('multer');
// const path = require('path');

// const port = 4000;
// let id = 4;


// const app = express();
// const fileUpload = require('express-fileupload');
// //app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



// app.use(fileUpload());

// // Upload Endpoint
// app.post('/upload', (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded' });
//   }

//   //const file = req.files.file;
//   console.log(req.files);
  
// })
// // app.post('/api/user-profile', (req, res) => {
// //     let upload = multer({ storage: storage }).single('profileImg');
// //     upload(req, res, function (err) {
// //         // req.file contains information of uploaded file
// //         // req.body contains information of text fields, if there were any
// //         console.log(req.file);

// //         if (req.fileValidationError) {
// //             return res.send(req.fileValidationError);
// //         }
// //         else if (!req.file) {
// //             return res.send('Please select an image to upload');
// //         }
// //     })
// // });
// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, DIR);
// //     },
// //     filename: (req, file, cb) => {
// //         const fileName = file.originalname.toLowerCase().split(' ').join('-');
// //         cb(null, uuidv4() + '-' + fileName)
// //     }
// // });
// // var upload = multer({
// //     storage: storage,
// //     fileFilter: (req, file, cb) => {
// //         // if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
// //         //     cb(null, true);
// //         // } else {
// //         //     cb(null, false);
// //         //     return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
// //         // }
// //     }
// // });

// // app.post('/api/user-profile', upload.single('profileImg'), (req, res, next) => {
// //     console.log(req.file);
// //     const url = req.protocol + '://' + req.get('host')
// //     const user = new User({
// //         _id: new mongoose.Types.ObjectId(),
// //         name: req.body.name,
// //         profileImg: url + '/public/' + req.file.filename
// //     });
   
// //     user.save().then(result => {
// //         res.status(201).json({
// //             message: "User registered successfully!",
// //             userCreated: {
// //                 _id: result._id,
// //                 profileImg: result.profileImg
// //             }
// //         })
// //     }).catch(err => {
// //         console.log(err),
// //             res.status(500).json({
// //                 error: err
// //             });
// //     })
// // })

// app.listen(port, () => {
//     console.log("Server is running");
//     // console.log(process.env.NODE_ENV);
//     //console.log(process.env);
// });
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
console.log(file);

  file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log('Server Started...'));
