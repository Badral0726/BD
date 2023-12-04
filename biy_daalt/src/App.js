import './App.css';
import "./APP2.css"
import Navbar from './components/navbar';
import Footer from './components/footer';
import React, {Component} from 'react';
import Main from "./components/Main"

class App extends Component{
  
  render(){
    return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );}
}

// function App()
// {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Footer></Footer>
//     </div>
//   );
// }

export default App;
