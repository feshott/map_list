import React from 'react';
import { observer } from 'mobx-react'
import ItemList from '../ItemList/ItemList'
import './RoadList.css';

const RoadList = observer(({ checkList, homeList }) =>
  <div className="road_list">
    <h1 className="title">Маршрут проверки</h1>

    {homeList.map((home, index) => {
      if (checkList.indexOf(home._uid) !== -1) {

        return <ItemList checkHomeInfo={home} key={index} />
      }
      return null
    }
    )}
  </div>)

export default RoadList