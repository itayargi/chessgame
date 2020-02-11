import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import TopLinks from './components/TopLinks';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import Welcome from './components/Welcome';
import Connect from './components/Connect';
import Manager from './components/Manager'

function App() {

  const [products,setProducts]=useState([
    {id:11122, name:'green box', forklift:false},
    {id:22554, name:'green box', forklift:false},
    {id:66698, name:'blue box', forklift:true},
    {id:78544, name:'red box', forklift:false},
    {id:69875, name:'red box', forklift:false},

  ])
  const [solo,setSolo]=useState([{forklift:false}])
  const [employers,setEmployers]=useState([])
  

  const addnewemployer=(num,name,forklift)=>{
    if(num==="" || name===""){
      return;
    }
    setEmployers([...employers,{id:num,name:name,forklift:forklift,counter:0}])
    
    
    
  }

  const searchEmployer=(num)=>{
   const theOne= employers.filter(e=>e.id===num)
    
  }
  const changeFlag =(num)=>{
    // console.log('yo yo yo')
    // var productPress= products.filter(p=>p.id==num)
    // productPress.forklift=!productPress.forklift
    // console.log('productPress', productPress)
    for(let i=0; i<products.length; i++){
      if(products[i].id==num){
         (products[i].forklift=!products.forklift)
        //  console.log('products', products)
      }
    }
  }

  const chooseEmployer=(id,name,forklift)=>{
    setSolo({id:id,name:name,forklift:forklift})
    // console.log('solo', solo)
    for(let i=0; i<employers.length; i++){
      if(employers[i].id && employers[i].id==id){
        employers[i].counter++
      }
    }
  }

  // const changeForklift=(obj,num)=>{
  //   const temp= obj.filter(p=>p==num)
  //   temp.forklift=
  // }

  return (

    
    <div className="App">
     
     



      <Router>
        <TopLinks/>
      <Switch>
        
        <Route exact path='/' component={()=>{return <Connect/>}}/>
          <Route exact path='/SignIn' component={()=>{return <SignIn employers={employers} add={addnewemployer}/>}} />   
          <Route exact path='/LogIn' component={()=>{return <div className="background">
      <LogIn choose={chooseEmployer} list={employers} solo={solo} search={searchEmployer}/>
     
      </div>}} />

      <Route exact path='/Welcome' component={()=>{return <div>
      <Welcome products={products} changeFlag={changeFlag} solo={solo} name={solo.name}/>
      
          
      
      </div>}} />
      

      <Route exact path='/Manager' component={()=>{return <div style={{alignContent:"center", justifyContent:"center", textAlign:"center"}}><Manager employers={employers}/> </div>}} />

      
      
      </Switch>
      </Router>




    </div>
  );
}

export default App;
