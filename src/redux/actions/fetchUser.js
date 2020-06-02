import axios from 'axios';
import { apiPath } from '../../env';
import { fetchUserPending, fetchUserSuccess, fetchUserError } from '../actions/user-actions';

function fetchUser(username) {
    return dispatch => {
        dispatch(fetchUserPending());
        return axios.get(`${apiPath}user-posts/${username}`)
        .then(res => {
            console.log(res.data);

        })
        .catch(err => {
            dispatch(fetchUserError(err))
        })

    }
}

export default fetchUser;
