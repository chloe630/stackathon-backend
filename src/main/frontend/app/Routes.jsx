import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store'
import Root from './Root';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import SingleUser from './SingleUser';
import AllRecipes from './AllRecipes';
import SingleRecipe from './SingleRecipe';
import SearchRecipesResult from './SearchRecipesResult';
import Input from './Input';
// import { fetchUsers } from './redux/users';
// import { fetchStories, fetchStory } from './redux/stories';
import { retrieveLoggedInUser } from './reducers/auth';

// const fetchUserData = () => {
//     store.dispatch(retrieveLoggedInUser());
// }


const Routes = ({ fetchInitialData, onStoryEnter }) => (
    <Router history={ hashHistory }>
        <Route path="/" component={ Root } >
            <Route path="/search" component = { Input }/>
            <Route path="/recipes" component = { SearchRecipesResult } />
            <Route path="/topRecipes" component={ AllRecipes }/>
            <Route path="/recipes/:id" component={ SingleRecipe } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ SignUp } />
            <Route path = "/user/:name" component={ SingleUser } />
            <IndexRoute component={ Home } />
        </Route>
    </Router>
);

const mapProps = null;

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
    dispatch(retrieveLoggedInUser());
dispatch(fetchUsers());
dispatch(fetchStories());
},
onStoryEnter: (nextRouterState) => {
    const storyId = nextRouterState.params.id;
    dispatch(fetchStory(storyId));
}
});

export default connect(mapProps, mapDispatch)(Routes);