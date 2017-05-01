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
        let recipe = this.props.params;
        let newRecipe = this.state.recipe;
        newRecipe.rating = newRecipe.rating + 1;
        console.log("newRecipe.id: ", newRecipe);
        axios(
            {
                method: 'post',
                url: '/api/recipes',
                data: {
                    id: String(recipe.id),
                    name: String(newRecipe.name),
                    content: String(newRecipe.content),
                    image: String(newRecipe.image),
                    rating: Number(newRecipe.rating)
                }
            }
        );
        this.setState({
            recipe: newRecipe
        });
        // console.log(this.state.recipe);
    }

    onClickMinus(event) {
        let recipe = this.props.params;
        let newRecipe = this.state.recipe;
        newRecipe.rating = newRecipe.rating - 1;
        axios(
            {
                method: 'post',
                url: '/api/recipes',
                data: {
                    id: recipe.id,
                    name: newRecipe.name,
                    content: newRecipe.content,
                    image: newRecipe.image,
                    rating: newRecipe.rating
                }
            }
        );
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
        let recipeContent = String(recipe.content);
        // console.log(recipeContent.split(" "));
        return (
            <div>
                <div className = "row">
                    <div className = "col m12">
                        <div className = "col s12 valign-wrapper">
                            <img className="left responsive-img" src = { recipe.image } />

                            <div className="section container">
                                <h4>{ recipe.name }</h4>
                                <h5>Ingredients</h5>
                                { recipeContent.split(" ").map(ing => (
                                    <p>{ ing.charAt(0).toUpperCase() + ing.slice(1) }</p>
                                )) }
                                <p>Likes: { recipe.rating }</p>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className = "col m12">
                        <a onClick = { this.onClickPlus } className=" waves-effect waves-light btn"><i className="material-icons left">thumb_up</i>Like it!</a>
                        <a onClick = { this.onClickMinus } className=" waves-effect waves-light btn"><i className="material-icons left">call_received</i>Meh.. </a>
                        <a
                            disabled = {this.state.alreadyInFavs}
                            onClick = {this.onClickFavorite} className=" waves-effect waves-light btn"><i className="material-icons left">star</i>Save this recipe!</a>

                    </div>
                </div>
            </div>
        );
    }


}
