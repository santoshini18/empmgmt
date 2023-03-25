const { Router } = require("express");
const express =require("express")
const router = express.Router()


 const Book = require('../../models/Book');

router.get("/test", function (req, res)  {
    res.send("Book Test Route is working Fine")
})

router.get("/", (req, res) => {
    Book.find()
    // .then (res.send("Home Route is working Fine") )
    .then( books => res.json(books) )
    .catch( err => res.status(404).json( { nobooksfound: 'No Books found'} ))
})
router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
    // .then ( res.send(`Found the book with particular id ${req.params.id}`) )
    // .then( books => res.json(book))
    .catch( err => res.status(404).json( { nobooksfound: 'No Books found'} ))

})
router.post("/",(req,res) => {
    Book.create(req.body)
        .then (res.send("Home Route is working Fine") )
        .then( books => res.json( {msg: "Book added successfully"} ) )
        .catch( err => res.status(404).json( { error: "Unable to add the book"} ))

})
router.put("/:id",(req, res) =>{
    Book.findByIdAndUpdate(req.params.id, req.body)
    // .then (res.send("Home Route is working Fine") )
    .then( books => res.json({ msg: "update successfully"}))
    .catch( err => res.status(404).json( { nobooksfound: 'No Books found'} ))

})

router.delete("/:id",(req, res) =>{
    Book.findByIdAndUpdate(req.params.id, req.body)
    // .then (res.send("Home Route is working Fine") )
    .then( books => res.json({ msg: "Book entry deleted successfully"}))
    .catch( err => res.status(404).json( { error: 'No such book exists'} ))

})


module.exports = router






