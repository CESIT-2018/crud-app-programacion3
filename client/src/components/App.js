import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './dashboard.css'
import Header from './Header';
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <LeftMenu/>
                        <MainContainer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;