import React, { Component } from 'react';
import Img from '../mawingu.png';
import '../App.css';
    
class Login extends Component {
    render() {
        return (
            <div class="mt-5 d-flex justify-content-center">
                <div class="mt-5 p-3 login-container shadow">
                    <div class="login-header">
                        <img src={Img} alt="Mawingu Logo" />
                        <h1 class="my-3">Admin Login</h1>
                    </div>
                    <div class="login-body">
                        <form action="#" method="post">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-phone" aria-hidden="true"></i></span>
                                </div>
                                <input type="tel" class="form-control" placeholder="Phone" />
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                </div>
                                <input type="password" class="form-control is-invalid" placeholder="Password" />
                                <div class="invalid-feedback">
                                    Password is required
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}        

export default Login;