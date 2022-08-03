import React, { useState, useEffect, useReducer } from "react";
import "./usage.css";
import UsageReducer, {TYPE} from "../reducers/usageReducer";


const initialState = {
    value: 0
}
function Usage() {

  const [state, dispatch] = useReducer(UsageReducer, initialState);

  const [boom, setBoom] = useState(false);

  useEffect(() => {
    console.log("EFFECT");

    // setBoom(false);
    // const id = setTimeout(() => {
    //     setBoom(true)
    // }, value * 1000);
    return () => {
      console.log("CLEAN UP");

      // clearTimeout(id);
    };
  }, []);

  return (
    <div>
      <div className="usage">
        <div className="usage-item" style={{ background: state.color }}>
          <button
            onClick={() => {
              dispatch({
                type: TYPE.CHANGE_VALUE,
                payload: 1
              });
            }}
          >
            Increment
          </button>
          <label>{state.value}</label>
          <button
            onClick={() => {
             dispatch({
                type: TYPE.CHANGE_VALUE,
                payload: -1
             });
            }}
          >
            Decrement
          </button>
        </div>

        <button
          onClick={() => {
           dispatch({
            type: TYPE.CHANGE_COLOR,
            payload: 'green'
           });
          }}
        >
          Green
        </button>
        <button
          onClick={() => {
            dispatch({
                type: TYPE.CHANGE_COLOR,
                payload: 'blue'
            });
          }}
        >
          Blue
        </button>
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
