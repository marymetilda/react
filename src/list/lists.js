import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/simplelist"

let arr = [{
    id: 1,
    title: "Appoinment for October",
    descr: "The patient is resheduled to october",
    isActive: true
},
{
    id: 2,
    title: "Appoinment for November",
    descr: "The patient is resheduled to November",
    isActive: false
},
{
    id: 3,
    title: "Appoinment for December",
    descr: "The patient is resheduled to December",
    isActive: true
}]

class List extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: arr,
            activeState:'all'
        };
    }

    onListChange = (evt) => {

        const value = evt.target.value;
    

        this.setState({
            activeState: value
        });
    }

    handleDelete = (item) => {
        console.log('Delete', item);
        const newList = this.state.data.filter((element) => element.id !== item.id)

        this.setState({
            data: newList
        })
    }


    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        })
    }
    render() {

        const {
            data,
            activeState,
        } = this.state;

        const newList = data.filter((item) => {
                if(activeState === 'all'){
                    return true;
                }
                if(activeState === 'active'){
                    return item.isActive === true;
                }
                if(activeState === 'non-active') {
                    return item.isActive === false;
                }
                return false;
            });
    

        return (
            <Tools onAction={this.onListChange} >
               <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
            </Tools>
        )
    }
}

export default List;