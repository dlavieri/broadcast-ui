const FETCH_USER_PENDING = "FETCH_USER_PENDING";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERR = "FETCH_USER_ERR";

export function fetchUserPending() {
    return {
        type: FETCH_USER_PENDING,
    }
}

export function fetchUserSuccess(userData, posts) {
    return {
        type: FETCH_USER_SUCCESS,
        userData: userData,
        posts: posts,
    }
}

export function fetchUserError(err) {
    return {
        type: FETCH_USER_ERR,
        error: err
    }
}