import express from 'express'
import bodyParser from "body-parser";
const app = express()

function post(title,desc){
    this.title = title,
    this.description= desc;
}

const presenttasks = [];

const completed = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.render('index.ejs',{data1 : presenttasks,
    data2:completed});
}); 



app.post('/createpost',(req,res)=>{
    res.render('form.ejs');
});

app.post('/createdpost',(req,res)=>{
    const anotherpost = new post(req.body['title'],req.body['description']);
    presenttasks.push(anotherpost); 
    res.redirect('/');
});

app.post(`/deletetask`,(req,res)=>{
    presenttasks.splice(req.body.del_index,1);
    res.redirect('/');
});

app.post('/donetask',(req,res)=>{
    completed.push(presenttasks[req.body.comp_index]);
    presenttasks.splice(req.body.del_index,1);
    res.redirect('/');
});
app.listen(3000,()=>{
    console.log("Port 3000 Running...");
});
  
