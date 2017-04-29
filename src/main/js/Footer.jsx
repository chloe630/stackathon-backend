import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Chloe Choi</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/chloe-c/">Linkedin</a></li>
                                    <li><a className="grey-text text-lighten-3" href="https://github.com/chloe630">Github</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">whatever....</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
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


const mapProps = null;

const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Footer)

// 'use strict';
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import AllPuppies from './AllPuppies';
//
// ReactDOM.render(
//     <div className="container flexbox-container">
//         <div className="jumbotron">
//             <AllPuppies />
//         </div>
//     </div>,
//     document.getElementById('app')
// );
