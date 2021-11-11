const express= require ("express");
const cors =require('cors')
const app = express()
const PORT = 8000;
const homeworks = require("./routes/homeworks");
app.use(cors({origin: 'http://localhost:8000'}))
app.use(express.json());
app.use('/homeworks',homeworks) 

app.listen(PORT , (err)=>{
    if (err){
        return console.log("ERROR" , err)
    }
    console.log("Listening on port" +PORT)
})