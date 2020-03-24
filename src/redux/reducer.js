import { LOGIN, LOGOUT } from './actions/auth-actions';
import { NEW_POST } from './actions/post-actions';
import { POSTS_FETCH_PENDING, POSTS_FETCH_SUCCESS, POSTS_FETCH_ERR } from './actions/post-actions';

const dummy = [
    {
        user: {
            username: "dvlavieri",
            img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67568428_10162145422450118_7285213189212471296_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=hjnOAxGLhb4AX_q0tBf&_nc_ht=scontent-sjc3-1.xx&oh=2ec69d356756e70fecbf7f37c481dcf5&oe=5E95CDA3"
        },
        timeStamp: "now",
        content: "this is a dummy post"
    },
    {
        user: {
            username: "philryan88",
            img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/s960x960/20786001_10155540373034598_880509366233875581_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=USsOwI8cYUoAX_r_eWG&_nc_ht=scontent-sjc3-1.xx&_nc_tp=7&oh=0bd8aba6b396980c87b116484a496904&oe=5E94F4E1"
        },
        timeStamp: "today",
        content: "this is also a dummy post"
    }
];

const dummyUser = {
    username: "dvlavieri",
    img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67568428_10162145422450118_7285213189212471296_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=hjnOAxGLhb4AX_q0tBf&_nc_ht=scontent-sjc3-1.xx&oh=2ec69d356756e70fecbf7f37c481dcf5&oe=5E95CDA3",
    about: "I love programming, reading, and cats. All posts are my own thinking, not my employer's"
}

const defaultState = {
    isLoggedIn: false,
    user: dummyUser,
    token: null,

    posts: dummy,
    postsFetching: false,
    errors: [],
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
            };
        case NEW_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts]
            };
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
            let errors = state.errors.push(action.error)
            return {
                ...state,
                postsFetching: false,
                errors: errors,
            }
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;