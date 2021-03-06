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
    }

    componentDidMount (){
        let cu = localStorage.getItem("userName");
        axios.get(`/api/user/search/findByName?name=${cu}`)
            .then(user => user.data)
            .then (user => {
                // console.log("got here, axios get req", user);
                let fav = user.favoriteDrinks.slice();
                this.setState({favorite: fav});
            });
    }
    render(){
        console.log("im a single user!");
        return (
            <div>
                {
                    (localStorage.getItem("userName") !== "") &&
                    (
                        <ul className="collection">

                            <li className="collection-item avatar">
                                <img src="images/yuna.jpg" alt="" className="circle"/>
                                <span className="title">{this.state.user.name}</span>
                                <p>{this.state.user.name} </p>
                                <p>{this.state.user.email}</p>

                                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                            </li>
                            <li>
                                <h5 className="title">My favorite drinks</h5>
                            </li>

                            {
                                this.state.favorite&&this.state.favorite.map(recipe => (
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">star</i>
                                        <span className="title">{recipe.name}</span>
                                        {
                                            recipe.content.split(" ").map(ing => (
                                                <div>
                                                    <p>{ ing.charAt(0).toUpperCase() + ing.slice(1) }</p>
                                                </div>
                                                )
                                            )
                                        }
                                        <a href="#!" className="secondary-content"><img src={recipe.image} className="material-icons"/></a>
                                    </li>
                                ))
                            }

                        </ul>
                    )
                }
            </div>

        );
    }

}



