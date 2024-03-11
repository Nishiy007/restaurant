import "./Header.css";
import React from 'react';
import food from "../../Image/food.webp"
function Header() {
  return (
    <div>
        <div className="header">
<h1>ReactMeals</h1>
<button className="cartbutton">Your Cart 0</button>
</div>
<img  className="headerimage" src={food}/>
    </div>
  )
}

export default Header