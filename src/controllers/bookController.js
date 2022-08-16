const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const bookList = async function(req,res){
    let allBooks = await BookModel.find().select({bookName: 1,authorName: 1, _id:0 })
    res.send({ msg: allBooks})
}

const getBooksInYear = async function(req,res){
    let data= req.body
    let booksInYear = await BookModel.find(data)
    res.send({msg: booksInYear})
}

const getParticularBooks = async function(req,res){
    let data=req.body
    let particulaBooks = await BookModel.find(data)
    res.send({msg : particulaBooks})
}
const getXINRBooks = async function(req,res){
    let inrBooks = await BookModel.find({
        $or:[ {"price.indianPrice":{$eq:"100INR"}},  {"price.indianPrice":{$eq:"200INR"}}, {"price.indianPrice":{$eq:"500INR"}}]
    })
    res.send({msg: inrBooks})
}

const getRandomBooks = async function(req,res){
    let randomBooks = await BookModel.find({
        $or: [ {stockAvailable : true} , {totalPages: {$gt: 500}} ]
    })
    res.send({msg: randomBooks})
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getRandomBooks = getRandomBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks = getParticularBooks