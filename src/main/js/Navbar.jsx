import React from 'react'
import { connect } from 'react-redux'
import{ Link, browserHistory } from 'react-router'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Drinker's heaven</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="...">Top 10 Drinks</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default connect(
    state => ({}),
    {}
)(Navbar);