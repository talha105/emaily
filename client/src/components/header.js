import React, { Component } from 'react';
import {
    Payment
} from './index'
import {connect} from "react-redux";
import * as actions from '../actions'
import {Link} from "react-router-dom"
class Header extends Component {
    componentDidMount(){
        this.props.fetchUser()
      }
      renderContent=()=>{
          switch(this.props.authReducer){
            case null:
                return <li>Loading</li>
            case false:
                return <li><a href='/auth/google'>Login With Google</a></li>
            default:
                return [
                    <li key="1"><Payment/></li>,
                    <li key="3" style={{margin:'0px 10px'}}>credits {this.props.authReducer.credit}</li>,
                    <li key="2"><a href='/api/logout'>Logout</a></li>
                ]

          }
      }
    render() {
        const {authReducer}=this.props
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                    <Link to={authReducer? '/survey': '/'} className="brand-logo left" style={{marginLeft:30}}>Logo</Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
function mapStateToProps({authReducer}){
    return{
      authReducer
    }
  }
export default connect(mapStateToProps,actions)(Header);