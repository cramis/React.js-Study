import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPosts} from '../actions/index';

class PostIndex extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){

        
        return this.props.posts.map((post) => {
            
            return (
                <li className="list-group-item" key={post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
            );
        });
    }

    render(){
        if(!this.props.posts){
            return <div>loading...</div>;
        }
        
        return (
            <div>
                <div className="text-xs-right">
                    <Link to='/posts/new' className="btn btn-primary" >새로운 포스트 쓰기</Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        posts : state.posts.all
    };
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);