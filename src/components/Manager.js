import React from 'react'

export default function Manager(props) {

    const forkliftWord=(forklift)=>{
        if (forklift) return "Yes"
        else return "No"
    }
    return (
        <div style={{display:"inline-block"}}>
           
                    <br></br>
                    <div style={{position:"relative", left:"20px"}}>
                        <p style={{display:"inline", position:"relative", left:"50px"}}>ID</p>
                        <p style={{display:"inline", position:"relative", left:"100px", marginLeft:100, marginRight:100}}>NAME</p>
                        <p style={{display:"inline", position:"relative", left:"80px"}}>FORKLIFT</p>
                        <p style={{display:"inline", marginLeft:100}}>COUNTER</p>
                    </div>
            {props.employers.map(e=>{return <div key={Math.random()+1000000}>
             <table style={{border:"solid", borderColor:"grey", width:500}}>
                 <thead>
             <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{forkliftWord(e.forklift)}</td>
            <td>{e.counter}</td>
        </tr>
        </thead>
        </table> </div>})} 

        </div>
    )
}
