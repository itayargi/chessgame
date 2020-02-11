import React from 'react'
import Products from './Products'

export default function Welcome(props) {
    

    const check=(f)=>{
        if(f)
        return "yes"
        else{
            return "no"
        }
    }

    return (
        <div style={{display:'inline-block'}}>
            <h2>Welcome {props.name} </h2>
            <div style={{border:'dotted'}}>
            <h3 style={{textDecoration:'underLine'}}>Details:</h3>
            <p><span style={{fontWeight:'bold'}}>Full Name:</span>{props.solo.name} </p>
            <p><span style={{fontWeight:'bold'}}>No.:</span>{props.solo.id} </p>
            <p><span style={{fontWeight:'bold'}}>Forklift truck license:</span>{check(props.solo.forklift)}</p>
            </div>
            <br></br>
            <h3 style={{textDecoration:'underLine'}}>List of products:</h3>
            <div >
            {props.products.map((p,i)=>{return <Products key={i} id={p.id} changeFlag={props.changeFlag} name={p.name} forklift={p.forklift} solo={props.solo.forklift}/>})}
            </div>







        </div>
    )
}
