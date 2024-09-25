const express=require('express')
const jsonwebToken=require('jsonwebtoken')
const { globalError, urlNotFoundError } =require('./../middleware/globalError')
const cors=require('cors')
require('dotenv').config()
require('./../config/dbConfig')
let userRoutes=require('../routes/usersRoute')
let productsRouter=require('../routes/productsRoute')
const app=express()
app.use(cors())
app.use(express.json());



app.use('/users',userRoutes)
app.use('/products',productsRouter);
app.use(urlNotFoundError)
app.use(globalError)


module.exports=app
