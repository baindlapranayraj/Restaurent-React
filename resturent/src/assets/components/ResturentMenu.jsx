
import { useState,useEffect } from "react";

const RestaurentMenu = () => {
    const[resInfo,setResInfo] = useState(null);

   useEffect(() => {
 
   }, []);

   const fetchMenu =  async() =>{
    // const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${}`)
    // const json = await data.json();
    // console.log(json)
    setResInfo();
   };



    return  (resInfo === null)? (
    <shimmer/> 
    ):  (
        <div className="menu">
            <h1></h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>diet coke</li>
            </ul>

        </div>
    );
};

export default RestaurentMenu;