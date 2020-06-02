import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './stream.css';
import fetchHomePosts from '../../redux/actions/fetchHomePosts';

import Container from '../../components/container/container';
import Feed from '../../components/feed/feed';
import Input from '../../components/input/input';


 
class StreamPage extends Component {

    componentDidMount() {
        this.props.fetchHomePosts();
    }

    render() {

        return (
            <Container>
                <Input />
                <Feed />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.isLoggedIn,
      user: state.user,
      token: state.token
  
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchHomePosts: fetchHomePosts
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(StreamPage);