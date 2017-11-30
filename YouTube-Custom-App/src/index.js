import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
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
        
        this.videoSearch('infinity war');
        
        

    }

    videoSearch(term){
        YoutubeSearch({key : API_KEY, term : term}, (videos)=>{
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }

    render(){
        // 600ms 늦게 검색결과를 가지고 오도록 처리
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 600);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onSelectVideo={(selectedVideo)=> this.setState({selectedVideo})} 
                videos={this.state.videos} />
            </div> 
            ); 
    }
    
}




ReactDOM.render(<App/>, document.querySelector('.container'));