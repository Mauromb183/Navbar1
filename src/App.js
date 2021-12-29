import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route,Link,Routes,NavLink,Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';
/*import Button from 'react-bootstrap/Button';*/
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';
import { propTypes } from 'react-bootstrap/esm/Image';
import { string } from 'prop-types';
import PropTypes from 'prop-types';

//const Button=styled.button`background-color:#3949ab;padding:1em;color:white`;




const Header=({title})=>{
return(<div>{title} </div>);}

function App(props) {

 return (
 
<Router>

<Navbar/>

<Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/reports" element={<Contact title="algo"/>}/>
    </Routes>


</Router>


);
 }

 Home.defaultProps={
  title:"perro" 
}

Home.propTypes={
title:PropTypes.string

}

Header.defaultProps={
title:"Bienvenido!!"

}

Header.propTypes={title:propTypes.string}

export default App;
 /*
const superStyle={backgroundColor:"#000",color:"white"}
*/