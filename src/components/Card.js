import React from 'react';
import "../Css/Card.css"

const Card = (props) => {

    return (
        <>
            <div className='cardDiv'>
                <img src={props.image} alt="" />
                <p>{props.dish}</p>
            </div>
        </>
    )
}

export default Card
