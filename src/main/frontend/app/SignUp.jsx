import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { signupAndGoToUser } from './reducers/auth';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
        this.state = {
            user : {}
        }
    }

    render() {
        return (
            <div className="signin-container">
                <span>Sign up</span>
                <div className="buffer local">
                    <form onSubmit={this.onSignupSubmit}>
                        <div className="form-group">
                            <label>name</label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                required
                            />
                        </div>
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
                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        );
    }

    onSignupSubmit(event) {
        event.preventDefault();
        const credentials = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
            // favoriteDrinks:[]
        };
        axios(
            {
                method: 'post',
                url: '/api/user',
                data: {
                    id: credentials.name,
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password
                }
            }
        ).then(response => this.state.user = credentials.name);
    };

}



const mapState = () => ({ message: 'Sign up' });

const mapDispatch = { signup: signupAndGoToUser };

export default connect(mapState, mapDispatch)(Signup);
