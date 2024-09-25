let express=require('express')
/*import {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
  updateShippingAddresctrl,
} from "../controllers/usersCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
*/
let  {registerUserCtrl,loginUserCtrl}=require('../controller/usersCtrl')
const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post('/login',loginUserCtrl)
//userRoutes.post("/login", loginUserCtrl);
//userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
//userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddresctrl);
module.exports=userRoutes;
