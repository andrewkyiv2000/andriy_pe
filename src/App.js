import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Surface from './elements/surface.js';
import Title from './elements/title.js';
import Main from './elements/main.js';
import Footer from './elements/footer.js';

class App extends Component{
  render() {
    return (
    <div className="container">
   <Surface/>
   <Title/>
   <Main/>
   <Footer/>
   </div>
    );
  }
}


/*
function App() {
  return (
    <div className="container">
   <Head/>
   <Main/>
   <Footer/>
   </div>
  );
}
*/
export default App;
