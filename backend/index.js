const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userModal = require('../backend/Schemas/UserSchema');

mongoose.connect('mongodb://localhost:27017/HotelMSDev').then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
});


app.use(express.json());
app.use(cors())

app.post("/",(req,res)=>{
    const data = new userModal({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password
    })
    data.save()
    res.json('data posted successfully')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});