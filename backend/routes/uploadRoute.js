const { Router } = require('express')
const uploadMiddleware = require('../middleware/multerMiddleware')
const router = Router()
const {storeImages, deleteFiles} = require('../utils/uploadToPinata')
const fsPromises = require("fs/promises")

// router.get("/api/get", (req, res) => {
//   const allPhotos = await
// })


router.post("/api/save", uploadMiddleware.single("photo"),async (req, res) => {
  // res.send("handling post request...")
  const photo = req.file.filename 
  // console.log(photo)    
  res.send(photo)
  await storeImages("public\\uploads")

  // deleteFiles("public\\uploads")
})

module.exports = router   