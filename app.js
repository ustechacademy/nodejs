const express = require('express');
const app = express();
// Base URL - BASE URI
// End-point


let tasks = [
    {
        id: 1,
        title: "Task 1",
        status: "in-progress"
    }
];

// body parser
app.use(express.json());

// Request, result/response
// Development - Test - Production
app.get('/',function(req,res){
    // Function body
    res.send('Hello world - Ustech');
});

app.get('/app',function(req,res){
    res.send('/app endpoint');
})

app.get('/tasks',function(req,res){
    //res.send('Tasks get request');
    // return tasks array?
    res.json(tasks);
});
// /tasks -> request -> id,name,status 
app.post('/tasks',function(req,res){
    const task = req.body;
    tasks.push(task);
    res.json(tasks);
});

app.listen(3000);