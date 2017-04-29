import React from 'react';
/*
 Every reducer has its own initial state.

 lets not get confused! all the states are going into store,
 since 'store.js' will be the "brain"--!!!
 */
const initial_state_name = {};

/*                      if state exists the state gets passed
 otherwise initialState will be passed
 */
export default function (state = initial_state_name, action) {
    const newState = Object.assign({}, state);

    return newState;
}