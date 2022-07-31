import TipModel from "../models/TipModel.js"
import DatabaseMethods from "../infra/DatabaseMetodos.js"

class Tips {
  static routes(app) {
    app.get("/tips", (req, res) => {
      const response = DatabaseMethods.returnRandomTip()
      res.status(200).json(response)
    })

  }
}

export default Tips