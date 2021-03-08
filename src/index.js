import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './screen/Home';
import Login from './screen/Login';
import  Register  from './screen/Register';
import  ProductInformation  from './screen/ProductInformation';
import  About  from './screen/About';
import Contact  from './screen/Contact';
import Mycart  from './screen/Mycart';
import  Notfound  from './screen/Notfound';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";


const routing=(
  <BrowserRouter>
<Switch Switch>
<Route exact path="/" component={Home}/> 
    <Route  path="/login" component={Login}/> 
    <Route  path="/register" component={Register}/>
    <Route  path="/about" component={About}/>
    <Route  path="/contact" component={Contact}/>
    <Route  path="/productinformation" component={ProductInformation}/>
    <Route  path="/Mycart" component={Mycart}/>
    <Route component={Notfound}/> 
</Switch>
  </BrowserRouter>
);
ReactDOM.render(routing,document.getElementById('root')
);

reportWebVitals();
