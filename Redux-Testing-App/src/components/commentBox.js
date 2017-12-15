import React, {Component} from 'react';

export default class CommentBox extends Component{
    render(){
        return (
            <div className='comment-box'>
                <textarea></textarea>
                <button>커멘트 추가</button>
            </div>
        );
    }
}