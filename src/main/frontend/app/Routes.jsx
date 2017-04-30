import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './Root';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import SingleUser from './SingleUser';
import AllRecipes from './AllRecipes';
import SingleRecipe from './SingleRecipe';
import Input from './Input';
// import { fetchUsers } from './redux/users';
// import { fetchStories, fetchStory } from './redux/stories';
import { retrieveLoggedInUser } from './reducers/auth';


const Routes = ({ fetchInitialData, onStoryEnter }) => (
    <Router history={ browserHistory }>
        <Route path="/" component={ Root } >
            <Route path="/search" component = { Input } />
            <Route path="/recipes" component={ AllRecipes }/>
            <Route path="/recipes/:id" component={ SingleRecipe } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ SignUp } />
            <Route path = "/user/:id" component={ SingleUser } />
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