import React, { useState } from 'react'

export default function Products(props) {
    const [flag,setFlag]=useState(true)
    // const [valid,setValid]=useState()

    const check=(f)=>{
        if(f)
        return "yes"
        else{
            return "no"
        }
    }

    const update=()=>{
        props.changeFlag(props.id)
        
        if(props.solo==props.forklift){
        setFlag(false)
        
        }
        else if (!props.forklift) setFlag(false)
        else{
            alert('Valid forklift license required')
        }

    }

    const showOrNot=(flag)=>{
        if(flag && props.id){
            return <div style={{ width:300, border:'solid'}}>
                <h4>No.:  <span style={{fontSize:15, color:"grey"}}>{props.id}</span></h4>
                <h4>type: <span style={{fontSize:15, color:"grey"}}>{props.name}</span></h4>
                <h4>Need forklift truck: <span style={{fontSize:15, color:"grey"}}>{check(props.forklift)}</span></h4>
                <button onClick={update}>Update</button>
            </div>
        }
        
    }
    return (
        <div className="listProducts">
                
               {showOrNot(flag)} 
               
           



        </div>
    )
}
