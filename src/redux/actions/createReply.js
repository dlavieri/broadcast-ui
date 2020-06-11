import axios from 'axios';
import { apiPath } from '../../env';
import { newReplyPending, newReplySuccess, newReplyErr } from './post-actions';

function createReply(username, content, post_id) {
    return dispatch => {
        dispatch(newReplyPending());
        return axios.post(`${apiPath}reply/${post_id}`, { username, content})
            .then(res => {
                if (res.status === 200) {
                    dispatch(newReplySuccess())
                }
            })
            .catch(err => dispatch(newReplyErr(err)))
    }
}

export default createReply;