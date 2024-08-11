const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./Routes/UserRouter')

mongoose.connect('mongodb://localhost:27017/HotelMSDev').then(()=>{
    console.log('db connected')
}).catch((err)=>{ 
    console.log(err)
});
//

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/auth',userRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});