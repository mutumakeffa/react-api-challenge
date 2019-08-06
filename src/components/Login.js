import React, { Component } from 'react';
import Img from '../mawingu.png';
import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { LoginUser } from  '../actions/loginAction';

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            phone: "",
            password: ""
        };
    
    }

    handleChange = (e) => {
        this.setState(
            {[e.target.name]: e.target.value }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
            phone: this.state.phone,
            password: this.state.password
        };
        

        this.props.LoginUser(userData);
        
    }



    render() {
        return (
            <div className="mt-5 d-flex justify-content-center">
                <div className="mt-5 p-3 login-container shadow">
                    <div className="login-header">
                        <img src={Img} alt="Mawingu Logo" />
                        <h1 className="my-3">Admin Login</h1>
                    </div>
                    <div className="login-body">
                        <form action="#" method="post" onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                </div>
                                <input type="tel" className="form-control" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                                </div>
                                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                <div className="invalid-feedback">
                                    Password is required
                                </div>
                            </div>
                            <button type="submit" className ="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}        


Login.propTypes = {
    LoginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };


const mapPropsToState = state => ({
    auth: state.auth
});

export default connect(mapPropsToState, {LoginUser})(Login);