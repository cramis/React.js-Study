import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';

import {createPosts} from '../actions/index'

class PostsNew extends Component{

    static contextTypes = {
        router : PropTypes.object
    };

    onSubmit(props){
        this.props.createPosts(props)
        .then(()=>{
            // 제출 성공시 루트 경로로 이동
            this.context.router.push('/');
        });
    }

    render(){
        const {fields : {title, categories, content}, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>새로운 포스트 작성</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>제목</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        { title.touched ?  title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>카테고리</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        { categories.touched ?  categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>본문</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        { content.touched ?  content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">작성완료</button>
                <Link to="/" className="btn btn-danger">취소</Link>

            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "제목을 입력해주세요.";
    }

    if(!values.categories){
        errors.categories = "카테고리를 입력해주세요.";
    }

    if(!values.content){
        errors.content = "내용을 입력해주세요.";
    }

    return errors;
}


export default reduxForm({
    form : 'PostsNewForm',
    fields : ['title', 'categories', 'content'],
    validate
}, null, {createPosts})(PostsNew);