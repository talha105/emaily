import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Surveys} from "./index"
class Dashboard extends Component {
    render() {
        return (
            <div>
            <Surveys/>
            <div className="fixed-action-btn">
                <Link to="/newsurvey" className="btn-floating btn-large waves-effect waves-light indigo right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
            </div>
        );
    }
}

export default Dashboard;