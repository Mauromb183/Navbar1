import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route,Link,Routes,NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

/*import Button from 'react-bootstrap/Button';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { propTypes } from 'react-bootstrap/esm/Image';
import { string } from 'prop-types';

const Button=styled.button`background-color:#3949ab;padding:1em;color:white`;


const Header=({title})=>{
return(<div>{title} </div>);}

function App(props) {

 return (
 
<Router>
<Navbar/>
    <div ClassName="container">
    <h1 style={superStyle}><Header/> </h1>
    
<Header />


    <div ClassName="btn-group">
  

<NavLink to="/" >
<Button>
   Inicio
   </Button>
    </NavLink>
<NavLink to="/contact">
      <Button>
         {props.title}</Button>
</NavLink>
    
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/contact" element={<Contact title="algo"/>}/>

        
      
    </Routes>
    </div>

    
    <script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  ></script>
  
</div>

</Router>


);
 }

 Home.defaultProps={
  title:"perro" 
}



Header.defaultProps={
title:"Bienvenido!!"

}

export default App;
 
const superStyle={backgroundColor:"#000",color:"white"}
