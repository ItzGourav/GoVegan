import React from 'react';
import { useState } from 'react';
import "../Css/Contact.css"

const ContactUs = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: ""
  });
  const [actualData, setActualData] = useState([])


  const changeHandle = (event)=>{
    const value = event.target.value;
    const name = event.target.name;
    setData((preval) =>{
      return {
        ...preval,
        [name]:value
      }
    })
  }


  const submitHandle = (e) => {
    e.preventDefault();

    setActualData((preval)=>{
      return [...preval,data]
    })
    alert(`hi ${data.username}`)
  }



  const year = new Date().getFullYear();

  return (
    <>
      <div id="ContactUs" className='ben_inner'>
        <h1>ContactUs</h1>
        <div className="contactDiv">
          <div className="inputForm">
            <form onSubmit={submitHandle}>
              <input
                type="text"
                name='username'
                placeholder='Your Name'
                value={data.username}
                onChange={changeHandle}
              />
              <input type="email"
                name="email"
                placeholder='Your Email'
                value={data.email}
                onChange={changeHandle}
              />

              <textarea
                className='textarea'
                name="message"
                cols="30"
                rows="3"
                placeholder='Enter Your Message'
                value={data.message}
                onChange={changeHandle}
              ></textarea>
              <button>Submit</button>
            </form>
          </div>

          <div className="contactLinks">
            <p><i className="bi bi-mailbox2 iconss"></i> gourav98055@gmail.com</p>
            <div className="linkIcons">
              <a href="https://www.linkedin.com/in/itzgourav/" target="_blank">
                <span><i className="bi bi-linkedin icons"></i></span>
              </a>

              <a href="https://www.github.com/ItzGourav" target="_blank">
                <span><i className="bi bi-github icons"></i></span>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer'>
          &#169; {year} GoVegan, inc. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default ContactUs
