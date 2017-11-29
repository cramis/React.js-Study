import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Youtube API KEY
const API_KEY = 'AIzaSyBa4ifxSToufcsBxM8ozvtOBYK3MiOmsVg';

// 브라우저에 HTML을 뿌려주는 컴포넌트를 만든다.
const App = () => {
    return (
    <div>
        <SearchBar />
    </div> 
    ); // <-- JSX
}



// 만들어진 HTML에 대한 컴포넌트를 DOM 안에 넣도록 한다.

ReactDOM.render(<App/>, document.querySelector('.container'));