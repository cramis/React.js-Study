import React, { Component} from 'react';
// const Component = React.Component;


class SearchBar extends Component{
    // render(){
    //     return <input onChange={this.onInputChange}/>;
    // }

    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    // 위의 코드가 아래와 같이 축약될 수 있음
    render(){
        return <input onChange={(event) => console.log(event.target.value)}/>;
    }

}




export default SearchBar;