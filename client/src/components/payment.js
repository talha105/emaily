import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import {connect} from "react-redux"
import * as actions from "../actions"
class Payment extends Component {
    render() {
        const {handlePayment}=this.props
        return (
            <div>
                <StripeCheckout
                amount={500}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={(token)=>handlePayment(token)}
                >
                    <button className="btn">Add Credits</button>
                </StripeCheckout>
            </div>
        );
    }
}

export default connect(null, actions)(Payment);