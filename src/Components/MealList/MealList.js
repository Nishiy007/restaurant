import React from 'react';
import "./MealList.css";

function MealList() {
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
                            <form className="mealform">
                                <h4>Amount</h4>
                                <input type="number" value="1" />
                                <button className="btn">+Add</button>
                            </form>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default MealList