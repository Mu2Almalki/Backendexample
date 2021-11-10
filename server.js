// 1.2. Let's start by requiring express and storing it in a variable called express.
const express = require("express");
// 1.3. Now let's do the same thing with "cors"
const cors = require("cors");
// 1.4. We are going to create another variable to set up our aplication.
const app = express();
// 1.5. and one more variable where we are going to contain our PORT information.
const PORT = 8000;
// 2.3.1. Let's create a variable called homework and set the path to the folder inside of the require.
const homework = require("./routes/homeworks")

// 2.3.2. And new let's get a path that says that anytime we have a user go to the "/homework" we will go into the homework variable that will lead us to the "homework.js" file.
app.use('/homework', homework)
// 1.6. Let's set up a GET request for our app in wich we are going to have our endpoint and
//  a callback function that takes two parameters: REQUEST "req" and RESPONSE "res" separated by a coma.
app.get("/", (req, res)=>{
    console.log("We are online")
});

// 1.7.  Finally let's listen for our port we are creating.
app.listen(PORT, (err) => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port `+PORT)
})


