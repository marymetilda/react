import React, { useContext} from "react";
import { MyContext } from "../pages/mycontext";
import './label.css'
import Tooltip from "./tooltip";
import { useTooltip } from "../hooks/ourHooks";

function Label1(props) {
    const val = useContext(MyContext);
    
    const [showToolTip, setShowTooltip, labelRef, refObj] = useTooltip();


    const style = props.isActive ? { background: 'green' } : { background: 'orange' }
    if (val === false) {
        return null;
    }


    const handleMouseEnter = (evt) => {
        setShowTooltip(true);
    }

    const handleMouseLeave = () => {
        setShowTooltip(false);
    }



    return (
        <div className="list-label-item-container">
            <span
            ref={labelRef}
                onClick={() => {
                    props.onAction(props.isActive ? 'active' : 'non-active')
                }}
                className="list_label_item"
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {props.isActive ? 'Active' : 'Non Active'}

            </span>

            <Tooltip ref={refObj} showToolTip={showToolTip} />

        </div>
    );
}

export default Label1;