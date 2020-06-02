import axios from 'axios';
import { apiPath } from '../../env';
import { fetchUserPending, fetchUserSuccess, fetchUserError } from '../actions/user-actions';

function fetchUser(username) {
    return dispatch => {
        dispatch(fetchUserPending());
        return axios.get(`${apiPath}user-posts/${username}`)
        .then(res => {
            console.log(res)
            let user = {
                username: res.data.username,
                name: res.data.name || '',
                about: res.data.about || '',
                img: res.data.img || ''
            }
            let posts = res.data.posts;
            dispatch(fetchUserSuccess(user, posts))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchUserError(err))
        })

    }
}

export default fetchUser;
