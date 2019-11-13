import React,{Component} from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {
Header,
Landing,
Dashboard,
NewSurvey
} from '../components/index'



class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path='/' component={Header}/>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/survey' component={Dashboard}/>
                    <Route path="/newsurvey" component={NewSurvey}/>
                </Router>
            </div>
        );
    }
}

export default Routes 