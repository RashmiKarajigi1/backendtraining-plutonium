const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")

router.post("/createBook", bookController.createBook)

router.post("/createAuthor", bookController.createAuthor)

router.get("/getBook", bookController.getBook)

router.get("/findAndUpdate", bookController.findAndUpdate)

router.get("/booksCost", bookController.booksCost)

// router.get("/books-by-authorid/:author_id",bookController.getBooksName)

// router.get("/listAuthor", bookController.listAuthor)




module.exports = router;




// const express = require('express');
// const router = express.Router();


// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// // router.post("/createUser", UserController.createUser  )

// // router.get("/getUsersData", UserController.getUsersData)

// // router.post("/createBook", BookController.createBook  )

// // router.get("/getBooksData", BookController.getBooksData)

// // router.post("/updateBooks", BookController.updateBooks)

// // router.post("/deleteBooks", BookController.deleteBooks)

// router.post('/createNewBooks', BookController.createNewBooks)

// router.post('/createNewAuthor', BookController.createNewAuthor)

// router.get('/allBooks', BookController.allBooks)

// router.get('/findAndUpdate', BookController.findAndUpdate)

// router.get('/bookAndAuthor', BookController.bookAndAuthor)
// // const bookController= require("../controllers/bookController")
// // router.post("/createBook", bookController.createBook)

// // router.post("/createAuthor", bookController.createAuthor)

// // router.get("/getBook", bookController.getBook)

// // router.get("/node ", bookController.findAndUpdate)

// // router.get("/booksCost", bookController.booksCost)

// // router.get("/books-by-authorid/:author_id",bookController.getBooksName)

// // router.get("/listAuthor", bookController.listAuthor)
// module.exports = router;