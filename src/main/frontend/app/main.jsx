'use strict';


// React Imports
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import axios from 'axios';

import { Provider } from 'react-redux';
import store from './store';

export const YUMMLY_APP_KEY = "6fe0f5fefb8be21234e16dce6627e9ec";
export const YUMMLY_APP_ID = "ba1e5d92";
import Routes from './Routes';


export const initialState = {
    users : [],
    currentUser: {},
    ingredients: []
};

// const fetchAllUsers = () => (
//     axios.get('/api/user/')
//         .then(users => {
//             initialState.users = users.data;
//         })
// );
// const isLoggedIn = () => {
//     if (initialState.currentUser == {}) return false;
//     else return true;
//     // if (!isEmpty(cUser)) return ;
// };

// const onLoginSubmit = event => {
//     console.log("hit this!");
//     const credentials = {
//         email: event.target.email.value,
//         password: event.target.password.value
//     };
//     console.log('credentials: ', credentials);
//     axios.get(`/api/user/search/${credentials.email}`)
//         .then(user => {
//             if (!user)  initialState.currentUser = {};
//             else initialState.currentUser = user;
//         })
// };

render(
    <Provider store={ store }>
        <Routes />
    </Provider>,
    document.getElementById('main')
);
