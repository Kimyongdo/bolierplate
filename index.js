const express = require('express') //express 설치해서 가능
const app = express() //새로운 앱을 만듦
const port = 5000  //포트는 아무거나 가능. 3000,4000,5000.. 임의지정임. 

//mongoose 설치, db와 백엔드를 연결
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yongdo:yongdo123@bolierplatetest-ablcd.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))



//package.json -> script -> start -> terminal : npm run start 
//http://localhost:5000에서 app.get의 console이 나옴.   
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))