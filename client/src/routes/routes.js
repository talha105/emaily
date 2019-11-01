import React,{Component} from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {
Header,
Landing
} from '../components/index'



class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path='/' component={Header}/>
                    <Route exact path='/' component={Landing}/>
                </Router>
            </div>
        );
    }
}

export default Routes 