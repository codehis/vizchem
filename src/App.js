import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
// import About from "./component/About";
import Contact from "./component/Contact";
import Industrial from "./component/Industrial";
import Footer from "./component/Footer";
import Whatsapp from "./component/Whatsapp";


// import Product from "./component/Product";

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      
      <Navbar />
      
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Product&Services" Component={Industrial} />
        {/* <Route path="/Product" Component={Product} /> */}
        <Route path="/Contact" Component={Contact} />
        {/* <Route path="/About" Component={About} /> */}
      </Routes>
      
      {/* <hr />
      <Industrial/>
      <hr />
      <Contact/>
      <hr /> 
      <Whatsapp />
      <Footer /> */}
    </React.Fragment>
  );
};

export default App;
