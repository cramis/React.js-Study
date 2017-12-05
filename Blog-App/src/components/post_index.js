import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/index';

class PostIndex extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>Post Index</div>
        );
    }

}

export default connect(null, {fetchPosts})(PostIndex);