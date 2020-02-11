import React, { useState } from 'react'

export default function SignIn(props) {
const [number,setNumber]=useState("")
const [name, setName]=useState("")
// const [forklift,setForklift]=useState([])

const btnClick=()=>{
    
    var forklift=false;
    var in1=document.getElementById('inp1');
    var in2=document.getElementById('inp2');

    if(in1.checked==true){
        forklift=true
    }
    if(in2.checked==true){
        forklift=false
    }

    if(number.length==5 && name.indexOf(' ')!=-1){
    props.add(number,name,forklift)
    alert('you have signed in')
    
    window.location="http://localhost:3000/#/Login"
    }
    else{
        alert('The name must contain minimum 4 characters')
    }
}

    return (
        <div style={{alignItems:"center", justifyContent:"center"}}>
            <div style={{display:"inline-block", width:500, backgroundColor:"grey", marginTop:50, height:350}}>
            <h2 style={{textDecoration:"underLine"}}>Sign up</h2>
            <div style={{}} className="details">
                <h2 style={{display:'inline'}}>No.</h2><input onChange={e => {setNumber(e.target.value);}} style={{marginLeft:100}} type="number"></input><br></br>
                <h2 style={{display:'inline'}}>FullName</h2><input onChange={e => {setName(e.target.value);}} style={{marginLeft:30}} type="text"></input>
                <h4>Forklif truck</h4>
                <input id="inp1" name="true" value="true" type='radio'></input>
                <input id="inp2" name="true" value="false" type='radio'></input><br></br>
                <p style={{display:'inline'}}>yes </p><p style={{display:'inline'}}>no</p><br></br><br></br>
                <button style={{width:80, height:30, backgroundColor:'blue', color:'white', borderRadius:5}} onClick={btnClick} >Create</button>
                

            </div>

            </div>

        </div>
    )
}
