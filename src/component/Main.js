

import React, {useState} from 'react';

import {  Route } from 'react-router-dom'
import Details from "./Details"
import App from "../App"
function Main() {



  
  return (
    <div className="">
     
      <Route exact path='/' component={App}  />
      <Route path='/details/:movieId'render={(props)=><Details {...props}  />}/>

      
    </div>
  );
}

export default Main;
