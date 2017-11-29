import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YoutubeSearch from 'youtube-api-search';
import VideoList from './components/video_list';

// Youtube API KEY
const API_KEY = 'AIzaSyBa4ifxSToufcsBxM8ozvtOBYK3MiOmsVg';



class App extends Component {

    constructor(props){
        super(props);

        this.state = {videos : []};

        YoutubeSearch({key : API_KEY, term : 'surfboards'}, (videos)=>{
            this.setState({videos});
        });

    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div> 
            ); 
    }
    
}




ReactDOM.render(<App/>, document.querySelector('.container'));