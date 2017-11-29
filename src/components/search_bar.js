import React, { Component} from 'react';
// const Component = React.Component;


class SearchBar extends Component{
    
    constructor(prop){
        super(prop);

        this.state = {
            term : 'test'
        }
    }

    render(){
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={(event) => this.setState({ term : event.target.value})}/>
            </div>
            
        );
    }

}




export default SearchBar;