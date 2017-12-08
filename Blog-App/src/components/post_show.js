import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { showPost, deletePost } from '../actions/index';

class PostShow extends Component{

    static contextTypes = {
        router : PropTypes.object
    };

    componentWillMount(){
        this.props.showPost(this.props.params.id );
    }

    deletePost(){
        this.props.deletePost(this.props.params.id)
        .then(()=>{
            // 제출 성공시 루트 경로로 이동
            this.context.router.push('/');
        });
    }
    

    render(){
        if(!this.props.post){
            return <div>loading...</div>
        }

        return (
            <div>
                <h2>{this.props.post.title}</h2>
                <h6>카테고리 : {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
                <Link to='/'>목록으로...</Link>
                <button className="btn btn-danger" onClick={this.deletePost.bind(this)}>포스트 삭제</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        post : state.posts.post
    }
}


export default connect(mapStateToProps, {showPost, deletePost})(PostShow);