import React, { Component } from 'react';
import {SurveyInput} from "../index";
import {reduxForm,Field} from "redux-form"
import {Link} from "react-router-dom"
import validateEmails from "../../utils/validateEmails"
class SurveyForm extends Component {
    
    renderFields=()=>{
        return (
        <div>
            <Field type="text" name="title" label="Tile" component={SurveyInput}/>
            <Field type="text" name="subject" label="Subject" component={SurveyInput}/>
            <Field type="text" name="body" label="Body" component={SurveyInput}/>
            <Field type="text" name="recipients" label="Emails" component={SurveyInput}/>
        </div>
        )
    }
    render() {
        return (
            <div className="container">
                <h3 className='center'>Create New Survey</h3>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveyFormSubmit) }>
                {this.renderFields()}
                <Link to="/survey"><button className="waves-effect waves-light btn red white-text left">Cancel</button></Link>
                <button className="waves-effect waves-light btn right" type="submit">Next<i className="material-icons right">check</i></button>
                </form>
            </div>
        );
    }
}
function validate(value){
    const error={};
    error.recipients=validateEmails(value.recipients || '')
    if(!value.title){
        error.title=`you must provide title`
    }
    if(!value.subject){
        error.subject=`you must provide subject`
    }
    if(!value.body){
        error.body=`you must provide body`
    }
    if(!value.recipients){
        error.recipients=`you must provide email`
    }
    
    return error
}
export default reduxForm({
    validate,
    form:'newSurvey',
    destroyOnUnmount:false
})(SurveyForm);