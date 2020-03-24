import React, { Component } from React;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './edit.css';

import Container from '../../components/container/container';

class EditPage extends Component {

    render() {

        return (
            <Container>
                
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);