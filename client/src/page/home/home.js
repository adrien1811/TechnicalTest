import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './home.css';
import { Link } from 'react-router-dom'; 
const home =() =>{

  return (
    <div>
     <section className="ftco-section ftco-no-pt d-flex justify-content-md-center justify-content-center align-items-md-center align-items-center gradient-container2" style={{ backgroundColor: 'white', height:'100vh' }}>
    <div classname= 'row align-items-center justify-content-center'>
   <h> Selamat siang </h>
   <p> email pengguna </p>
   <p> jam saat ini </p>
  </div>
  </section>
  </div>
  );
}

export default home;
