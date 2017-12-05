import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import {createPosts} from '../actions/index'

class PostsNew extends Component{
    render(){
        const {fields : {title, categories, content}, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPosts)}>
                <h3>새로운 포스트 작성</h3>
                <div className="form-group">
                    <label>제목</label>
                    <input type="text" className="form-control" {...title} />
                <div className="form-group">
                    <label>카테고리</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>본문</label>
                    <textarea className="form-control" {...content} />
                </div>

                <button type="submit" className="btn btn-primary">작성완료</button>

                </div>
            </form>
        );
    }
}



export default reduxForm({
    form : 'PostsNewForm',
    fields : ['title', 'categories', 'content']
}, null, {createPosts})(PostsNew);