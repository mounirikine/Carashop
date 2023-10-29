
// import React, { useEffect, useState } from "react";
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import {} from 'react-router-dom'
import { Link , Routes , Route } from 'react-router-dom';
import Router from './components/Router';

function App() {
 

  return (
    <>
      <div className='container justify-between flex flex-col'>
      <Header />
      <Router />
      <Footer />
      </div>
    </>

  );
}

export default App;
