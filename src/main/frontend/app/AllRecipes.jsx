import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { YUMMLY_APP_ID, YUMMLY_APP_KEY } from './main';
import qs from 'qs';

export default class AllRecipes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios.get(`http://api.yummly.com/v1/api/recipes?_app_id=${YUMMLY_APP_ID}&_app_key=${YUMMLY_APP_KEY}&q=vodka`)
            .then(response => {
                response = response.data.matches;
                response.filter(function(obj) { return obj.attributes.course.includes("Cocktails"); } );
                this.setState({ recipes: response });

                for (let i = 0; i < response.length; i++) {
                    axios(
                        {
                            method: 'post',
                            url: '/api/recipes',
                            data: {
                                id: response[i].id,
                                name: response[i].recipeName,
                                content: response[i].ingredients.join(" "),
                                image: response[i].imageUrlsBySize[90]
                            }
                        }
                    );
                }
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.recipes && this.state.recipes.map(recipe => (

                            <div className="col s12 m7" key = {recipe.id}>
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src={ recipe.imageUrlsBySize[90] } />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content truncate">
                                            <span className="card-title #1976d2 blue-text text-darken-2">{ recipe.recipeName }</span>

                                            { recipe.ingredients && recipe.ingredients.map(ing => (
                                                <p>{ ing.charAt(0).toUpperCase() + ing.slice(1) }</p>
                                            )) }
                                        </div>
                                        <div className="card-action">
                                            <Link to = { `/recipes/${ recipe.id }` } className = "blue-text text-darken-2"> View Details </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
