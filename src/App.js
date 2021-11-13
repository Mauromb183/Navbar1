import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';

function App() {

 return (
<Router>
    <div ClassName="container">
<h1>Navbar... </h1>
    
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
      
    </Routes>
    </div>
</Router>


);
 }
export default App;
 

