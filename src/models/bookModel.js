const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author_id:{
        type: Number,
        required: true
    },
    price: Number,
    ratings: String
   
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 



// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     bookName: {
//         type: String,
//         required: true
//     },
//     authorId: {
//         type: Number,
//         required: true
//     },
//     price: {
//         type: Number,
//         unique: true
//     },
//     rating: Number
// })

// const authorSchema = new mongoose.Schema({
//     authorId: {
//         type: Number,
//         required: true
//     },
//     authorName: String,
//     age: Number,
//     address: {
//         type: String,
//         unique: true
//     }
// })

// module.exports = mongoose.model('Author', authorSchema)
// module.exports = mongoose.model('Books Collection', bookSchema) 