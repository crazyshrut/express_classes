const express = require('express');
const app = express();
app.use(middleware);

let courses = [
    {id: 1, name: "java"},
    {id: 2, name: "javascript"},
    {id: 3, name: "python"}
]

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req,res) => {
    console.log(req.body);
    let singleCourse = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(singleCourse);
    res.send(courses);
})

function middleware(req, res, next){

    console.log(`[${new Date().toISOString()}] ${req.method}, ${req.name} ,${req.ip}`);
    next();
}

//put call update id 1 to spring
//delete call delete id 2

app.listen(3000, () => {
    console.log("server started");
});

//create logger
//method, ip, hostname, date










// const express = require('express');
// const axios = require('axios');
// const app = express();

// app.use(express.json());

// let courses = [
//     {id: 1, name: "java"},
//     {id: 2, name: "javascript"},
//     {id: 3, name: "python"}
// ]

// app.get('/courses', (req, res) => {
//     res.json(courses);
// });

// app.post('/courses', (req,res) => {
//     console.log(req.body);
//     let singleCourse = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(singleCourse);
//     res.send(courses);
// })

// app.put('/courses/:id', async (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const courseUpdate = req.body;

//     try {
//         const response = await axios.put(`http://spring-app-url:8080/courses/${id}`, courseUpdate);
//         res.status(200).json(response.data);
//     } catch (e) {
//         res.status(500).send(e.message);
//     }
// });

// app.delete('/courses/:id', async (req, res) => {
//     const id = parseInt(req.params.id, 10);

//     try {
//         const response = await axios.delete(`http://spring-app-url:8080/courses/${id}`);
//         res.status(200).json(response.data);
//     } catch (e) {
//         res.status(500).send(e.message);
//     }
// });

// app.listen(3000, () => {
//     console.log("server started");
// });