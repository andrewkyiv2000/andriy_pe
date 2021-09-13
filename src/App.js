import React from "react";
import logo from './logo.svg';
import './App.css';
import Head from './elements/head.js';
import Main from './elements/main.js';
import Footer from './elements/footer.js';

function App() {
  return (
    <div className="container">
   <Head/>
   <Main/>
   <Footer/>
   </div>
  );
}

export default App;
