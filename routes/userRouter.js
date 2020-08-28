var express = require('express');
var Users = require('../models/user');
// import { getToken, isAuth } from '../util';

const router = express.Router();

router.post('/signin', async (req, res) => {
  const signinUser = new Users({
    email: req.body.email,
    password: req.body.password,
  
  });
  
  const newsignin=await signinUser.save()
  if (newsignin) {
    res.send({
      _id: newsignin.id,
  
     
      email: newsignin.email,
      isAdmin: newsignin.isAdmin
     // token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});

router.put('/signin', async (req, res) => {
  const userId = req.body.id;
  const user = await Users.findById(userId);
  if (user) {
    //user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.address = req.body.address;
    user.custId=req.body.phone.slice(6);
   
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      address: updatedUser.address,
      custId: updatedUser.custId
     //token: getToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});


router.post('/login', async (req, res) => {
    const loginUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (loginUser) {
      res.send({
        _id: loginUser.id,
        name: loginUser.name,
        email: loginUser.email,
        isAdmin: loginUser.isAdmin,
      //  token: getToken(loginUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
  });



/*router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid User Data.' });
  }
});*/

router.get('/createadmin', async (req, res) => {
  try {
    const user = new Users({
      name: 'Suhas',
      email: 'gpsuhas20@gmail.com',
      password: 'admin',
      isAdmin: true,
      custId: '100',
      phone: '8050611039',
      address: '#20 bangalore'
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports=router;
