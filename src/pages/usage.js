import React, { useState, useEffect } from "react";
import "./usage.css"

function Usage() {


    const [value, setVlaue] = useState(0);
    const [color, setColor] = useState('white');
    const [boom, setBoom] = useState(false);


    useEffect(() => {

        console.log('EFFECT');

        // setBoom(false);
        // const id = setTimeout(() => {
        //     setBoom(true)
        // }, value * 1000);
        return () => {

            console.log('CLEAN UP');

            // clearTimeout(id);
        }

    }, []);

    return (
        <div>
        <div className="usage">
            <div className="usage-item" style={{ background: color }}>
                <button onClick={() => {
                    setVlaue((state) => {
                        return state + 1;
                    })
                }}>Increment</button>
                <label>{value}</label>
                <button onClick={() => {
                    setVlaue(value - 1)
                }}>Decrement</button>
            </div>


            <button onClick={() => {
                setColor('green');
            }}>Green</button>
            <button onClick={() => {
                setColor('blue');
            }}>Blue</button>
            </div>

            {/* {
                boom && value ? (
                    <div className="boom">
                        <span>
                            BOOM 
                        </span>
                    </div>
                ) : null
            } */}

        </div>
    );
}

export default Usage;
