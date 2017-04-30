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
        this.onChangeIngredient = this.onChangeIngredient.bind(this);
    }

    componentDidMount () {
        console.log(this.state.ingredients);
    }

    onChangeIngredient(event) {
        let currentN = (this.state.ingredients.length > 0 )? this.state.ingredients.length : 0;
        let val = event.target.value;
        let updatedArr = this.state.ingredients.slice();
        updatedArr[currentN] = val;
        this.setState({ingredients: updatedArr});
    }

    onChangeAdd(event) {
        console.log(event.target.ingredients);
        let val = event.target.ingredients.value;
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
        const ingredients = this.state.ingredients;
        console.log("this.state.ingredients", ingredients);
        return (
            <div >
                <div className="row">
                    <form className = "col s12" onSubmit = { this.onChangeAdd } >
                        <div className = "row">
                            <div className = "input-field col s6">
                                <i className="material-icons prefix">mode_edit</i>
                                <button type = "submit" className="left btn-floating waves-effect waves-light red"><i className="material-icons">add</i></button>
                                <input onChange = {this.onChangeIngredient } id = "icon_prefix" name = "ingredients" type="text" className="validate form-control" required/>
                                <label> Ingredients! </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className = "row col m6">
                    <form >
                        <div className = "offset-s6 col s6">
                            {
                                (ingredients.length > 0) && (
                                    <table className="collection with-header highlight">
                                        <thead className="collection-header"><h4>Your Ingredients!</h4></thead>
                                        {
                                            ingredients.map(ingredient => (
                                                <tr className="collection-item"><th>{ ingredient }
                                                    <button className="btn-floating btn-large waves-effect waves-light red">
                                                        <i className="material-icons">remove</i>
                                                    </button></th></tr>

                                            ))
                                        }
                                        <button className="btn waves-effect waves-light" type="submit" name="action" ><Link to ="/recipes">Recipe</Link>
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