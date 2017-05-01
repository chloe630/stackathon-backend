import React from 'react';
import axios from 'axios';


export default class SingleRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props, {
            recipe: {}
        });
        this.onClickPlus = this.onClickPlus.bind(this);
        this.onClickMinus = this.onClickMinus.bind(this);
        this.onClickFavorite = this.onClickFavorite.bind(this);
    }

    componentDidMount() {
        let recipe = this.props.params;
        axios.get(`/api/recipes/search/findRecipeById?id=${recipe.id}`)
            .then(recipe => {
                recipe = recipe.data;
                this.setState({ recipe });
            });
    }
    onClickPlus(event) {
        let newRecipe = this.state.recipe;
        newRecipe.rating = newRecipe.rating + 1;
        this.setState({
            recipe: newRecipe
        });
        console.log(this.state.recipe);
    }

    onClickMinus(event) {
        let newRecipe = this.state.recipe;
        newRecipe.rating = newRecipe.rating - 1;
        this.setState({
            recipe: newRecipe
        });
    }

    onClickFavorite(event) {
        let thisRecipe = this.state.recipe;
        let currentUser = localStorage.getItem("userName");
        console.log("recipeUser?: ", currentUser);
        console.log("recipeId?: ",thisRecipe);
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios.get(`/api/user/search/findByName?name=${currentUser}`)
            .then(user => user.data)
            .then (user => {
                console.log("got here, axios get req", user);
                var fav;
                if (user.favoriteDrinks == null) {
                    fav = [];
                }
                else {

                    fav = user.favoriteDrinks.slice();
                }
                let alreadyInFavs = false;
                for (let i = 0; i < fav.length; i++) {
                    if(fav[i].name == thisRecipe.name) {
                        alreadyInFavs = true;
                    }
                }
                if (!alreadyInFavs) {
                    fav.push(thisRecipe);
                    console.log("fav: ", fav);
                    axios(
                        {
                            method: 'post',
                            url: '/api/user',
                            data: {
                                id: user.name,
                                name: user.name,
                                email: user.email,
                                password: user.password,
                                favoriteDrinks: fav
                            }
                        }
                    );
                }
                else{
                    console.log("recipe already in favs");
                    this.setState( { alreadyInFavs: true })
                }
            })
    }

    render() {
        const recipe = this.state.recipe;
        console.log(recipe);
        return (
            <div>
                <div className = "row">
                    <div className = "col m12">
                        <div className = "col m6">
                            <div className="section">
                                <h5>{ recipe.name }</h5>
                                <p>{ recipe.content }</p>
                                <p>{ recipe.rating }</p>
                            </div>
                        </div>
                        <div className = "col m6">
                            <div className = "container">
                                <img src = { recipe.image } />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className = "col m12">
                        <button onClick = { this.onClickPlus } className="btn waves-effect waves-light btn-block btn-primary">Like it!</button>
                        <button onClick = { this.onClickMinus } className="btn waves-effect waves-light btn-block btn-primary">Meh.. </button>
                        <button
                            disabled = {this.state.alreadyInFavs}
                            onClick = {this.onClickFavorite} className="btn waves-effect waves-light btn-block btn-primary">Save this recipe!</button>

                    </div>
                </div>
            </div>
        );
    }


}
