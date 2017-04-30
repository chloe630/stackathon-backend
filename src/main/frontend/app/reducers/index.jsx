import { combineReducers } from 'redux';
import users from './user';
// import stories from './stories';
import currentUser from './auth';

export default combineReducers({ users, currentUser });