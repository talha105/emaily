import React, { Component } from 'react';
import {Survey} from "../index";
import {connect} from "react-redux";
import * as actions from "../../actions"
class Surveys extends Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }
    renderContent=()=>{
        return this.props.surveys.reverse().map((survey)=>{
            return <Survey key={survey._id} survey={survey}/>
        })
    }
    render() {
        console.log(this.props.surveys)
        return (
            <div className="container">
            {this.renderContent()}
            </div>
        );
    }
}
function mapStateToProps({surveys}){
    return{
        surveys
    }
}

export default connect(mapStateToProps,actions)(Surveys);