import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { action } from 'mobx'
import store from '../../Store/Store'
import { YMaps, Map, Placemark, Button } from 'react-yandex-maps';
import './HomeMap.css';


@observer
export default class HomeMap extends Component {

  setNumHome = (uid) => {
    const checkList = store.checkList
    const currUid = uid
    let numHome = ''

    checkList.forEach((element, index) => {
      if (element === currUid) numHome = index + 1
    });

    return numHome
  }

  colorHome = (zone) => {
    const colorHomeList = {
      'CЭ-1': 'islands#redCircleIcon',
      'CЭ-95': 'islands#nightCircleIcon'
    }
    return colorHomeList[zone]
  }

  @action
  removeRouterList = () => {
    store.routeList = []
  }

  @action
  setRouterList = () => {
    const homeList = store.homeList
    const checkList = store.checkList

    const routeList = checkList.map(uid => {
      let newRouteItem
      homeList.forEach((home, index) => {
        if (home._uid === uid) {
          newRouteItem = { type: 'wayPoint', point: homeList[index].position }
        }
      })
      return newRouteItem
    })
    store.routeList = routeList
  }


  onApiAvaliable(ymaps) {
    ymaps.route(store.routeList, {
      multiRoute: true,
      routingMode: "pedestrian"
    }).done(function (route) {
      route.options.set("mapStateAutoApply", true);
      this.map.geoObjects.add(route);
    }, function (err) {
      throw err;
    }, this);
  }

  @action
  searchAddress = (e) => {
    e.preventDefault()
    const address = this.search.value
    const searchListAddress = store.homeList.filter(home => home.address.indexOf(address) !== -1)
    const searchList = searchListAddress.map(home => home._uid)
    store.searchList = searchList
    this.search.value = ''
  }

  @action
  reloadSearchAddress = (e) => {
    e.preventDefault()
    store.searchList = []
  }

  @action
  changeCheckList = (event) => {
    const homeList = store.homeList
    const checkList = store.checkList

    const checkHomeNum = event.originalEvent.target.properties._data.iconContent
    const checkHomeUid = event.originalEvent.target.properties._data.homeDop

    if (checkHomeNum) {
      let newCheckList = checkList.slice(0, checkHomeNum - 1).concat(checkList.slice(checkHomeNum))
      store.checkList = newCheckList
    } else {
      homeList.forEach((home, index) => {
        if (home._uid === checkHomeUid) {
          let newCheckList = [...checkList, homeList[index]._uid]
          store.checkList = newCheckList
        }
      })
    }
  }

  render() {
    const { routeList, searchList, homeList } = store
    const startPosition = { center: [55.7245, 37.561], zoom: 16 };
    return (
      <div className="home_map">
        <YMaps key={routeList.length} onApiAvaliable={(ymaps) => this.onApiAvaliable(ymaps)}>
          <Map
            width={550}
            height={400}
            state={startPosition}
            instanceRef={(ref) => this.map = ref} >

            {homeList.map((home, index) => {
              if ((searchList.indexOf(home._uid) !== -1) || (searchList.length === 0)) {

                return (
                  <Placemark
                    key={index}
                    properties={{
                      homeDop: home._uid,
                      iconContent: this.setNumHome(home._uid),
                      hintContent: home.zone.name,
                    }}
                    geometry={{
                      coordinates: home.position
                    }}
                    options={{
                      preset: this.colorHome(home.zone.name)
                    }}
                    onClick={this.changeCheckList}
                  />
                )
              }
              return null
            })}

            <Button
              data={{
                content: "Сбросить маршрут",
              }}
              options={{
                maxWidth: [200],
                selectOnClick: false
              }}
              onClick={this.removeRouterList}
            />

            <Button
              data={{
                content: "Проложить маршрут",
              }}
              options={{
                maxWidth: [200],
                selectOnClick: false
              }}
              onClick={this.setRouterList}
            />
          </Map>
        </YMaps>
        <form>
          <input ref={input => this.search = input}
            type="text"
            placeholder="Введите адрес" />
          <button onClick={this.searchAddress}>Найти</button>
          <button onClick={this.reloadSearchAddress}>Сбросить фильтр</button>
        </form>
      </div>
    );
  }
}