import React, { useEffect, useState } from "react";
import './TypeDrink.style.css';

import Drink from '../drink/Drink';


const TypeDrink = ({ data }) => {

    
    const hoursMinSecs = {minutes: 2, seconds: 40};
    const { minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[mins, secs], setTime] = useState([minutes, seconds]);
    
    const [escenario, setEscenario] = useState(0);
    
    const scenary = data.drinks[escenario]?.scenary ? data.drinks[escenario].scenary : data.drinks[0].scenary;
    const dataDrinks = data.drinks[escenario]?.contain ? data.drinks[escenario].contain : data.drinks[0].contain;

    const tick = () => {   
        if (mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([59, 59]);
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };


    const reset = () => {
        setTime([parseInt(minutes), parseInt(seconds)]);
        if(data.drinks[escenario + 1]){
            setEscenario(escenario + 1);
        } else {
            setEscenario(0);
        }
        console.log("TERMINO");
    }

    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    return (
        <>
            <span className="style-scenary">{scenary}</span>
            <div className="primary-container-type-drink">
                {dataDrinks.map((elem, pos) => (
                    <div key={pos} className="container-type-drink">
                        <div>
                            <span className="style-title">{elem.type}</span>
                            <Drink drinks={elem.drinks} type={elem.type} time={[mins, secs]}/>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default TypeDrink;