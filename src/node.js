var express = require('express');
const jwt = require('jsonwebtoken');
const app = express()
let cors = require("cors");
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static('public'));
// app.use(express.json());

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, 'kalab secret', {
    expiresIn: maxAge
  });
};


app.post('/login', function(req, res){
    console.log(req.body)
    const { email, password } = req.body;
    try {
    //   const user = await User.login(email, password);
      console.log('jwt')
      const token = createToken(password);
      console.log(token)
      res.send(email)
      // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      // res.status(200).json({ user: password });
    } 
    catch (err) {
      console.log(34)
    //   res.status(400);
    }
  
  })
  


app.listen(8000, x =>{
    console.log('app listning')
});