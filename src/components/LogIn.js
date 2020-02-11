import React, { useState } from 'react'

export default function LogIn(props) {
    const [number,setNumber]=useState("")
    const checkListId=props.list.map(e=>{return e.id})
    const name=props.list.map(e=>{return e.name})
    const forklift=props.list.map(e=>{return e.forklift})
    
    const btnAction=()=>{
        
        const wow=checkListId.filter(e=>e==number)
        console.log('wow' ,wow)
        if(number==99999){
            window.location="http://localhost:3000/#/Manager"
            return
        }
        if(wow==number){
            
            
            alert('You are logged in')
            var specificEmplyer=props.list.filter(e=>e.id==wow)
            // console.log('specific', specificEmplyer)
            props.choose(specificEmplyer[0].id,specificEmplyer[0].name,specificEmplyer[0].forklift)
            // props.choose(checkListId,name,forklift)
            window.location="http://localhost:3000/#/Welcome" 
        }
        else{
            alert('You are not in the system, please sign in first')
        }
    }
    return (
        <div style={{display:"inline-block", width:400,height:200, backgroundColor:"grey", marginTop:50}}>
            <h1 style={{textDecoration:"underLine"}}>login</h1>
            <h2 style={{display:'inline'}}>No.</h2><input onChange={e=>{setNumber(e.target.value)}} style={{marginLeft:20}} type="number"></input><br></br><br></br>
            <button  style={{width:80, height:30, backgroundColor:'blue', color:'white', borderRadius:5}} onClick={btnAction}>Enter</button>
            



        </div>
    )
}
