import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
    }

    render() {
        const { message } = this.props;
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
        axios.get(`/api/user/search/findByEmail?email=${credentials.email}`)
            .then(user => {
                console.log('whaaa');
                if (Number(user.status) === 404) {
                    axios.post('/api/user/', credentials)
                        .then(user => (
                            <div>something</div>
                        ))

                }
                else {
                    return (<div>noooooo</div>)
                }
            });
    };
}

