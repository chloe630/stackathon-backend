import React from 'react'
import { Link } from 'react-router'

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        };
        this.onChangeAdd = this.onChangeAdd.bind(this);
        this.onChangeRemove = this.onChangeRemove.bind(this);
    }

    onChangeAdd(event) {
        let val = event.target.value.toLowerCase();
        console.log("add: ", val);
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
            this.setState({ ingredients: updatedArr });
        }
    }

    render() {
        console.log("now im here..", this.props);
        console.log("this.state.ingredients", this.state.ingredients);
        return (
            <div>
                <div className="row">
                    <form >
                        <div className="row">
                            <div className="input-field col s6">
                                <label>Ingredients!
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea className="materialize-textarea validate" />
                                    <a onChange = { this.onChangeAdd } className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className = "row">
                    <div className = "offset-s6 col s6">
                            {
                                (this.state.ingredients.length > 0) && (
                        <ul className="collection with-header">
                                    <li className="collection-header"><h4>Your Ingredients!</h4></li>
                        </ul>
                                )
                            }
                            {
                                this.state.ingredients.map(ingredient => (
                                    <li className="collection-item"><div>{ ingredient }<a onChange = { this.onChangeRemove } disable = { this.state.ingredients.length < 1 } className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">remove</i></a></div></li>
                                ))

                            }

                        <button className="btn waves-effect waves-light" type="submit" name="action" ><Link to ="/recipes">Recipe</Link>
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }


}