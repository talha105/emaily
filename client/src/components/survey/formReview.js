import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions";
import {withRouter} from "react-router-dom"
class FormReview extends Component {
    render() {
        const {newSurvey,onBack,history}=this.props
        return (
            <div className="container">
                <h3>Please Review the Form</h3>
                <div>
                    <label>
                        Title
                    </label>
                    <div>
                        {newSurvey.title}
                    </div>
                </div>
                <div>
                    <label>
                        Subject
                    </label>
                    <div>
                        {newSurvey.subject}
                    </div>
                </div>
                <div>
                    <label>
                        Body
                    </label>
                    <div>
                        {newSurvey.body}
                    </div>
                </div>
                <div>
                    <label>
                        Emails
                    </label>
                    <div>
                        {newSurvey.recipients}
                    </div>
                </div>
                <button onClick={()=>onBack()} className="btn yellow darken-3 white-text left">
                    Back
                </button>
                <button onClick={()=>{this.props.sendSurvey(newSurvey,history)}} className="btn green darken-3 white-text right">
                    Send Survey
                </button>
            </div>
        );
    }
}
function mapStateToProps({form}){
    return{
        newSurvey:form.newSurvey.values
    }
}
export default connect(mapStateToProps,actions)(withRouter(FormReview));