import React from "react";
import admap from './addressmap.png'
export default function About() {
  return (
    <React.Fragment>
      <div className="about_body">
        <div className="for">
          <p2>About Us</p2>
        </div>
        <div className="about">
          <div className="head">
            <h1>Who we are</h1>
            <p>
              Vizchem is a chemical trading company that specializes in
              providing a wide range of high-quality chemicals to businesses in
              various industries. With years of experience in the chemical
              industry, Vizchem has become a trusted supplier of chemicals,
              providing reliable and efficient services to customers across the
              globe.The company offers an extensive selection of chemicals
              including industrial chemicals, pharmaceutical ingredients,
              agrochemicals, and specialty chemicals, among others. Vizchem is
              committed to ensuring that all its products meet the highest
              quality standards and are sourced from reputable manufacturers.
              Vizchem understands that each customer has unique requirements and
              strives to provide customized solutions that meet their specific
              needs. The company's team of experienced professionals works
              closely with customers to ensure that they receive the right
              products at the right time, while providing excellent customer
              service. At Vizchem, the focus is on building long-term
              relationships with customers by providing them with high-quality
              chemicals, reliable services, and competitive pricing. With a
              strong commitment to quality, innovation, and customer
              satisfaction, Vizchem is dedicated to being a leading chemical
              supplier in the industry.
            </p>
          </div>
          <div className="for">
              <p2>Owner &Compmay Information</p2>
            </div>
          <div className="core">
            
          
            <div className="info">
             <li>
                <p>Owner Name:Ajay Kumar Saini <br />
                Mobile Number:+91955594568 <br />
                Company Address:OPO UIT police Chowki,Gaurav Path UIT Bhiwadi 301019,Alwer(Raj.)</p>
              </li>
             </div>
                 <div className="info">
              <img src={admap} alt="" />
                </div>
             
          </div>
          </div>
        </div>
     
    </React.Fragment>
  );
}
