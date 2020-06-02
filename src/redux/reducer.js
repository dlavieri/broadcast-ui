import { LOGIN, LOGOUT } from './actions/auth-actions';
import { NEW_POST_PENDING, NEW_POST_SUCCESS, NEW_POST_ERR } from './actions/post-actions';
import { POSTS_FETCH_PENDING, POSTS_FETCH_SUCCESS, POSTS_FETCH_ERR } from './actions/post-actions';


const dummyUser = {
    username: "dummy-user22",
    img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67568428_10162145422450118_7285213189212471296_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=hjnOAxGLhb4AX_q0tBf&_nc_ht=scontent-sjc3-1.xx&oh=2ec69d356756e70fecbf7f37c481dcf5&oe=5E95CDA3",
    about: "I love programming, reading, and cats. All posts are my own thinking, not my employer's"
}

const defaultState = {
    isLoggedIn: false,
    user: dummyUser,
    token: null,

    posts: [],
    postsFetching: false,
    postPending: false,
    userData: { username: '', bio: '', img: 'https://cdn.osxdaily.com/wp-content/uploads/2014/07/users-and-groups-icon-mac.png' },
    userFetching: false,
    errors: [],
};

const rootReducer = (state=defaultState, action) => {
    let errors = state.errors;
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
            };
        case NEW_POST_PENDING:
            return {
                ...state,
                postPending: true
            };
        case NEW_POST_SUCCESS:
            return {
                ...state,
                postPending: false
            };
        case NEW_POST_ERR:
            return {
                ...state,
                postPending: false,
                errors: errors.push(action.error)
            }
        case POSTS_FETCH_PENDING:
            return {
                ...state,
                postsFetching: true,
            };
        case POSTS_FETCH_SUCCESS:
            return {
                ...state,
                postsFetching: false,
                posts: action.posts,
            };
        case POSTS_FETCH_ERR:
            return {
                ...state,
                postsFetching: false,
                errors: errors.push(action.error),
            }
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;