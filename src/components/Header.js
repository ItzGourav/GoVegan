import React from 'react';
import Navbaar from './Navbaar';
import "./App.css"
import Data from "../Data.json"

const Header = () => {

var randomNumber = Math.floor(Math.random()*Data.length)
console.log(randomNumber);

let quote = Data[randomNumber].quote;
let name = Data[randomNumber ].author
  return (
    <div className="bgmain">
      <div id='Main'>
        <Navbaar />
      </div>
      <div className='para'>
      <h2>Go Vegan</h2>
        <p>{quote}
        </p>
        <p className='Text'>{name} </p>
      </div>
    </div>
  )
}

export default Header
