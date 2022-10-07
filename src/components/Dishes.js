import React from 'react'
import Card from './Card'
import Dishes from "../Images.json"
import { useState } from 'react'
import "../Css/Card.css"

const Pics = () => {

  const [data, setData] = useState(Dishes);

  return (
    <>
      <div id='Dishes'>
        <div className="ben_inner">
          <h1>Dishes</h1>
          <div className="picDiv container mt-4">
          {
            data.map((val,index)=>{
              return (
                <Card 
                key={index}
                image={val.image}
                dish={val.dish}
              />
              )
            })
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Pics
