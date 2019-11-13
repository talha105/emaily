import React, { Component } from 'react';
import {SurveyForm,FormReview} from "../index"
import {reduxForm} from "redux-form"
class NewSurvey extends Component {
    constructor(){
        super()
        this.state={
            reviewForm:false
        }    
    }

    renderContent(){
        if(this.state.reviewForm){
            return <FormReview onBack={()=>this.setState({reviewForm:false})}/>
        }
        return <SurveyForm onSurveyFormSubmit={()=>this.setState({reviewForm:true})}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form:'newSurvey'
})(NewSurvey);