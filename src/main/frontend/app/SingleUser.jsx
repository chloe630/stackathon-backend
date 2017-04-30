import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class SingleUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
    }

    // componentDidMount() {
    //     let user = this.state;
    //     console.log('waaaa', user);
    //     axios.get(`/api/users/search/findByName?name=${user.name}`)
    //         .then(user => {
    //             console.log("this is a singleuser:",user.data);
    //             user = user.data;
    //             this.setState({ currentUser : user.data });
    //         });
    //     console.log("tada last one", this.state.currentUser);
    // }

    render(){
        console.log('this.state.currentUser', this.state);
        $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            }
        );
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
            </div>
        );
    }
}
