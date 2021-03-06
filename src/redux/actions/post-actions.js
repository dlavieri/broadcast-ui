export const NEW_POST_PENDING = "NEW_POST_PENDING";
export const NEW_POST_SUCCESS = "NEW_POST_SUCCESS";
export const NEW_POST_ERR = "NEW_POST_ERR";

export function newPostPending () {
    return {
        type: NEW_POST_PENDING,
    }
}

export function newPostSuccess (post) {
    return {
        type: NEW_POST_SUCCESS,
        post: post
    }
}

export function newPostErr (err) {
    return {
        type: NEW_POST_ERR,
        error: err
    }
}

export const NEW_REPLY_PENDING = "NEW_REPLY_PENDING";
export const NEW_REPLY_SUCCESS = "NEW_REPLY_SUCCESS";
export const NEW_REPLY_ERR = "NEW_REPLY_ERR";

export function newReplyPending () {
    return {
        type: NEW_REPLY_PENDING,
    }
}

export function newReplySuccess (post_id, reply) {
    return {
        type: NEW_REPLY_SUCCESS,
        reply: reply,
        post_id: post_id
    }
}

export function newReplyErr (err) {
    return {
        type: NEW_REPLY_ERR,
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

