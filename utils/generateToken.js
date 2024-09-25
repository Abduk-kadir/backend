const jwt =require('jsonwebtoken');

const generateToken = (id) => {
  console.log('data which make toke:',id);
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: "3d" });
};

module.exports= generateToken;
