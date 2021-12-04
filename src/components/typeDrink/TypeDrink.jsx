import React, { useEffect, useState } from "react";
import './TypeDrink.style.css';

import Drink from '../drink/Drink';


const TypeDrink = ({ data }) => {

    
    const hoursMinSecs = {minutes: 0, seconds: 10};
    const { minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[mins, secs], setTime] = useState([minutes, seconds]);
    
    const [escenario, setEscenario] = useState(0);
    
    const scenary = data.drinks[escenario]?.scenary ? data.drinks[escenario].scenary : data.drinks[0].scenary;
    // const timeScenary = data.drinks[escenario]?.time ? data.drinks[escenario].time : data.drinks[0].time;
    const dataDrinks = data.drinks[escenario]?.contain ? data.drinks[escenario].contain : data.drinks[0].contain;
    console.log(dataDrinks);

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
            <span>Escenario: {scenary}</span>
            <div className="primary-container-type-drink">
                {dataDrinks.map((elem, pos) => (
                    <div key={pos} className="container-type-drink">
                        <div>
                            <span className="style-title">{elem.type}</span>
                            <Drink drinks={elem.drinks}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-footer">

                <span className="styled-count">{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</span>
            </div>
        </>

    )
}

export default TypeDrink;