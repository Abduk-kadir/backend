let getTokenFromHeader=require('../utils/getTokenFromHeader')
let verifyToken=require('../utils/verifyToken')
module.exports= isLoggedIn = (req, res, next) => {
  //get token from header
  const token = getTokenFromHeader(req);
  //verify the token
  const decodedUser = verifyToken(token);
  if (!decodedUser) {
    throw new Error("Invalid/Expired token, please login again");
  } else {
    //save the user into req obj
    req.userAuthId = decodedUser?.id;
    next();
  }
};
