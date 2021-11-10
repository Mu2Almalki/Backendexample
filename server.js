// 2. Let's start by requiring express and storing it in a variable called express.
const express = require("express");
// 3. Now let's do the same thing with "cors"
const cors = require("cors");
// 4. We are going to create another variable to set up our aplication.
const app = express();
// 5. and one more variable where we are going to contain our PORT information.
const PORT = 8000;

// 6. Let's set up a GET request for our app in wich we are going to have our endpoint and a callback function that takes two parameters: REQUEST "req" and RESPONSE "res" separated by a coma.
app.get("/", (req, res)=>{
    console.log("We are online")
});

// 7.  Finally let's listen for our port we are creating.
app.listen(PORT, (err) => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port `+PORT)
})