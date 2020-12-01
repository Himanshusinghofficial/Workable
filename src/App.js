import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import "./App.module.css"

class App extends Component {


  render() {
    return (
      <div className="container">
      <div className="countdown" style={{textAlign:'center'}}>
       <h2 style={{color:'white'}}>We'll be LIVE Soon!</h2>
       <p id="demo" style={{color:'white'}}></p>
     </div>
      <div style={{textAlign:'center' ,marginTop:'70px'}}>
      <button type="button" class="btn btn-danger" >Join Community</button>
      <button type="button" class="btn btn-danger" style={{paddingLeft:'20px',paddingRight:'20px',marginLeft:'40px'}}>Subscribe</button>
      </div>
      <div style={{textAlign:'center',marginTop:'70px'}}>
      <a><i className="fab fa-twitter fa-2x" ></i></a>
      <a><i className="fab fa-instagram fa-2x" style={{ padding: '0 0 0 20px' }}></i></a>
      <a><i className='fab fa-facebook fa-2x' style={{ padding: '0 0 0 20px' }}></i></a>
      <a><i className="fab fa-linkedin fa-2x" style={{ padding: '0 0 0 20px' }}></i></a>
      </div>
      </div>
      
      
    );
  }
}


export default App;
