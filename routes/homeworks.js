// 3.1. Let's require express just like we did in "server.js"
const express = require("express");
// 3.2. Now let's bring in Router and store it in a variable called router.
let router = express.Router();

router.get("/", (req, res)=>{
    console.log("Homework get request")
});

// 3.3. And while we are at it let's export this module.
module.exports = router;
