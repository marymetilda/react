import React from "react";
import './label.css'


class Label extends React.Component {
    render() {
        const props = this.props;
        const style = props.isActive ? {background: 'green'} : {background: 'orange'};
        return <span onClick={props.onAction} className="list_label_item" style={style}>{props.isActive ? 'Active' : 'Non Active'}</span>
    }
}

export default Label;