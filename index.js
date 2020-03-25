const express = require('express') //express 설치해서 가능
const app = express() //새로운 앱을 만듦
const port = 5000  //포트는 아무거나 가능. 3000,4000,5000.. 임의지정임. 

const {User} = require("./models/User"); //모델 유저를 가져온다.
const bodyParser = require('body-parser');

//confing-배포, 로컬로 나누고 암호를 보호하기 위함임. 
const confing = require('./config/key');

//데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));
//json데이터를 해석해서 가져옴
app.use(bodyParser.json());

//mongoose 설치, db와 백엔드를 연결
const mongoose = require('mongoose');
mongoose.connect(confing.mongoURI,{
//mongndb에서의 warning 을 미리 제거해주는 필터역할 
useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))



//package.json -> script -> start -> terminal : npm run start 
//http://localhost:5000에서 app.get의 console이 나옴.   

//get method <- restful api 중 하나.
//이 부분을 라우터라고 부른다.
//req : request, res : response

app.get('/', (req, res) => res.send('Hello World! 123'))//'/'는 최종목적지 = 현재페이지
//post방식 - post맨에서 post방식으로 http://localhost:5000/register이 주소로 보내면 여기서 동일한 /register를 받는다. 
app.post('/register', (req, res)=>{

    //회원정보에 필요한 정보들을 clinent(웹페이지에서 신상정보 적는 정보들)에서 가져오면 
    //그것들을 데이터베이스에 넣어줌 
    const user = new User(req.body) // /resgister의 json정보를 가져와서 -> user model에 대입 
    user.save((err, doc)=>{          
        if(err) return res.json({success : false, err}); //실패하면 false
        return res.status(200).json({success:true}); //성공- status(200)을 써준다.
    }); //.save()는 몽고db method 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))