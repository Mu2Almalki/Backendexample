const express = require("express")
let router =express.Router();
const homework =require( './homeWork.json')

router.get('/home', (req , res)=>{
    console.log("We are online")
    res.send(homework)
})

router.post('/post', function(req ,res ){
    const newhomework={
        id :homework.length+1,
        title:req.body.title,
        link:req.body.link,
        description:req.body.description,
        technologiesUsed:req.body.technologiesUsed
    }
    homework.push(newhomework);
    res.send(homework)
})

router.delete("/delete/:id", (req, res) => {
    id = req.params;
    let deletedhomework = homework.splice(id, 1);
  
    res.send(homework);
  });

 router.put("/putHw/:id", (req, res) => {
    let found = homework.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
    console.log(homework)
    if (found) {
      let update = {
        id :found.id,
        title:req.body.title,
        link:req.body.link,
        description:req.body.description,
        technologiesUsed:req.body.technologiesUsed
      };
      let targetIndex = homework.indexOf(found);
      homework.splice(targetIndex, 1, update);
      res.send(homework);
    } else {
      res.sendStatus(404);
    }
  });
   


module.exports =router;