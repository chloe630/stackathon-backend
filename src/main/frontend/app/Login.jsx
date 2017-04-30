import React from 'react';
import { connect } from 'react-redux';
import { loginAndGoToUser } from './reducers/auth';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : ""
        };
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.setStateOnLogin = this.setStateOnLogin.bind(this);
    }

    setStateOnLogin(event){

        this.onLoginSubmit(event);
        this.setState({ user : document.cookie.split("user=")[1] });
    }

    onLoginSubmit(event) {
        event.preventDefault();
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        this.props.login(credentials);
        this.setState({ loggedIn: true });

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
                        <button type="submit" className="btn btn-block btn-primary">Log in!</button>
                    </form>
                </div>
            </div>
        );
    }


}

const mapState = () => ({ message: 'Log in' });

const mapDispatch = { login: loginAndGoToUser };
// // equivalent to:
// const mapDispatch = (dispatch) => {
//   return {
//     login: function (credentials) {
//       dispatch(loginAndGoToUser(credentials));
//     }
//   };
// };

export default connect(mapState, mapDispatch)(Login);
