const express = require('express');
const app = express();

// Define routes and middleware here
// ...

app.get('/',(req,res)=>{
    res.json('hello world')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});