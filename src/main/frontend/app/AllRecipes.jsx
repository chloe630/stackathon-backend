import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class AllRecipes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        axios.get('/api/recipes')
            .then(recipes => {
                recipes = recipes.data._embedded.recipes;
                this.setState({ recipes });
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.recipes && this.state.recipes.map(recipe => (

                            <div className="col s12 m7" key = {recipe.id}>
                                <h2 className="header #1976d2 blue-text text-darken-2">{ recipe.name }</h2>
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src={ recipe.image } />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content truncate">
                                            <p>{ recipe.content }</p>
                                        </div>
                                        <div className="card-action">
                                            <Link to = { `/recipes/${ recipe.id }` } className = "blue-text text-darken-2"> How to make it? </Link>
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
