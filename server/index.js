const express = require('express')
const cors=require('cors')
const mongoose =require('mongoose')
const User=require('./models/user.model')
// const Cart=require('./models/cart.model')
const jwt=require('jsonwebtoken')
 const app =express();
const Cart=require('./models/cart.model')
// const data = require('./data.js')

 app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/new-users')

// app.get('/api/products', (req,res)=>{
//     res.send(data.products);
// })
app.post('/api/donors',async(req,res) =>{
    console.log(req.body)
    const product=await Cart({
        item:req.body.item,
        address:req.body.address,
        phone:req.body.phone,
    })
    res.json({ status:'ok'})
})
app.post('/api/receivers',async(req,res) =>{
    console.log(req.body)
    const product=await Cart({
        item:req.body.item,
        address:req.body.address,
        phone:req.body.phone,
    })
    res.json({ status:'ok'})
})
app.post('/api/register', async(req,res) =>{
    console.log(req.body)
    try{
            await User.create({
            user_name:req.body.user_name,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({ status:'ok'})
    }
    catch (err){
        // console.log(err)
        res.json({status :'error' ,error:'User mail already exists'})

    }
})
app.post('/api/login', async(req,res) =>{
       
       
            const user=await User.findOne({
                email:req.body.email,
                password:req.body.password,
           
            })

            
            if(user){

                const token = jwt.sign({
                    user_name:user.user_name,
                    email:user.email,

                },'secret123')
                return res.json({status:'ok',user:token})
            }
            else{
                return res.json({status:'error',user:false})

            }
})


app.listen(300,()=>{
    console.log('Server started on 300')
})