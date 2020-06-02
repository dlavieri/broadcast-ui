export const NEW_POST_PENDING = "NEW_POST_PENDING";
export const NEW_POST_SUCCESS = "NEW_POST_SUCCESS";
export const NEW_POST_ERR = "NEW_POST_ERR";

export function newPostPending () {
    return {
        type: NEW_POST_PENDING,
    }
}

export function newPostSuccess () {
    return {
        type: NEW_POST_SUCCESS,
    }
}

export function newPostErr (err) {
    return {
        type: NEW_POST_ERR,
        error: err
    }
}

export const POSTS_FETCH_PENDING = "POSTS_FETCH_PENDING";
export const POSTS_FETCH_SUCCESS = "POSTS_FETCH_SUCCESS";
export const POSTS_FETCH_ERR = "POSTS_FETCH_ERR";

export function fetchPostsPending() {
    return {
        type: POSTS_FETCH_PENDING,
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: POSTS_FETCH_SUCCESS,
        posts: posts
    }
}

export function fetchPostsError(err) {
    return {
        type: POSTS_FETCH_ERR,
        error: err,
    }
}