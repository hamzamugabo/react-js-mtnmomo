import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import { HashRouter,Switch,Route} from "react-router-dom";
class App extends Component {
  constructor() {
    super();
  this.state={
uuid:'',
subscription:'e9083b487abe4c53a711e183e9d8739f'
  }
}
  SandboxUserProvisioning = () => {
    this.setState({uuid:uuidv4});

    const data = {
      "providerCallbackHost": "sandbox"
    };
    const options = {
      headers: {
        "X-Reference-Id":this.state.uuid,
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key":this.state.subscription
      },
    };
    axios
      .post("https://sandbox.momodeveloper.mtn.com/v1_0/apiuser", data, options)
      .then((res) => {
       if(res=='201 Created'){
         console.log(res);
       }else{
         console.log(res);
       }
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });

  }
render(){
  return(
    <div className="main">
      <div>
      {/* <h1>Sandbox momo API Test</h1> */}

      </div>
      <section className='glass'>
<div className="dashboard">
  <div className="profile">
  <img style={{width:"80px",height:"80px"}} src={require('./th.jpg')} />
  </div>
  <div className="links">
    <h2>Streams</h2>
  </div>
  <div className="logo"></div>
</div>
<div className="games">
  <div className="title">
    <h2>Test Sandbox mtn Momo API</h2>
  </div>
  <div className="cards">
  <button className="token" onClick={this.SandboxUserProvisioning.bind(this)}>
 Generate Token
</button>
</div>
<div className="cards">

<button className="get" >
 GetToPayRequest
</button>
</div>
<div className="cards">

<button className="post" >
 PostToPAyRequest
</button>
  </div>
</div>

      </section>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </div>
  )
}
}
export default App;
