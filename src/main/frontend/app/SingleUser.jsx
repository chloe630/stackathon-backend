import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class SingleUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.currentUser, {
            user: {
                name: localStorage.getItem("userName"),
                email: localStorage.getItem("userEmail")
            }
        });
        $(document).ready(function(){
            $('.collapsible').collapsible();
        });
    }

    render(){
        console.log("im a single user!");
        return (

            (localStorage.getItem("uerName") !== "") && (

                <ul className="collapsible" data-collapsible="accordion">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            )


        );
    }
}

