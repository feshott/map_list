import React, { Component } from 'react';
import RoadList from './containers/RoadList/RoadList'
import HomeMap from './components/HomeMap/HomeMap'
import './App.css';

class App extends Component {

  state = {
    homeList: [
      {
        "address": "г. Москва, ул. Усачева, 33, строен. 1",
        "position": [55.723188, 37.561111],
        "zone": {
          "name": "CЭ-1",
          "chief": {
            "name": "Крылоносов Семен Павлович",
            "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a2.jpg"
          }
        }
      },
      {
        "address": "г. Москва, ул. Усачева, 33/2, строен. 6",
        "position": [55.722886, 37.561487],
        "zone": {
          "name": "CЭ-1",
          "chief": {
            "name": "Крылоносов Семен Павлович",
            "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a2.jpg"
          }
        }
      },
      {
        "address": "г. Москва, ул. Лужники, 1с2",
        "position": [55.725193, 37.561013],
        "zone": {
          "name": "CЭ-95",
          "chief": {
            "name": "Акимова Ольга Владимировна",
            "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a3.jpg"
          }
        }
      },
      {
        "address": "г. Москва, Лужнецкий пр-д, 1",
        "position": [55.725409, 37.560311],
        "zone": {
          "name": "CЭ-95",
          "chief": {
            "name": "Акимова Ольга Владимировна",
            "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a3.jpg"
          }
        }
      },
      {
        "address": "г. Москва, ул. 10-летия Октября, 2с4",
        "position": [55.725817, 37.560676],
        "zone": {
          "name": "CЭ-95",
          "chief": {
            "name": "Акимова Ольга Владимировна",
            "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a3.jpg"
          }
        }
      }
    ],
    checkList: []
  }

  changeCheckList = (event) => {
    const homeList = this.state.homeList
    const checkList = this.state.checkList
    const checkHomeNum = event.originalEvent.target.properties._data.iconContent
    const checkHomeCoordinates = event.originalEvent.target.geometry._coordinates

    if (checkHomeNum) {
      let newCheckList = checkList.slice(0, checkHomeNum - 1).concat(checkList.slice(checkHomeNum))
      this.setState({ checkList: newCheckList })
    } else {
      homeList.forEach((home, index) => {
        if (home.position.join(', ') === checkHomeCoordinates.join(', ')) {
          let newCheckList = [...checkList, homeList[index]]
          this.setState({ checkList: newCheckList })
        }
      })
    }
  }

  render() {
    const { homeList, checkList } = this.state
    return (
      <div className="App">
        <HomeMap
          homeList={homeList}
          checkList={checkList}
          changeCheckList={this.changeCheckList} />
        <RoadList
          checkList={checkList} />
      </div>
    );
  }
}

export default App;
