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
    }

    onChangeIngredient(event) {
        let currentN = (this.state.ingredients.length > 0 )? this.state.ingredients.length : 0;
        let val = event.target.value.toLowerCase() + "";
        // let updatedArr = this.state.ingredients.slice();
        // updatedArr[currentN] = val.toLowerCase();
        this.setState({ingredient: val});
    }

    onChangeAdd(event) {
        event.preventDefault();
        console.log(event.target.ingredients);
        console.log("add: ", this.state.ingredient);
        let updatedArr = this.state.ingredients.slice();
        updatedArr.push(this.state.ingredient);
        let currentIngredients =localStorage.getItem("ingredients");
        if (currentIngredients == "") {
            localStorage.setItem("ingredients", this.state.ingredient);
        }
        else {
            localStorage.setItem("ingredients", currentIngredients+" "+this.state.ingredient);

        }
        console.log(localStorage);
        this.state.ingredient = "";
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
                <div className="row">
                    <form className = "col s12" >
                        <div className = "row">
                            <div className = "input-field col s6">
                                <i className="material-icons prefix">mode_edit</i>
                                <button onClick = { this.onChangeAdd } type = "submit" className="right btn-floating waves-effect waves-light red"><i className="material-icons">add</i></button>
                                <input onChange = {this.onChangeIngredient } id = "icon_prefix" name = "ingredients" type="text" className="validate form-control" required/>
                                <label> Ingredients! </label>
                            </div>
                        </div>
                        <div className = "offset-s6 col s6">
                            {
                                (ingredients[0] !== "") && (
                                    <table className="collection with-header highlight">
                                        <thead className="collection-header"><h4>Your Ingredients!</h4></thead>
                                        {
                                            ingredients.map(ingredient => (
                                                <tr className="collection-item"><th className="ingredient">{ ingredient }
                                                    <button onClick = {this.onChangeRemove} className="btn-floating btn-large waves-effect waves-light red">
                                                        <i className="material-icons">remove</i>
                                                    </button></th></tr>

                                            ))
                                        }
                                        <button className="btn waves-effect waves-light" type="submit" name="action" ><Link to ="/recipes">Recipe</Link>
                                            <i className="material-icons right">send</i>
                                        </button>
                                        <button onClick = { this.clearLocalStorage } className="btn waves-effect waves-light" type="submit" >clear ingredients!
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </table>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }


}