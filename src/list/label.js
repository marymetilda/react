import React, { useContext } from "react";
import './label.css'
import { MyContext, MyNewContext } from "../pages/HomePage";



function Label(props) {
    const val = useContext(MyContext);
    const val2 = useContext(MyNewContext);

    console.log('******', val2);

    const style = props.isActive ? { background: 'green' } : { background: 'orange' };
    if (val === false) {
        return null;
    }
    return <span
        onClick={() => {
            props.onAction(props.isActive ? 'active' : 'non-active');
        }}
        className="list_label_item"
        style={style}>{props.isActive ? 'Active' : 'Non Active'}</span>
    
}

export default Label;