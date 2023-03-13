const { default: mongoose } = require('mongoose');
const model = require('../models/user_model');

//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  //const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password });
  await user.save();
  res.json({ message: 'User created successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  const isValidPassword = password === user.password;
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  //const token = jwt.sign({ email: user.email }, 'secret_key');
  res.json({ message : 'Authentication successful' });
};
