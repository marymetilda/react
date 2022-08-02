import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/simplelist";

import {
    MyContext,
    MyNewContext
} from "./mycontext"

class HomePage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeState:'all',
            message: '',
            showLabel: true
        };
    }

    componentDidMount() {
        console.log('componentDidMount')
        fetch('data.json')
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            this.setState({
                data: data
            });
        })
    }

    componentDidUpdate = (prevProps, prevStates) => {
        if (prevStates.message !== this.state.message){
            this.setState({
                message: 'Message'
            });
        }
       
    } 

    componentWillUnmount() {
        console.log('componentWillUnmount');
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

    handleShowLabel = (event) => {
        this.setState({
            showLabel: event.target.checked
        });
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
            <div>
                <div>
                <input checked={this.state.showLabel} onChange={this.handleShowLabel} type="checkbox"></input> Show Label
                </div>


            <MyNewContext.Provider value={100}>
            <MyContext.Provider value={this.state.showLabel}>

             <Tools labelValue={activeState} onAction={this.onListChange} >
               <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
            </Tools>

            </MyContext.Provider>
            </MyNewContext.Provider>

            </div>
        )
    }
}

export default HomePage;

