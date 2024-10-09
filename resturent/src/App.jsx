import React from "react";
import Header from "./assets/components/Header";
import Body from "./assets/components/Body";
import { Outlet } from "react-router-dom";

const  App = () => {
return (
<div>
  <Header />
   <Outlet />
  {/* <Body/> */}
</div> 
);
};



export default App