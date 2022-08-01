import React from "react";

class DummyPage extends React.Component {

    componentDidMount() {
        console.log("componentDidMount", this.props.name);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", this.props.name);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.props.name);
    }
    
    render() {
        return (
            <div>
                (this.prop.name)
            </div>
        )
    }
}

export default DummyPage;