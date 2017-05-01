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
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
        this.onChangeIngredient = this.onChangeIngredient.bind(this);
    }

    clearLocalStorage() {
        localStorage.setItem("ingredients", "");
        this.setState( { ingredients: [] } );
    }

    onChangeIngredient(event) {
        let currentN = (this.state.ingredients.length > 0 )? this.state.ingredients.length : 0;
        let val = event.target.value.toLowerCase() + "";
        // let updatedArr = this.state.ingredients.slice();
        // updatedArr[currentN] = val.toLowerCase();
        this.setState({ingredient: val});
    }

    onChangeAdd(event) {
        console.log(event.target.ingredients);
        console.log("add: ", this.state.ingredient);
        let updatedArr = this.state.ingredients.slice();
        if(updatedArr.includes(this.state.ingredient) || this.state.ingredient == "" || this.state.ingredient === undefined) {
            return;
        }
        updatedArr.push(this.state.ingredient);
        let currentIngredients =localStorage.getItem("ingredients");
        if (currentIngredients == "") {
            localStorage.setItem("ingredients", this.state.ingredient);
        }
        else {
            localStorage.setItem("ingredients", currentIngredients+" "+this.state.ingredient);

        }
        console.log(localStorage);
        this.setState({ ingredients: updatedArr });
    }

    onChangeRemove(event) {
        let val = $(event.target).closest('.ingredient').text().split("remove")[0];
        let currentIngredients = localStorage.getItem("ingredients").split(" ");
        let index = currentIngredients.indexOf(val);
        currentIngredients.splice(index, 1);
        console.log("removed localStorage: ", currentIngredients);
        localStorage.setItem("ingredients", currentIngredients.join(" "));
        this.setState({ ingredients: currentIngredients });
    }

    render() {
        if (localStorage.getItem("ingredients") == null) {
            localStorage.setItem("ingredients", "");
        }
        let ingredients = localStorage.getItem("ingredients").split(" ");
        console.log("localStorage ingredients", ingredients);
        return (
            <div >
                <div className="row valign-wrapper">
                    <form className = "col s12 valign-wrapper" >
                        <div className = "col s6">
                            <div className = "input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <button onClick = { this.onChangeAdd } type = "submit" className="right btn-floating waves-effect waves-light red"><i className="material-icons">add</i></button>
                                <input onChange = {this.onChangeIngredient } id = "icon_prefix" name = "ingredients" type="text" className="validate form-control" required/>
                                <label> Add Ingredient! </label>
                            </div>
                        </div>
                        <div className = "col s6">
                            {
                                (ingredients[0] !== "") && (
                                    <ul className="collection with-header highlight">
                                        <li className="collection-header"><h4>Your Ingredients!</h4></li>
                                        {
                                            ingredients.map(ingredient => (
                                                <li className="collection-item"><div className="ingredient">{ ingredient }
                                                    <a onClick = {this.onChangeRemove} className="secondary-content">
                                                        <i className="material-icons">remove</i>
                                                    </a></div></li>

                                            ))
                                        }
                                    </ul>
                                )
                            }
                            <button className="left btn waves-effect waves-light white-text" type="submit"
                                    name="action"><Link to="/recipes" className="white-text">Recipe</Link>
                                <i className="material-icons right">send</i>
                            </button>
                            <button onClick={ this.clearLocalStorage }
                                    className="red right white-text btn waves-effect waves-light" type="submit">
                                clear ingredients!
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }


}