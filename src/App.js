import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { action } from 'mobx'
import RoadList from './containers/RoadList/RoadList'
import HomeMap from './components/HomeMap/HomeMap'
import store from './Store/Store'
import './App.css';

@observer
class App extends Component {

  @action
  changeCheckList = (event) => {
    const homeList = store.homeList
    const checkList = store.checkList
    const checkHomeNum = event.originalEvent.target.properties._data.iconContent
    const checkHomeCoordinates = event.originalEvent.target.geometry._coordinates

    if (checkHomeNum) {
      let newCheckList = checkList.slice(0, checkHomeNum - 1).concat(checkList.slice(checkHomeNum))
      store.checkList = newCheckList
    } else {
      homeList.forEach((home, index) => {
        if (home.position.join(', ') === checkHomeCoordinates.join(', ')) {
          let newCheckList = [...checkList, homeList[index]]
          store.checkList = newCheckList
        }
      })
    }
  }

  render() {
    const { checkList } = store
    return (
      <div className="App">
        <HomeMap
          changeCheckList={this.changeCheckList} />
        <RoadList
          checkList={checkList} />
      </div>
    );
  }
}

export default App;
