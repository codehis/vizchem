import React from "react";
export default function Scontact() {
  return (
    <React.Fragment>
      <div className="contact">
        {/* <div className="mobile-number">
        <  LocalPhoneIcon/>

          <li>
            <a href="https://wa.me/+919555924568"><button id="chat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEHfupiwVjNnaSbBn_OgdI6ExK9UaI9I0ukPnshWgDw&s" alt="" /></button></a>
          </li>
          
          <li>
            <a href="https://wa.me/+917742206512">+917742206512</a>
          </li>
        </div> */}
        <div className="email">
         
          <li>
         <a href="mailto:purchase.vizchem@yahoo.com">
         <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXrSB8pGJPCzlPOZ5yZ0_ktm4XSl7DlF3duA39p1dU0MSIqJfHTWeri4T5YLcV3ZnFuY&usqp=CAU"
            alt=""
          />
           
              purchase.vizchem@yahoo.com
            </a>
          </li>
         
          <li>
            <a href="mailto:info@vizchem.co.in">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXrSB8pGJPCzlPOZ5yZ0_ktm4XSl7DlF3duA39p1dU0MSIqJfHTWeri4T5YLcV3ZnFuY&usqp=CAU"
            alt=""
          /> info@vizchem.co.in</a>
          </li>
        </div>
      </div>
    </React.Fragment>
  );
}
