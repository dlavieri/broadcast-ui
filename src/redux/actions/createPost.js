import axios from 'axios';
import { apiPath } from '../../env';
import { newPostPending, newPostSuccess, newPostErr } from './post-actions';

function createPost(username, content) {
    return dispatch => {
        dispatch(newPostPending());
        console.log(username+" "+content)
        return axios.post(`${apiPath}new-post`, { username, content})
            .then(res => {
                if (res.status === 200) {
                    dispatch(newPostSuccess())
                }
            })
            .catch(err => dispatch(newPostErr(err)))
    }
}

export default createPost;