import React, { useContext, useState } from 'react';
import "./MealList.css";
import CartContext from '../../Store/Cart-Context';


function MealList() {
    const cartctx=useContext(CartContext)
    const [amounts,setAmounts]=useState({});
    const mealItem = [
        {
            id: 1,
            name: "Sushi",
            description: "Finest fish and veggies",
            price: 22.99,
        },
        {
            id: 2,
            name: "Schnitzel",
            description: "A German specialty!",
            price: 16.5,
        },
        {
            id: 3,
            name: "Barbecue Burger",
            description: "America, raw, meaty",
            price: 12.99,
        },
        {
            id: 4,
            name: "Green Bowl",
            description: "Healthy...and green...",
            price: 16.0,
        },
    ];
    const addCartItemHandler = (item) => {
        cartctx.addItem({
          id: item.id,
          name: item.name,
          amount: +amounts[item.id] || 1,
          price: item.price,
        });
      };
    
      const amountChangeHandler = (itemId, newAmount) => {
        setAmounts((prevAmounts) => ({
          ...prevAmounts,
          [itemId]: newAmount,
        }));
      };
    
    return (
        <div className="meal" >
            {
                mealItem.map((item, index) => {
                    return (
                        <div className="mealcontainer" >
                            <div>
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                                <h3 className="price">${item.price}</h3>
                            </div>
                            <form className="mealform"  onSubmit={(e)=>e.preventDefault()}>
                                <h4>Amount</h4>
                                <input type="number" defaultValue={amounts[item.id] || 1}
                  onChange={(e) => amountChangeHandler(item.id, e.target.value)}/>
                                <button className="btn"  onClick={(e)=>addCartItemHandler(item)}>+Add</button>
                            </form>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default MealList