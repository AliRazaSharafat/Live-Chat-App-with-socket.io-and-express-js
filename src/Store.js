//Context API
import React, { createContext, useReducer } from 'react';
import io from 'socket.io-client';

const initialState = {
    general: [
        { from: 'Ali', msg: 'Hii' },
        { from: 'Umair', msg: 'Welcome' },
        { from: 'Ahmad', msg: 'Hello' }
    ],
    topic2: [
        { from: 'Raza', msg: 'Hii' },
        { from: 'Sharafat', msg: 'Welcome' },
        { from: 'Alam', msg: 'Hello' }
    ],
}


function reducer(state, action) {
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {

            }
        default:
            return state;
    }
}

export const CTX = createContext();

let socket;

const Store = props => {
    if (!socket) {
        socket = io(':3001');
    }

    const reduceHook = useReducer(reducer, initialState);
    return (
        <CTX.Provider value={reduceHook}>
            {props.children}
        </CTX.Provider>
    )
}

export default Store;