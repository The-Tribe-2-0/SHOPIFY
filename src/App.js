import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import Product from "./ProductList";
import {Switch,route} from 'react-route-dom';

function App(){
    return(
        <>
            <NavBar />
    <Switch>
        <Route exact path ="/" Component={Home}/>
        <Route exact path ="/products" Component={Products}/>
    
    <Product />
    </Switch>
    
        </>
    );
}

export default App;