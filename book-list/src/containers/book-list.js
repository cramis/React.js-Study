import React, {Component} from 'react';
import {connect} from 'react-redux';

import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

    getBookList(){
        return this.props.books.map((book)=>{
                return (
                    <li 
                    onClick={() => this.props.selectBook(book)}
                    key={book.title} 
                    className="list-group-item">
                        {book.title}
                    </li>
                );
            });
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.getBookList()}
            </ul>
        );
    }
}

// reducer에서 state 값을 props쪽으로 넘김
function mapStateToProps(state){
    return { books : state.books}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook : selectBook},dispatch);
}

// 리액트-리덕스 간의 연결고리를 만들어서 리턴함
export default connect(mapStateToProps, mapDispatchToProps)(BookList);