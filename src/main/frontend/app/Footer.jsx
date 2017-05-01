import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const style = {
            backgroundColor:'#F3F3F3',
        paddingTop: '10px',
        paddingBottom: '0px',
        position: 'fixed',
        bottom: '0',
        width: '100%'
        };
        return (
            <div>
                <footer className="page-footer #90caf9 blue lighten-3" style = { style } >
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Chloe Choi</h5>
                                <p className="grey-text text-lighten-4">Welcome to the Drinker's Heaven.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><Link to = "https://www.linkedin.com/in/chloe-c/" className="grey-text text-lighten-3">Linkedin</Link></li>
                                    <li><Link to= "https://github.com/chloe630" className="grey-text text-lighten-3">Github</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2017 Chloe Choi
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

