import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

export default class AllRecipes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        axios.get('/recipes')
            .then(recipes => {
                recipes = recipes.data;
                this.setState({ recipes });
            })
    }

    // textCutting(txt) {
    //     if
    // }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.recipes && this.state.recipes.map(recipe => (

                            <div className="col s12 m7">
                                <h2 className="header">{ recipe.name }</h2>
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src={ recipe.image } />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>{ recipe.content }</p>
                                        </div>
                                        <div className="card-action">
                                            <Link to = { `/recipes/${ recipe.id }` }> How to make it? </Link>
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
//
// export default connect(
//     // state => ({ recipes: state.recipe.recipes }),
//     // {}
// )(AllRecipes);
