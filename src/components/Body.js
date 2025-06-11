import RestaurantCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

const[listOfRestaurants,setListOfRestaurants]=useState([]);
const[filteredRestaurants,setFilteredRestaurants]=useState([]);

const [searchText, setSearchText]= useState("");

useEffect(()=>{
    fetchData();
},[]);

const fetchData=async()=>{
    const data= await fetch(
"https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.406498&lng=78.47724389999999&carousel=true&third_party_vendor=1"
   );

    const json= await data.json();

console.log(json);

setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


    return listOfRestaurants.length===0 ? <Shimmer/> :( 
      <div className="body">
        <div className="search">
          <input type="text" placeholder="what do you wanna eat..." value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button onClick={()=>{
          const filtered=  listOfRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurants(filtered);
          }}>search</button>
        </div>


        <div className="filter">
            <button className="filter-btn"
             onClick={()=>{
                const filteredList= listOfRestaurants.filter(
                    (restaurant)=>restaurant.info.avgRating> 4.5
                );
                setFilteredRestaurants (filteredList);
                console.log("button clicked");
            }}
             >Top Rated Restraunts</button>
        </div>
        <div className="restraunt-container">
          {
            filteredRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>

            ))
          }
  
        </div>
      </div>
    )
  
  }

  export default Body;