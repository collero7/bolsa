/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Drink.style.css';
import img_pub from '../../assets/logo_pub_3.svg';
import { faCaretDown, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const Drink = ({ drinks, type, time, changeScenary }) => {

    const [ blink, setBlink ] = useState(true);

    useEffect(() => {
        const blk = setInterval(() => {
            setBlink(!blink);
        }, 800);
        return () => clearInterval(blk);
    })

    const handleChangeScenary = () => {
        if(changeScenary) changeScenary();
    }


    return (
        <>  
            <ul className="ul-style">
                {drinks.map((elem, pos) => (
                    <React.Fragment key={pos}>
                        <li className="li-style">
                            <div style={{ color: ` ${elem.status === 1 ? '#2CF87C' : elem.status === -1 ? '#FF2525' : 'orange'}`}} className="container-elements">
                                {(blink && elem.blink) && (
                                    <>
                                    <span>{elem.drink}</span>
                                    <div>
                                        <span>{elem.price}€</span>
                                        <span className="styled-icon">{elem.status === 1 ? <FontAwesomeIcon icon={faCaretUp} /> : elem.status === -1 ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}</span>
                                    </div>
                                    </>
                                )}
                                {(!elem.blink) && (
                                    <>
                                    <span>{elem.drink}</span>
                                    <div>
                                        <span>{elem.price}€</span>
                                        <span className="styled-icon">{elem.status === 1 ? <FontAwesomeIcon icon={faCaretUp} /> : elem.status === -1 ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}</span>
                                    </div>
                                    </>
                                )}
                            </div>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
            {type === 'VODKA' && (
                <div className="container-footer">
                    <img onClick={handleChangeScenary} className="styled_logo" src={img_pub} />
                    <span className="styled-count">{`${time[0].toString().padStart(2, '0')}:${time[1].toString().padStart(2, '0')}`}</span>
                </div>
            )}
        </>
    )
}

export default Drink;