import axios from 'axios';
import { apiPath } from '../../env';
import { fetchPostsPending, fetchPostsSuccess, fetchPostsError } from '../actions/post-actions';

function fetchHomePosts() {
    return dispatch => {
        dispatch(fetchPostsPending());
        return axios.get("http://localhost:8080/home-posts")
        .then(res => {
            console.log(res)
            dispatch(fetchPostsSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchPostsError(err));
        })
    }
} 

export default fetchHomePosts;