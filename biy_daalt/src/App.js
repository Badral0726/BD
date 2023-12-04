import './App.css';
import "./APP2.css"
import Navbar from './components/navbar';
import Footer from './components/footer';
import React, {Component} from 'react';
import Main from "./components/Main"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from 'express';

class App extends Component{
  
  render(){
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  //   return (
  //   <div>
  //     <Navbar></Navbar>
  //     <Main></Main>
  //     <Footer></Footer>
  //   </div>
  // );
  }
}

export default App;
