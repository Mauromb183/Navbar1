import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route,Link,Routes,NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Query from './components/Query';
/*import Button from 'react-bootstrap/Button';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { propTypes } from 'react-bootstrap/esm/Image';

const Button=styled.button`background-color:#3949ab;padding:1em;color:white`;




function App(props) {

 return (
   
<Router>
    <div ClassName="container">

    <h1>Navbar... </h1>
    <Query />


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
export default App;
 

