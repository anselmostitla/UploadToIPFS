const pinataSDK = require('@pinata/sdk')
const path = require('path')
const fs = require("fs")
require("dotenv").config()

const PINATA_API_KEY = process.env.PINATA_API_KEY
const PINATA_API_SECRETE = process.env.PINATA_API_SECRETE
const pinata = new pinataSDK(PINATA_API_KEY, PINATA_API_SECRETE)


async function storeImages(imagesFilePath){
  const fullImagesPath = path.resolve(imagesFilePath)
  const files = fs.readdirSync(fullImagesPath)
  console.log(files)
  let responses = []
  for (fileIndex in files){
    console.log(`${fullImagesPath}/${files[fileIndex]}`)
    const readableStreamForFile = fs.createReadStream(`${fullImagesPath}/${files[fileIndex]}`)
    // const readableStreamForFile = fs.createReadStream("./img/amlo_reaparece.png")
    // console.log(readableStreamForFile)
    try {
      const response = await pinata.pinFileToIPFS(readableStreamForFile)
      responses.push(response)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(responses)
  return (responses, files)

}

// storeImages("img")
// storeImages2("img")


// fs.unlinkSync(pathToFile)

async function deleteFiles(imagesFilePath){
  const fullImagesPath = path.resolve(imagesFilePath)
  const files = fs.readdirSync(fullImagesPath)
  for (fileIndex in files){
    console.log(`${fullImagesPath}/${files[fileIndex]}`)
    // const readableStreamForFile = fs.createReadStream(`${fullImagesPath}/${files[fileIndex]}`)
    // const readableStreamForFile = fs.createReadStream("./img/amlo_reaparece.png")
    // console.log(readableStreamForFile)
    try {
      fs.unlinkSync(`${fullImagesPath}/${files[fileIndex]}`)
    } catch (error) {
      console.log(error)  
    }
  }
}



module.exports = { storeImages, deleteFiles }