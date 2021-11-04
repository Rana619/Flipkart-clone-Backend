const express = require('express');
const env = require('dotenv');
// const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');

const app = express();


//routes 
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth.js");
const categoryRoutes = require("./routes/category.js")
const productRoutes = require("./routes/product.js")
const cartRoutes = require("./routes/cart.js")
const initialDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page");
const adressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const adminOrderRoutes = require("./routes/admin/order");
const adminHomePageRoutes = require("./routes/admin/homePage");
 
 
//enviroment congfigaration
env.config();


//DB connection 
const connection_url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.dalpc.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`

const ConnectMongoDB = async ()=>{
  await  mongoose.connect(connection_url)
    .then(() => {
      console.log('Connected to database !!');
    })
    .catch((err)=>{
      console.log('Connection failed !!'+ err.message);
    });
}

ConnectMongoDB();





//middlewear
app.use(cors({
    origin: "*", 
    credentials:true,        
}));

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)
app.use('/api', initialDataRoutes)
app.use('/api', pageRoutes)
app.use('/api', adressRoutes)
app.use('/api', orderRoutes)
app.use('/api', adminOrderRoutes)
app.use('/api', adminHomePageRoutes)




app.get('/', (req,res)=>{
    res.status(200).json({
        message : "Hello World!!!"
    })
})

app.post("/data", (req,res)=>{
    res.status(200).json({
        message : req.body
    })
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 4500;
}

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})



