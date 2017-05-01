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


const resToData = res => res.data;

export const login = credentials => dispatch => {
    return axios.get(`/api/user/search/findByEmail?email=${credentials.email}`, credentials)
        .then(user => {
            console.log("user logged in ok? " , user.data);
            dispatch(set(user.data));
            return user.data;
        });
};

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
            dispatch(createUser(user));
            dispatch(set(user));
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

export const logout = () => dispatch => {
    dispatch(remove());
};