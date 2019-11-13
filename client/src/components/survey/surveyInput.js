import React, { Component } from 'react';

class SurveyInput extends Component {
    render() {
        const {label,type,input,meta:{touched,error}} =this.props
        return (
            <div>
                <label>
                    {label}
                </label>
                <input style={{marginBottom:5}} type={type} {...input}/>
                <div className="red-text" style={{marginBottom:20}}>
                {touched && error}
                </div>
                
            </div>
        );
    }
}

export default SurveyInput;