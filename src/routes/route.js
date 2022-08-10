const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})




let players = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
        "swimming"
    ]
},
{
    "name": "tarun",
    "dob": "16/4/1998",
    "gender": "male",
    "city": "delhi",
    "sports": [
        "cricket"
    ]
},
{
    "name": "ram",
    "dob": "13/9/1994",
    "gender": "male",
    "city": "noida",
    "sports": [
        "football"
    ]
},
{
    "name": "shyam",
    "dob": "23/7/1997",
    "gender": "male",
    "city": "punjab",
    "sports": [
        "baseball"
    ]
}]
router.post("/players", function(req, res){

    let ele= req.body
    let flag = false
    for(i=0;i<players.length;i++){
        if(ele.name === players[i].name){
            flag = true
            break;
        }
    }
    if(flag){
        res.send({msg : "Name already exist"})
    }else{
    players.push(ele)
      res.send({data : players , status : true})
    }
})
// router.post("/players", function (req, res) {

//     let ele = req.body

//     for (i = 0; i < players.length; i++) {
//         if (ele.name === players[i].name) {

//             res.send({ msg: "Name already exist" })
//             break;
//         } 
//       }
//       if(ele.name!==players[i].name)  {
//          players.push(ele)
//          res.send({ data: players, status: true })
//       }
        

// })







module.exports = router;
// adding this comment for no reason