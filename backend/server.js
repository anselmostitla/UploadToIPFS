const express = require('express')
const cors = require('cors')
require("dotenv").config()
const uploadRoute = require("./routes/uploadRoute")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use(uploadRoute)






const PORT = process.env.PORT || 5000  
app.listen(PORT, () => console.log(`server started at port: ${PORT}`))        

