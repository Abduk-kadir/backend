let express=require('express')
//import upload from "../config/fileUpload.js";
let isAdmin=require('../middleware/isAdmin')
let isLoggedIn=require('../middleware/isLoggedIn')
const productsRouter = express.Router();
const createProductCtrl=require('../controller/productsCtrl')

productsRouter.post(
  "/",
  isLoggedIn,
  isAdmin,
 // upload.array("files"),
  createProductCtrl
);

//productsRouter.get("/", getProductsCtrl);
//productsRouter.get("/:id", getProductCtrl);
//productsRouter.put("/:id", isLoggedIn, isAdmin, updateProductCtrl);
//productsRouter.delete("/:id/delete", isLoggedIn, isAdmin, deleteProductCtrl);
module.exports= productsRouter;
