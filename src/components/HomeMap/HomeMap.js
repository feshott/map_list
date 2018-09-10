import React, { Component } from 'react';
import { YMaps, Map, Placemark, Button } from 'react-yandex-maps';
import './HomeMap.css';

export default class HomeMap extends Component {
  state = {
    routeList: [],
    searchList: []
  }

  setNumHome = (coordinates) => {
    const checkList = this.props.checkList
    const currPosition = coordinates.join(',')
    let numHome = ''

    checkList.forEach((element, index) => {
      if (element.position.join(',') === currPosition) numHome = index + 1
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

  removeRouterList = () => {
    this.setState({
      routeList: []
    })
  }

  setRouterList = () => {
    const checkList = this.props.checkList
    const routeList = checkList.map(home => {
      return { type: 'wayPoint', point: home.position }
    })
    this.setState({ routeList })
  }

  onApiAvaliable(ymaps) {
    ymaps.route(this.state.routeList, {
      multiRoute: true,
      routingMode: "pedestrian"
    }).done(function (route) {
      route.options.set("mapStateAutoApply", true);
      this.map.geoObjects.add(route);
    }, function (err) {
      throw err;
    }, this);
  }

  searchAddress = (e) => {
    e.preventDefault()
    const address = this.search.value
    const searchList = this.props.homeList.filter(home => home.address.indexOf(address) !== -1)
    this.setState({ searchList })
    this.search.value = ''
  }

  reloadSearchAddress = (e) => {
    e.preventDefault()
    this.setState({ searchList: [] })
  }

  render() {
    const { searchList } = this.state
    const { homeList, changeCheckList } = this.props
    const startPosition = { center: [55.7245, 37.561], zoom: 16 };
    return (
      <div className="home_map">
        <YMaps key={this.state.routeList.length} onApiAvaliable={(ymaps) => this.onApiAvaliable(ymaps)}>
          <Map
            width={550}
            height={400}
            state={startPosition}
            instanceRef={(ref) => this.map = ref} >

            {(searchList.length === 0 ? homeList : searchList).map((home, index) => {
              return (
                <Placemark
                  key={index}
                  properties={{
                    iconContent: this.setNumHome(home.position),
                    hintContent: home.zone.name,
                  }}
                  geometry={{
                    coordinates: home.position
                  }}
                  options={{
                    preset: this.colorHome(home.zone.name)
                  }}
                  onClick={changeCheckList}
                />
              )
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