import React from 'react';
import './App.css';
import Benefits from './Benefits';
import Environment from "./Environment";
import Dishes from "./Dishes";
import Header from "./Header"
import ContactUs from "./ContactUs"

function App() {
  return (
    <>
    <Header />
    <Benefits />
    <Environment />
    <Dishes />
    <ContactUs/>
    </>
  );
}

export default App;
