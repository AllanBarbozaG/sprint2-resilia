import {Database} from "../infra/Database.js"

class DatabaseMethods {
  static listDatabase() {
    return Database
  }

  static returnRandomTip() {
    let random = Math.floor(Math.random() * Database.RandomTips.length)
    console.log(random)
    return Database.RandomTips[random]
  }

  static createTip(tip) {
    return Database.RandomTips = [...Database.RandomTips, tip]
  }



}

export default DatabaseMethods