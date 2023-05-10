import React from "react";
import homeimg from "./home-img.jpg";
import Industrial from "./Industrial";
import Contact from "./Contact";

// import Scontact from "./Scontact";
// import Slidehome from "./Slidehome";
// import logo from './logo.jpeg'

export default function Home() {
  return (
    <React.Fragment>
      <div className="home-body">
        <h2>Welcome to our VIZchem .</h2>
        <div className="containt">
          <div className="picture">
            <img src={homeimg} alt="" />
          </div>
          <div className="discrip">
           
            <p>
              We are a leading supplier of high-quality chemicals for a variety
              of industries, including pharmaceuticals, food and beverage,
              agriculture, and industrial manufacturing. At our company, we
              pride ourselves on our commitment to providing our customers with
              the best possible products and services. We work closely with our
              suppliers to ensure that we always have a reliable and consistent
              supply of the chemicals that our customers need, and we take great
              care to ensure that all of our products are of the highest
              quality.
            </p>
          </div>
        </div>
        <h2>In terms of distribution of Vizchem</h2>
        <div className="containt">
        <div className="picture">
            <img
              src="https://media.istockphoto.com/id/518247394/photo/men-working-at-a-chemical-warehouse.jpg?s=612x612&w=0&k=20&c=UD3KweM38ZSAmdf1Qpi8ie7W5pCkSHLqQ2OMKdW99W0="
              alt=""
            />

        </div>

        <div className="discrip">
          
          <p>
            VIZchem may use a variety of methods to transport and deliver
            their products to customers. These methods may include trucking,
            rail transportation, and sea transportation. Additionally, may
            also have warehouses and storage facilities to store their
            products before they are sold and distributed to customers.
            Overall, the chemical distribution industry plays a critical role
            in the global economy, providing essential products to a wide
            range of industries and customers.
          </p>
        </div>
       
        </div>
        <hr />
        <Industrial />
        <hr />
        <Contact />
        {/* <div className="discreption-1">
          <div className="oxi">
          <h2>SALIENT FEATURE OF THE COMPANY</h2>
          <p>
            VIZ Chem which came into existence in India almost 25 years ago, has
            set its international standard with much determination and
            perseverance and has since then demonstrated its entrepreneurial
            spirts by achieving significant results in the following sectors.
          </p>
          </div>
          <div className="oxi">
          <h2>MOTO OF THE COMPANY</h2>
          <p>
            The company with a wide vision stands with a motto to provide best
            services with impeccable quality assurance. We are a name to rely
            upon for providing a wide gamut of chemicals assuring accurate
            purity and confirm to international standards.
          </p>
        </div>
        <div className="oxi">
          <h2>APPLICATION AREAS</h2>
          <p>
         
            <div className="list">
              <ol>
                <li>Hospitality</li>
                <li>Kitchen Stewarding</li>
                <li>Healtcarae</li>
                <li>Food/bevergae processing</li>
                <li>Laundary care</li>
                <li>Housekeeping</li>
                <li>Swimming Pools</li>
                <li>Water treatment plants</li>
                <li>Dairy Farming</li>
                <li>Poultary Farms</li>
              </ol>
            </div>
          </p>
        </div> */}

        {/* </div> */}
      </div>
    </React.Fragment>
  );
}
