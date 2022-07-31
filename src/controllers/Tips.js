import TipModel from "../models/TipModel.js"
import DatabaseMethods from "../infra/DatabaseMetodos.js"


class Tips {
  static routes(app) {
    app.get("/database", (req, res) => {
      const response = DatabaseMethods.listDatabase()
      res.status(200).json(response)
    })

    app.get("/tips", (req, res) => {
      const response = DatabaseMethods.returnRandomTip()
      res.status(200).json(response)
    })

    app.post("/create", (req, res) => {
      try {
        const tip = new TipModel(...Object.values(req.body))
        const response = DatabaseMethods.createTip(tip)
        res.status(200).json(response)
      } catch(error) {
        res.status(400).send('Erro ao criar nova dica.')
      }
    })

  }
}

export default Tips