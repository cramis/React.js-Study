import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWhether} from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            term : ""
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchBoxSubmit = this.onSearchBoxSubmit.bind(this);

    }

    onTextChange(event){
        this.setState({term : event.target.value});
        console.log(this.state.term);
    }

    onSearchBoxSubmit(event){
        event.preventDefault();
        this.props.fetchWhether(this.state.term);
        this.setState({term : ''});
    }

    render(){
        return (
            <form className="input-group" onSubmit={this.onSearchBoxSubmit}>
                <input
                    placeholder="조회하려는 도시를 입력하세요."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onTextChange}
                    />
                <span className="input-group-btn">
                    <button type="submit"
                        className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators({fetchWhether}, dispatch);
}


export default connect(null, mapDispatchToProp)(SearchBar);