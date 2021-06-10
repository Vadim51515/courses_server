const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"course",
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.post('/application',(req,res) => {
//     const number = req.body.number
//     const email = req.body.email
//     const comment = req.body.comment
//     console.log(req.body.number);
//      const sqlInsert = "INSERT INTO application (`number`, `email`, `comment`) VALUES (?, ?, ?);"
//         db.query(sqlInsert,[number, email,comment], (err,result) => {
//         console.log(err);
//         res.send(result)
//         console.log(result);
//      })
// })
// app.get('/get/application',(req,res) => {
//     const sqlSelect = "SELECT * FROM `application` WHERE 1"
//     db.query(sqlSelect, (err,result) => {
//        res.send(result)
//        return result
//     })
   
// })
app.get('/get/application',(req,res) => {
    const sqlSelect = "SELECT * FROM `course` WHERE 1"
    db.query(sqlSelect, (err,result) => {
       res.send(result)
       return result
    })
   
})
app.post('/post/application',(req,res) => {
    const name = req.body.name
    const number = req.body.number
    const course = req.body.course
    
    console.log(req.body.number);
     const sqlInsert = "INSERT INTO course (`name`, `number`, `course`) VALUES (?, ?, ?);"
        db.query(sqlInsert,[name, number, course], (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.get('/login',(req,res) => {
    const sqlSelect = "SELECT * FROM `admins` WHERE 1"
    db.query(sqlSelect, (err,result) => {
       res.send(result)
       return result
    })
   
})
app.delete('/delapplication/:id',(req,res) => {
   const id = req.params.id
   console.log(req.body.id);
    const sqlInsert = "DELETE FROM `course` WHERE `id`= (?);"
       db.query(sqlInsert,id, (err,result) => {
       console.log(err);
       res.send(result)
       console.log(result);
    })
})


app.get('/resources',(req,res) => {
    const sqlSelect = "SELECT * FROM `resources` WHERE 1"
    db.query(sqlSelect, (err,result) => {
       res.send(result)
       return result
    })
})
app.patch('/patch/resources',(req,res) => {
    const name = req.body.name
    const quantity = req.body.quantity
    const price = req.body.price
    const id = req.body.id
    console.log(req.body.number);
     const sqlInsert = " UPDATE `resources` SET `name`=(?),`quantity`=(?),`price`=(?) WHERE `id` =(?);"
        db.query(sqlInsert,[name, quantity, price,id], (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.post('/newresources',(req,res) => {
    const name = req.body.name
    const quantity = req.body.quantity
    const price = req.body.price
    const idEvent = req.body.idEvent
    console.log(req.body.number);
     const sqlInsert = "INSERT INTO resources (`idEvent`, `name`, `quantity`, `price`) VALUES (?, ?, ?, ?);"
        db.query(sqlInsert,[idEvent, name,quantity,price], (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.delete('/delresources/:id',(req,res) => {
    const id = req.params.id
    console.log(req.body.id);
     const sqlInsert = "DELETE FROM `resources` WHERE `id`= (?);"
        db.query(sqlInsert,id, (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.post('/addnewevent',(req,res) => {
    const name = req.body.name
    const idUser = req.body.idUser
    console.log(req.body.number);
     const sqlInsert = "INSERT INTO event (`name`, `idUser`) VALUES (?, ?);"
        db.query(sqlInsert,[name,idUser], (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.patch('/patch/event',(req,res) => {
    const name = req.body.name
    const id = req.body.id
    console.log(req.body.number);
     const sqlInsert = " UPDATE `event` SET `name`=(?) WHERE `id` =(?);"
        db.query(sqlInsert,[name, id], (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.delete('/delevent/:id',(req,res) => {
    const id = req.params.id
    console.log(req.body.id);
     const sqlInsert = "DELETE FROM `event` WHERE `id`= (?);"
        db.query(sqlInsert,id, (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.listen('3001',() => {
    console.log("start server 3001 port");
})
