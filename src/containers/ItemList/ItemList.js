import React from 'react';
import './ItemList.css';

const colorHome = (zone) => {
  const colorHomeList = {
    'CЭ-1': 'number_red',
    'CЭ-95': 'number_blue'
  }
  return colorHomeList[zone]
}

const ItemList = ({ checkHomeInfo }) =>
  <div className="item_list">
    <div className={`number ${colorHome(checkHomeInfo.zone.name)}`}>{checkHomeInfo.zone.name}</div>
    <div className="address">
      <div className="street">{checkHomeInfo.address}</div>
      <div className="last_visit">Дата посленей проверки: 11.08.2014</div>
    </div>
    <div className="avatar" style={{ backgroundImage: `url('${checkHomeInfo.zone.chief.photo}')` }}></div>
  </div>

export default ItemList 