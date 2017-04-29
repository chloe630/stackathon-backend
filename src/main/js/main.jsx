'use strict';

// React Imports
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';

// Root Imports
import Root from './Root';
import Home from './Home';

import AllRecipes from './AllRecipes';
import SingleRecipe from './SingleRecipe';

import UserLoggin from './UserLoggin';
import SingleUser from './SingleUser';




render(
    <Provider store={ store }>
        <Router history={ hashHistory }>
            <Route path="/" component={ Root }>
                <Route path="/recipes" component={ AllRecipes } >
                    <Route path="/:id" component={ SingleRecipe } />
                </Route>
                <Route path="/user" component={ UserLoggin } >
                    <Route path = "/:id" component={ SingleUser } />
                </Route>
                <IndexRoute component={ Home } />
            </Route>
        </Router>
    </Provider>,

    document.getElementById('main')
);
