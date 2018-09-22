import { observable } from 'mobx'

class Store {

  @observable homeList = [
    {
      "_type": "building",
      "_uid": "building1",
      "address": "г. Москва, ул. Усачева, 33, строен. 1",
      "position": [55.723188, 37.561111],
      "zone": {
        "_type": "zone",
        "_uid": "zone1",
        "chief": {
          "_type": "user",
          "_uid": "user1",
          "name": "Крылоносов Семен Павлович",
          "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a2.jpg"
        },
        "name": "CЭ-1"
      }
    },
    {
      "_type": "building",
      "_uid": "building2",
      "address": "г. Москва, ул. Усачева, 33/2, строен. 6",
      "position": [55.722886, 37.561487],
      "zone": {
        "_type": "zone",
        "_uid": "zone1",
        "chief": {
          "_type": "user",
          "_uid": "user1",
          "name": "Крылоносов Семен Павлович",
          "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a2.jpg"
        },
        "name": "CЭ-1"
      }
    },
    {
      "_type": "building",
      "_uid": "building3",
      "address": "г. Москва, ул. Лужники, 1с2",
      "position": [55.725193, 37.561013],
      "zone": {
        "_type": "zone",
        "_uid": "zone95",
        "chief": {
          "_type": "user",
          "_uid": "user1",
          "name": "Крылоносов Семен Павлович",
          "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a2.jpg"
        },
        "name": "CЭ-95"
      }
    },
    {
      "_type": "building",
      "_uid": "building4",
      "address": "г. Москва, Лужнецкий пр-д, 1",
      "position": [55.725409, 37.560311],
      "zone": {
        "_type": "zone",
        "_uid": "zone95",
        "chief": {
          "_type": "user",
          "_uid": "user2",
          "name": "Акимова Ольга Владимировна",
          "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a3.jpg"
        },
        "name": "CЭ-95"
      }
    },
    {
      "_type": "building",
      "_uid": "building5",
      "address": "г. Москва, ул. 10-летия Октября, 2с4",
      "position": [55.725817, 37.560676],
      "zone": {
        "_type": "zone",
        "_uid": "zone95",
        "chief": {
          "_type": "user",
          "_uid": "user2",
          "name": "Акимова Ольга Владимировна",
          "photo": "http://webapplayers.com/inspinia_admin-v2.7.1/img/a3.jpg"
        },
        "name": "CЭ-95"
      }
    }
  ]
  @observable checkList = []
  @observable routeList = []
  @observable searchList = []

}


const store = new Store()
export default store