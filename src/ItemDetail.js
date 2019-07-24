import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail() {

  useEffect(() => {
    fetchItem();
  },[]);

  const[item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=61ea3e9-8438e42-f53d351-e53a5ce`)
    const item = await fetchItem.json();

    console.log(item);
  };

  return (
    <div>
    <h1>Item</h1>
    </div>
  );
}




export default ItemDetail;
