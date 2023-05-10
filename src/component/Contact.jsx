import React from "react";


export default function Contact() {
  const message=()=>{
    alert('Database Under Develop')
  }
  return (
    <React.Fragment>
      <div className="for">
      <p1>Contact Us</p1>
      </div>
   
      
      <div className="contact_body">
   
      <div className="fill_form">
        <form action="" >
          <label htmlFor="text">Name:</label>
          <input type="text" placeholder="Enter your Name " />
          <label htmlFor="number">Number:</label>
          <input type="number" placeholder="Enter your Number" />
          <label htmlFor="text">Email:</label>
          <input type="email" placeholder="Enter your Email" />
          <label htmlFor="text">Discription:</label>
          <textarea name="" id="message" cols="10" rows="10"></textarea>

          <input type="submit" onClick={message} />
          <input type="reset" />
        </form>
      </div>
      </div>
     
    </React.Fragment>
  );
}
