import React from "react";
import ListItem from "./listItem";
import Tools from "../components/Tools";

let arr = [{
    title: "Appoinment for October",
    descr: "The patient is resheduled to october",
    isActive: true
},
{
    title: "Appoinment for November",
    descr: "The patient is resheduled to November",
    isActive: false
},
{
    title: "Appoinment for December",
    descr: "The patient is resheduled to December",
    isActive: true
}]

class List extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: arr
        };
    }

    onListChange(evt){
        console.log(evt.target.value)
        const value = evt.target.value
        const newList = arr.filter((item) => {
            if(value === 'all'){
                return true;
            }
            else if(value === 'active'){
                return item.isActive === true;
            }
            else if(value === 'non-active') {
                return item.isActive === false;
            }
            else {return false;}
        });

        console.log(newList);

        this.setState({
            data: newList
        })
    }

    render() {
        return (
            <Tools onAction={this.onListChange.bind(this)}>
                <div className='app-list'>
                    {
                        this.state.data.map((obj) => {
                            return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
                        })
                    }
                </div>
            </Tools>
        )
    }
}

export default List;