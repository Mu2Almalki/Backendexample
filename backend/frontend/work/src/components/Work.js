import { useState, useEffect } from "react";
import axios from "axios";
function Work(){
    const [work , setWork]=useState([])
    const [addtitle , setAddtitle]= useState("")
    const[addlink , setAddlink]= useState("")
    const [addDesc , setAddDesc]=useState("")
    const [addTechno ,setAddTechno]=useState("")

    useEffect (() =>{
        axios.get('http://localhost:8000/homeworks/home')
        .then((res)=>{
            console.log(res);
            setWork(res.data);
        })
        },[]);

        
function handlPost(){
    axios.post('http://localhost:8000/homeworks/post' , {title:addtitle , link: addlink ,description:addDesc , technologiesUsed:addTechno })
    .then((res) => {
        console.log(res.data);
        setWork(res.data);
    })
}

return (
    <div>
        <header className="App-header">
        {
            work.map((item) =>{
                return (
                    <div>
                        <h1>{item.title}</h1>
                        <h3>{item.link}</h3>
                        <p>{item.description}</p>
                        <p>{item.technologiesUsed}</p>

                        
                    </div>
                )

            })
        }
        
        <input onChange ={(e)=> setAddtitle(e.target.value)}
                         type="text" placeholder="Title"></input><br/>
                         <input onChange ={(e)=> setAddlink(e.target.value)}
                         type="text" placeholder="Link"></input><br/>
                        <textarea onChange ={(e)=> setAddDesc(e.target.value)}
                          placeholder="description" rows="4" cols="50"></textarea>
                          <br/>
                        <textarea onChange ={(e)=> setAddTechno(e.target.value)}
                          placeholder="technologiesUsed" rows="4" cols="50"></textarea>
                          <br/>
                          <button onClick={handlPost}>Add</button>

        </header>
                        
    </div>
)
}
export default Work;
