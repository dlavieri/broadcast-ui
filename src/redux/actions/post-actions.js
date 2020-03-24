export const NEW_POST = "NEW_POST";

export function newPost (user, content) {
    return {
        type: NEW_POST,
        post: {
            user: user,
            timeStamp: new Date().toString(),
            content: content,
        }
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