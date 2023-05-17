var express = require('express');
var router = express.Router();

/* GET home page. */


//render ra form input
router.get('/', (req, res) =>{
  res.render('input')
})

//2. lay du lieu tut form input
router.post('/output', (req, res) =>{  
  var body = req.body;

  // var name =  req.body.ten;
  // var age = req.body.tuoi;
  // var email = req.body.email;
  // var DOB = req.body.ngaysinh;

  // A. In ra console log
  // console.log(req.body);
  // B. In ra web voi res.send
  // res.send(req.body);
  //C. render ra trang output kem du lieu tu form
  // res.render('output',{thanthe: body})
  res.render('output',{thanthe: body})
})
router.get('/login', (req, res) =>{
  res.render('login');
})

router.post('/check', (req, res) =>{
  var username =req.body.username;
  var password =req.body.password;
  if (username == 'admin' && password == '123456789'){
    res.send("<h1 style='color:blue;background-color: lime';>login successfully </h1>");
  } else {
    res.send("<h1 style='color:red;background-color: yellow';>login fail </h1>");
  }
})

module.exports = router;