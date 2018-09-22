import React, { Component } from 'react';
import { observer } from 'mobx-react'
import RoadList from './containers/RoadList/RoadList'
import HomeMap from './components/HomeMap/HomeMap'
import store from './Store/Store'
import './App.css';

window.store = store

@observer
class App extends Component {

  render() {
    const { checkList, homeList } = store
    return (
      <div className="App">
        <HomeMap />
        <RoadList
          homeList={homeList}
          checkList={checkList} />
      </div>
    );
  }
}

export default App;
