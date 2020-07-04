const express = require('express');
let notesData = require('./data');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server is up and running');
});

app.get('/notes',(req,res)=>{
    res.send(notesData);
});

app.post('/notes/create',(req,res)=>{
    let categoryNum = Number(req.query.category);
    let category;
    if (categoryNum === 1){
        category = 'career';
    }else if (categoryNum === 2){
        category = 'college';
    }else if (categoryNum === 3){
        category = 'motivation';
    }else if (categoryNum === 4){
        category = 'fitness';
    }else if (categoryNum === 5){
        category = 'relationships';
    }
    let newId = notesData[category].length + 1;
    newNote = {
        note: req.query.note,
        likes: 0,
        user: req.query.user,
        id: newId
    }
    notesData[category].push(newNote);
    res.send(notesData);
})
app.put('/notes/updatelikes',(req,res)=>{
    let id = req.query.id;
    let categoryNum = Number(req.query.category);
    let category;
    if (categoryNum === 1){
        category = 'career';
    }else if (categoryNum === 2){
        category = 'college';
    }else if (categoryNum === 3){
        category = 'motivation';
    }else if (categoryNum === 4){
        category = 'fitness';
    }else if (categoryNum === 5){
        category = 'relationships';
    }
    for (let i = 0;i < notesData[category].length;i++){
        if (notesData[category][i]['id'] === Number(id)){
            notesData[category][i]['likes'] = notesData[category][i]['likes'] + 1;
        }
    }
    res.send(notesData);
})
app.delete('/notes/delete',(req,res)=>{
    let id = req.query.id;
    let categoryNum = Number(req.query.category);
    let category;
    if (categoryNum === 1){
        category = 'career';
    }else if (categoryNum === 2){
        category = 'college';
    }else if (categoryNum === 3){
        category = 'motivation';
    }else if (categoryNum === 4){
        category = 'fitness';
    }else if (categoryNum === 5){
        category = 'relationships';
    }
    for (let i = 0;i < notesData[category].length;i++){
        if (notesData[category][i]['id'] === Number(id)){
            delete notesData[category][i];
        }
    }
    res.send(notesData);
})
app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT);
});