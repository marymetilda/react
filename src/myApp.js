import React from "react";
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/HomePage';
import DummyPage from "./pages/DummyPage";

class MyApp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentSelected: 'home'
        }
    }

    handleMenuSelect = (value) => {
        console.log(value);
        this.setState({
            currentSelected: value
        })
    }

    getPage() {
        const {
            currentSelected
        } = this.state;

        switch(currentSelected) {
            case 'home':
                return <HomePage />
            case 'usage':
                return <DummyPage key="usage" name="Usage" />
            case 'settings':
                return <DummyPage key="settings" name="Settings" />
            case 'logout':
                return <DummyPage key="logout" name="Logout" />

        default:
            break;
        }
    }
    render() {
        return (
            <div>
                <div className='app'>
                    <Header onMenuSelect={this.handleMenuSelect} />
                    <div className='app-body'>
                        {this.getPage()}
                    </div>
                    <Footer />
                </div>,
            </div>
        )
    }
}

export default MyApp;