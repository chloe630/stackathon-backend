import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class SingleUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
    }

    render(){
        $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            }
        );
            console.log("im a single user!");
        return (

            <div>
                <ul id="slide-out" className="side-nav">
                    <li><div className="userView">
                        <div className="background">
                            <img src="images/office.jpg"/>
                        </div>
                        <a href="#!user"><img className="circle" src="images/yuna.jpg"/></a>
                        <a href="#!name"><span className="white-text name">John Doe</span></a>
                        <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"/></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <button className="navbar-btn btn btn-default"> {name}'s page></button>
            </div>
        );
    }
}
