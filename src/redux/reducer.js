

const defaultState = {
    isLoggedIn: false,
    user: null,
    token: null,
};

const rootReducer = (state=defaultState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                token: action.token
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                token: null,
            }
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;