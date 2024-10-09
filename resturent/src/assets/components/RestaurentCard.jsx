
const RestaurentCard = ({prop}) =>{
  // console.log(prop)
    return (
      <div className="RestaurentCard" style={{backgroundColour:"#f0f0f0",margin:"20px ", width:"250px" } }>
        <img 
        className="Restaurent-logo"
        alt = "Restaurent-logo"
         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${prop.cloudinaryImageId}`}/>
          <h3>{prop.name}</h3>
           {prop.cuisines.join(",")}
        <h4>{prop.avgRating} Rating</h4>
        <h4>34 minutes</h4>
      </div>
    );
  }; 

  export default RestaurentCard;