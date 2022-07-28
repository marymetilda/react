import React from "react";
import Label from "./1";
import './listitem.css';


class Listitem extends React.Component {
        render(){
    return (
    <div className='list-item'>
            <hr />
            <div className='list-title'>
              <h4>My Title One1111</h4>
            </div>
            <div className='list-descr'>
              This is a very big description
            </div>
            <div className='list-label'>
            <Label />
            <Label />
            <Label />
            <Label />
            <Label />
            </div>
          </div>
    )
  }
}

  export default Listitem;
  