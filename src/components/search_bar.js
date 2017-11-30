import React, { Component} from 'react';
// const Component = React.Component;


class SearchBar extends Component{
    
    constructor(prop){
        super(prop);

        this.state = {
            term : '' 
        }
    }

    searchTermChange(term){
        this.setState({ term : term});
        this.props.onSearchTermChange(term);
    }
    

    render(){
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={(event) => this.searchTermChange(event.target.value)}/>
            </div>
            
        );
    }

}




export default SearchBar;