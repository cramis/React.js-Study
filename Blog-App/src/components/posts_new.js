import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import _ from 'lodash';

import {createPosts} from '../actions/index';

const FIELDS = {
    title : {
        type: 'input',
        label : '제목'
    }, 
    categories : {
        type: 'input',
        label : '카테고리'
    }, 
    content :{
        type: 'textarea',
        label : '내용'
    }
}

class PostsNew extends Component{

    static contextTypes = {
        router : PropTypes.object
    };

    renderField(fieldConfig, field){
        const fieldHelper = this.props.fields[field];

        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
            <label>{fieldConfig.label}</label>
            <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
            <div className="text-help">
                { fieldHelper.touched ?  fieldHelper.error : ''}
            </div>
        </div>
        );


    }

    onSubmit(props){
        this.props.createPosts(props)
        .then(()=>{
            // 제출 성공시 루트 경로로 이동
            this.context.router.push('/');
        });
    }

    render(){
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>새로운 포스트 작성</h3>


                {_.map(FIELDS, this.renderField.bind(this))}


                <button type="submit" className="btn btn-primary">작성완료</button>
                <Link to="/" className="btn btn-danger">취소</Link>

            </form>
        );
    }
}

function validate(values){
    const errors = {};

    // if(!values.title){
    //     errors.title = "제목을 입력해주세요.";
    // }

    // if(!values.categories){
    //     errors.categories = "카테고리를 입력해주세요.";
    // }

    // if(!values.content){
    //     errors.content = "내용을 입력해주세요.";
    // }

    _.each(FIELDS, (fieldValue, fieldName) => {
        if(!values[fieldName]){
            errors[fieldName] = `${fieldValue.label} 부분을 입력해주세요.`;
        }
    });

    return errors;
}


export default reduxForm({
    form : 'PostsNewForm',
    fields : _.keys(FIELDS), //['title', 'categories', 'content'],
    validate
}, null, {createPosts})(PostsNew);