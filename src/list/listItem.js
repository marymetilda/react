import React from "react";
import Label from "./1";
import './listitem.css';



  function ListItem(props) {
    
    const {
      title,
      descr,
      isActive
    } = props;

    return (
      <div className='list-item'>
        <hr />
        <div className='list-title'>
          <h4>{title}</h4>
        </div>
        <div className='list-descr'>
          {descr}
        </div>
        <div className='list-label'>
          <Label onAction={() => {
            console.log('parent clicked');
          }} isActive={isActive}/>
        </div>
      </div>
    )
  }


export default ListItem;
