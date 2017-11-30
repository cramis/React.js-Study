import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YoutubeSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div> 
            ); 
    }
    
}




ReactDOM.render(<App/>, document.querySelector('.container'));