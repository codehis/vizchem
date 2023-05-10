import React from "react";
import Card from "./Card";
import Chemical_data from "./Chemical-data";


export default function Industrial() {
  const ncard = (val) => {
    return (
      <>
        <Card imgsrc={val.imgsrc} title={val.title} link={val.link} />
      </>
    );
  };

  return (
    <React.Fragment>
      {/*by using props  */}
      {/* <Card
        imgsrc="https://media.istockphoto.com/id/843537906/photo/house-cleaning-concept.jpg?s=612x612&w=0&k=20&c=jFerqsVhz4M7KTQ_OFTqVjqUCXslwjvb7xZ4jMgcyYE="
        title="Kitchen Chemicals"
      />
      <Card
        imgsrc=" https://media.istockphoto.com/id/949218798/photo/person-pouring-detergent-in-lid.jpg?s=612x612&w=0&k=20&c=n_d-5ARn4GG-YwXKcVaZnQV93bu8Gi8Wfwq_p6hXqAw="
        title="Laundary Chemicals"
      /> */}
      {/* by array concept */}
      {/* <Card imgsrc={Chemical_data[2].imgsrc} title={Chemical_data[2].title} /> */}
      {/* using map function */}
      <div className="indus">
      <div className="for">
      <p1>Our Products</p1>
      </div>
      <hr />
     
      <div className="main-cards">
        
   
      {Chemical_data.map(ncard)}
      </div>
      </div>
     
      
    </React.Fragment>
  );
}
