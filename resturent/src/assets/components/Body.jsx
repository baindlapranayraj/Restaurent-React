import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
};

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  if (list.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let filteredList = list.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let topRatedList = list.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setList(topRatedList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestaurentContainer">
        {list.map((data) => (
          <RestaurentCard prop={data.info} key={data.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
