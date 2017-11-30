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

        this.state = {
            videos : [],
            selectedVideo : null
        };

        YoutubeSearch({key : API_KEY, term : 'infinity war'}, (videos)=>{
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });

    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onSelectVideo={(selectedVideo)=> this.setState({selectedVideo: selectedVideo})} videos={this.state.videos} />
            </div> 
            ); 
    }
    
}




ReactDOM.render(<App/>, document.querySelector('.container'));