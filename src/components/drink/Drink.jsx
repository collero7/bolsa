import React, { useState } from "react";
import './Drink.style.css';


const Drink = ({ drinks }) => {

    console.log("DRINKS", drinks);

    return (
        <ul className="ul-style">
            {drinks.map((elem, pos) => (
                <li key={pos} className="li-style">
                    <div style={{ color: ` ${elem.status === 1 ? '#2CF87C' : elem.status === -1 ? 'red' : 'orange'}`}} className="container-elements">
                        <span>{elem.drink}</span>
                        <span>{elem.price}€{elem.status === 1 ? '⯅' : elem.status === -1 ? '⯆' : '⯈'}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Drink;