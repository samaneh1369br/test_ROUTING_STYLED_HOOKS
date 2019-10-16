
import React ,{useState,useEffect} from "react"
import Nav from "../Nav/Nav"

const AfterLogin=(props)=>{
   const[count,setCount]=useState(0);
   useEffect(()=>{document.title=`${count}`;});
useState()
return(
    
    <div>
        <Nav navStatus={props.location.state}/> 
        {count}
        <button onClick={()=>
          
                setCount(10)
             
            }
       
        >click me</button>
    </div>
)
}
export default AfterLogin