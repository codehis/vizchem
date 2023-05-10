import React from "react";
// import Demo from'./demo2.jpg'


export default function Card(props) {
  return (
    <React.Fragment>
      <div className="cards">
        <div className="card">
          <div className="card-img">
            <img src={props.imgsrc} alt="" />
          </div>
          <div className="title">{props.title}</div>

          {/* <div className="card-button">
            <a href={Demo} download>
            
              <button>Details</button>
            </a>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}
