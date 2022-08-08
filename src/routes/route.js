const express = require('express');
const lodash=require('lodash');
const abc = require('../introduction/intro')
const exportModule = require('../logger/logger')
const helpe = require('../util/helper')
const format = require('../validator/formatter')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });
router.get('/test-me',function(req,res){
    const arrayMonth=['January','February','March','April','May','June','July','August','September','October','November','December'];
    console.log(lodash.chunk(arrayMonth,3))
    const arrayOddNumbers = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arrayOddNumbers))
    const array1=[1,2]
    const array2=[2,3]
    const array3=[3,4]
    const array4=[4,5]
    const array5=[5,6]
     let x = lodash.union(array1,array2,array3,array4,array5)
     console.log(x)
     const arrayMovies = [["Horror","The Shining"],["Drama","Titanic"],["Thriller","Shutter Island"],["Fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(arrayMovies))

    res.send('3rd API')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason