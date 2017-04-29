import React from 'react';
import initialState from './main';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        // this.onLoginSubmit = this.onLoginSubmit.bind(this)
    }
    // onLoginSubmit = event => {
    //     console.log("hit this!");
    //     const credentials = {
    //         email: event.target.email.value,
    //         password: event.target.password.value
    //     };
    //     console.log('credentials: ', credentials);
    //     axios.get(`/api/user/${credentials.email}`)
    //         .then(user => {
    //             if (!user)  initialState.currentUser = {};
    //             else initialState.currentUser = user;
    //         })
    // };

    render() {
        const onLoginSubmit = this.props.routes[1].onLoginSubmit;
        const logginCheck = this.props.routes[1].login;
        console.log("onLoginSubmit? : ", logginCheck());
        return (
            <div className="signin-container">
                <div className="buffer local">
                    <form onSubmit={ onLoginSubmit }>
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

