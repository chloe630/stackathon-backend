import React from 'react';
import { connect } from 'react-redux';
import{ Link, browserHistory } from 'react-router';
import { logout as logOutUser } from './reducers/auth';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.renderLoginSignup = this.renderLoginSignup.bind(this);
        this.renderLogout = this.renderLogout.bind(this);
    }

    renderLoginSignup() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/signup" activeClassName="active">signup</Link>
                </li>
                <li>
                    <Link to="/login" activeClassName="active">login</Link>
                </li>
            </ul>
        );
    }


    renderLogout() {
        const name = this.props.currentUser.name || this.props.currentUser.email;
        return (
            <div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <button className="navbar-btn btn btn-default"> {name}'s page
                            <Link to = {`/user/${name}`} data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></Link>
                        </button>
                        <button
                            className="navbar-btn btn btn-default"
                            onClick={this.props.logout}>
                            logout {name}
                        </button>
                    </li>
                </ul>
            </div>
        );
    }

    render() {
        console.log("currentUser",this.props.currentUser);
        console.log("props: ", this.props);
        return (
            <nav>
                <div className="nav-wrapper #90caf9 blue lighten-3">
                    <Link to = "/" className="brand-logo">Drinker's heaven</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/topRecipes">Top 10 Drinks</Link></li>
                        <li><Link to="/search">Find my cocktail!!</Link></li>
                        <li>
                            {
                                this.props.currentUser ? this.renderLogout() : this.renderLoginSignup()
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapState = ({currentUser}) => ({currentUser});

const mapDispatch = dispatch => ({
    logout: () => {
        dispatch(logOutUser());
        // browserHistory.push('/'); // removed to demo logout instant re-render
    }
});

export default connect(mapState, mapDispatch)(Navbar);
