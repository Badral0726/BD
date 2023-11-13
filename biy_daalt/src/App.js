import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import React, {Component} from 'react';

class App extends Component{
  
  render(){
    return (
    <div>
      <Navbar></Navbar>
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
