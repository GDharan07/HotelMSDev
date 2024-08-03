const router = require('express').Router();
const userSchema = require('../Schemas/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register',async(req,res)=>{
    try{
        const{email,name,password,department} = req.body;
        const userEmail = await userSchema.findOne({email});
        const userName = await userSchema.findOne({name});

        if(userEmail){
            return res.json('email already exits')
        }
        if(userName){
            return res.json("user already exits")
        }

        if(department === null || department === undefined || department === ""){
            return res.json("department is empty")
        } 

        const hashPassword = await bcrypt.hash(password,10)
        const userData = await new userSchema({email,name,department,password:hashPassword})
        await userData.save();
        res.json('userposted successfully')
    }catch(err){
        console.log(err)
    }
}) 


router.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await userSchema.findOne({email})
        if(!user){
            return res.json("User not Found")
        }
        const validPassword = await bcrypt.compareSync(password,user.password);
        if(!validPassword){
            return res.json("Mismatch Password");
        } 

        const token = jwt.sign({ id: user.id }, "secret");
        res.json({ token});

    }catch(err){
        console.log(err)
    }
}) 

module.exports = router;