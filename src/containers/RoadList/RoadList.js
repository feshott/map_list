import React from 'react';
import { observer } from 'mobx-react'
import ItemList from '../ItemList/ItemList'
import './RoadList.css';

const RoadList = observer(({ checkList }) =>
  <div className="road_list">
    <h1 className="title">Маршрут проверки</h1>
    {checkList.map((home, index) =>
      <ItemList checkHomeInfo={home} key={index} />
    )}
  </div>)

export default RoadList