import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
    console.log(match);
  },[]);

  const[item, setItem] = useState({
    images:{},
    ratings:{},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`)
    const item = await fetchItem.json();
    setItem(item);

    console.log(item);
  };

  return (
    <div>
    <h1>{item.name}</h1>
    <h1>Rating {item.ratings.avgStars}</h1>
    <h1>Number of Voters {item.ratings.numberVotes}</h1>
    <img src={item.images.transparent} alt=""/>
    </div>
  );
}




export default ItemDetail;
