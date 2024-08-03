const router = require('express').Router();
const userSchema = require('../Schemas/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register',async(req,res)=>{
    try{
        const{email,name,password,role} = req.body;
        const userEmail = await userSchema.findOne({email});
        const userName = await userSchema.findOne({name});

        if(userEmail){
            return res.json('email already exits')
        }
        if(userName){
            return res.json("user already exits")
        }

        const hashPassword = await bcrypt.hash(password,10)
        const userData = await new userSchema({email,name,role,password:hashPassword})
        await userData.save();
        // res.json('userposted successfully')
    }catch(err){
        console.log(err)
    }
})

module.exports = router;