import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import WhetherList from '../containers/whether-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WhetherList />
      </div>
    );
  }
}
