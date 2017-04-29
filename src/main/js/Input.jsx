import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        };
        this.onChangeAdd = this.onChangeAdd.bind(this)
        this.onChangeRemove = this.onChangeRemove.bind(this)
    }

    onChangeAdd(event) {
        let val = event.target.value.toLowerCase();
        let updatedArr = this.state.ingredients.slice();
        updatedArr.push(val);
        this.setState({ ingredients: updatedArr });
    }

    onChangeRemove() {
        let val = event.target.value.toLowerCase();
        let updatedArr = this.state.ingredients.slice();
        let index = updatedArr.indexOf(val);
        if (index > 0) {
            updatedArr.splice(index, 1);
            this.setState({ ingredients: updatedArr })
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s6">
                        <label className="active">Ingredients
                            <input id="ingredient" type="text" className="validate" />
                            <a onChange = { this.onChangeAdd } className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                        </label>

                    </div>
                </div>

                <ul className="collection with-header">
                    <li className="collection-header"><h4>Your Ingredients!</h4></li>
                    {
                        (this.state.ingredients.length()> 0) && this.state.ingredients.map(ingredient => (
                            <li className="collection-item"><div>{ ingredient }<a onChange = { this.onChangeRemove } className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">remove</i></a></div></li>
                        ))
                    }

                </ul>

                <button className="btn waves-effect waves-light" type="submit" name="action" disabled= ><Link to ="./AllRecipesContainer">Recipe</Link>
                    <i className="material-icons right">send</i>
                </button>
            </div>
        );
    }


}