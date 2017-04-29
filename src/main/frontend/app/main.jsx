'use strict';

// React Imports
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import axios from 'axios';

// Root Imports
import Root from './Root';
import Home from './Home';
import Input from './Input';

import AllRecipes from './AllRecipes';
import SingleRecipe from './SingleRecipe';

import Login from './Login';
import SignUp from './SignUp';
import SingleUser from './SingleUser';

export const initialState = {
    users : [],
    currentUser: {}
};

const fetchAllUsers = () => (
    axios.get('/api/user/')
        .then(users => {
            initialState.users = users.data;
        })
);
const isLoggedIn = () => {
    if (initialState.currentUser == {}) return false;
    else return true;
    // if (!isEmpty(cUser)) return ;
};

const onLoginSubmit = event => {
    console.log("hit this!");
    const credentials = {
        email: event.target.email.value,
        password: event.target.password.value
    };
    console.log('credentials: ', credentials);
    axios.get(`/api/user/search/${credentials.email}`)
        .then(user => {
            if (!user)  initialState.currentUser = {};
            else initialState.currentUser = user;
        })
};

render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Root } onEnter = { fetchAllUsers } isLoggedIn = { isLoggedIn }>
            <Route path="/search" component = { Input } />
            <Route path="/recipes" component={ AllRecipes }/>
            <Route path="/recipes/:id" component={ SingleRecipe } />
            <Route path="/login" component={ Login } onLoginSubmit = { onLoginSubmit } login = { isLoggedIn }/>
            <Route path="/signup" component={ SignUp } />
            <Route path = "/user/:id" component={ SingleUser } />
            <IndexRoute component={ Home } />
        </Route>
    </Router>,
    document.getElementById('main')
);
