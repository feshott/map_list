import { observable } from 'mobx'

class Store {

  @observable homeList = [
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
  ]
  @observable checkList = []
  @observable routeList = []
  @observable searchList = []

}


const store = new Store()
export default store