// import axios from 'axios';
//
// /* -----------------    ACTIONS     ------------------ */
//
// const INITIALIZE    = 'INITIALIZE_RECIPES';
// const CREATE        = 'CREATE_RECIPE';
// export const REMOVE = 'REMOVE_RECIPE';
// const UPDATE        = 'UPDATE_RECIPE';
//
//
// /* ------------   ACTION CREATORS     ------------------ */
//
// const init   = recipes => ({ type: INITIALIZE, recipes });
// export const create = recipes => ({ type: CREATE, recipes });
// const remove = recipes    => ({ type: REMOVE, recipes });
// const update = recipes  => ({ type: UPDATE, recipes });
//
//
// export default function reducer (recipes = [], action) {
//     switch (action.type) {
//
//         case INITIALIZE:
//             return action.recipes;
//
//         case CREATE:
//             return [action.recipe, ...recipes];
//
//         case REMOVE:
//             return recipes.filter(recipe => recipe.id !== action.id);
//
//         case UPDATE:
//             return recipes.map(recipe => (
//                 action.recipe.id === recipe.id ? action.recipe : recipe
//             ));
//
//         default:
//             return recipes;
//     }
// }
//
//
//
// export const fetchIngredients = () => dispatch => {
//
//     axios.get('/api/search/search/')
//         .then(res => dispatch(init(res.data)));
// };
//
// // optimistic
// export const removeUser = id => dispatch => {
//     dispatch(remove(id));
//     axios.delete(`/api/recipe/${id}`)
//         .catch(err => console.error(`Removing recipe: ${id} unsuccesful`, err));
// };
//
// export const addUser = recipe => dispatch => {
//     axios.post('/api/recipe', recipe)
//         .then(res => dispatch(create(res.data)))
//         .catch(err => console.error(`Creating recipe: ${recipe} unsuccesful`, err));
// };
//
// export const updateUser = (id, recipe) => dispatch => {
//     axios.put(`/api/recipe/${id}`, recipe)
//         .then(res => dispatch(update(res.data)))
//         .catch(err => console.error(`Updating recipe: ${recipe} unsuccesful`, err));
// };