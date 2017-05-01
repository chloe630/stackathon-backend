import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loginAndGoToUser } from './reducers/auth';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {},
            loggedin: false
        };
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.setStateOnLogin = this.setStateOnLogin.bind(this);
    }

    setStateOnLogin(event){

        this.onLoginSubmit(event);
        let currentU = {
            name: localStorage.getItem("userName"),
            email: localStorage.getItem("userEmail")
        };
        this.setState({ user : currentU });
    }

    onLoginSubmit(event) {
        event.preventDefault();
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        this.props.login(credentials);
        this.setState({ loggedin : true });

    }

    render() {

        return (
            <div className="signin-container">
                <div className="buffer local">
                    <form onSubmit={ this.setStateOnLogin }>
                        <div className="form-group">
                            <label>email</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                required
                            />
                        </div>
                        {
                            (this.state.loggedin)?
                                (<button type = "submit" className = "btn btn-large btn-block btn-primary"><Link to = {'/'} > You are logged in! Let's go find your drinks!</Link></button>)
                            :
                                ( <button type="submit" className="btn btn-large btn-block btn-primary">Log in!</button>)

                        }
                    </form>
                </div>
            </div>
        );
    }


}

const mapState = () => ({ message: 'Log in' });

const mapDispatch = { login: loginAndGoToUser };

export default connect(mapState, mapDispatch)(Login);
