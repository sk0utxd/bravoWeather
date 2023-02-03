const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.text({ extended: true }));
const port = 3000

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("SUS")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
