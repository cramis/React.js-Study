import React from 'react';
import ReactDOM from 'react-dom';

// 브라우저에 HTML을 뿌려주는 컴포넌트를 만든다.
const App = () => {
    return <div>Hi!</div>; // <-- JSX
}



// 만들어진 HTML에 대한 컴포넌트를 DOM 안에 넣도록 한다.

ReactDOM.render(<App/>, document.querySelector('.container'));