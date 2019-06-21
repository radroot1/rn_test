export const HANDSHAKE = 'AppState/HANDSHAKE';
const DISMISS_UPDATE = 'AppState/DISMISS_UPDATE';
const DISMISS_BASKET_HINT = 'AppState/DISMISS_BASKET_HINT';
const CHANGE_CONNECTION_TYPE = 'AppState/CHANGE_CONNECTION_TYPE';
const PENDING = 'AppState/PENDING';
const REJECTED = 'AppState/REJECTED';

export const cachedState = {

};

// Initial state
const initialState = {
    ...cachedState,
    isError: false,
    isReady: false,

};


// Reducer
export const _state = (state = initialState, action = {}) => {
    const {type, payload, el, initialHandshakeData, ver} = action;
    switch (type) {
        case PENDING:
            state = {...state};
            state['isError'] = false;
            if (el) state[el + 'IsFetching'] = true;
            return state;

        default:
            return state;
    }
}
