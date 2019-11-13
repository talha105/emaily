import React, { Component } from 'react';

class Survey extends Component {
    render() {
        const {title,yes,no,subject,body,dateSent}=this.props.survey
        return (
            <div>
         <div className="card  darken-1">
        <div className="card-content black-text">
    <span className="card-title">{title}</span>
        <p>{body}</p>
        </div>
        <div className="card-action">
        <a>Yes: {yes}</a>
        <a>No: {no}</a>
        <span className="right">Sent Date: {new Date(dateSent).toLocaleDateString()}</span>
        </div>
      </div>
            </div>
        );
    }
}

export default Survey;