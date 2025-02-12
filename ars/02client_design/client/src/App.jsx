//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import Flightcreate from "./flights/Flightcreate"

import Flightedit from "./flights/Flightedit"

import Flightlist from "./flights/Flightlist"



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pageheader from "./header/Pageheader.jsx/Pageheader";
import Counter from "./Counter";
import FullName from "./FullName";
function App() {
  

  return (
    <>
   
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Flightlist/>}/>
          <Route path="/flights/list" element={<Flightlist/>}/>
          <Route path="/flights/create" element={<Flightcreate/>}/>
          <Route path="/flights/edit/:id" element={<Flightedit/>}/>

        </Routes>
        </BrowserRouter>
      </div>
      <FullName/>
      
      
    </>
  );
}

export default App
