export const HANDSHAKE = 'AppState/HANDSHAKE';
const ADD_USERS = 'AppState/ADD_USERS';

export const cachedState = {
    users:[]
};

// Initial state
const initialState = {
    ...cachedState,
    isError: false,
    isReady: false,

};

// Action creators
export const addUsers = (users) => async dispatch => {
    try {
        dispatch({type: ADD_USERS, users});
        return users;
    } catch (error) {
        return Promise.reject(error);
    }
};


// Reducer
export const _state = (state = initialState, action = {}) => {
    const {type, users} = action;
    switch (type) {
        case ADD_USERS:
            state = {...state};
            state['users'] = users;
            return state;

        default:
            return state;
    }
}
