import axios from 'axios';
import { create as createUser } from './user';
import { hashHistory } from 'react-router';

/* ------------------    ACTIONS    --------------------- */

const SET    = 'SET_CURRENT_USER';
const REMOVE = 'REMOVE_CURRENT_USER';

/* --------------    ACTION CREATORS    ----------------- */

const set     = user => ({ type: SET, user });
const remove  = () => ({ type: REMOVE });

/* ------------------    REDUCER    --------------------- */
//
// const initialState = {
//     currentUser : null,
//     loggedIn: null
// }
export default function reducer (currentUser = null, action) {
    // const newState = Object.assign({}, initialState);
    switch (action.type) {

        case SET:
            // newState.currentUser = action.user;
            // newState.loggedIn = action.user.id;
            localStorage.setItem("userName", action.user.name);
            localStorage.setItem("userEmail", action.user.email);
            currentUser = action.user;
            return action.user;

        case REMOVE:
            // newState.currentUser = null;
            // newState.loggedIn = null;
            console.log("case remove");
            // let currentUser = localStorage.getItem("user");
            localStorage.setItem("userName", "");
            localStorage.setItem("userEmail", "");

            return null;

        default:
            return currentUser;
    }
}

/* ------------       DISPATCHERS     ------------------ */

/**
 * Dispatchers are just async action creators.
 * Action creators are supposed to emit actions.
 * Actions will be reduced to produce a new state.
 *
 * However, thunks can also do side effects, such as route to another location.
 * This could get fairly elaborate, by taking arguments as to where to go, or
 * whether to change routes at all. But we illustrate a simple case with some
 * composed dispatchers which also route to a specific page.
 *
 * If we wanted the calling code (component) to handle the result instead, we
 * would use the "simple" dispatcher and chain off the returned promise.
 * Components should probably know nothing about side effects, however.
 */

const resToData = res => res.data;

// a "simple" dispatcher which uses API, changes state, and returns a promise.
export const login = credentials => dispatch => {
    return axios.get(`/api/user/search/findByEmail?email=${credentials.email}`, credentials)
        .then(user => {
            console.log("user logged in ok? " , user.data);
            dispatch(set(user.data));
            return user.data;
        });
};

// a "composed" dispatcher which uses the "simple" one, then routes to a page.
export const loginAndGoToUser = credentials => dispatch => {
    dispatch(login(credentials))
        .then(user => {
            console.log('wht is this', user);
            //browserHistory.push(`/user/${user.name}`)
            // browserHistory.push(`/user/${user.name}`)
            // browserHistory.push(`/user/${user.data.name}`)
        })
        .catch(err => console.error('Problem logging in:', err));
};

export const signup = credentials => dispatch => {
    return axios(
        {
            method: 'post',
            url: '/api/recipes',
            data: credentials
        })
        .then(resToData)
        .then(user => {
            dispatch(createUser(user)); // so new user appears in our master list
            dispatch(set(user)); // set current user
            return user;
        });
};

export const signupAndGoToUser = credentials => dispatch => {
    dispatch(signup(credentials))
        // .then(user => browserHistory.push(`/user/${user.id}`))
        .catch(err => console.error('Problem signing up:', err));
};

export const retrieveLoggedInUser = () => dispatch => {
    axios.get('/api/user/')
        .then(res => dispatch(set(res.data._embeded.user)))
        .catch(err => console.error('Problem fetching current user', err));
};

// optimistic
export const logout = () => dispatch => {
    dispatch(remove());
};