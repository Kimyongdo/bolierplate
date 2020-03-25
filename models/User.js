//데이터를 저장할 때 어떤 목록을 만들 것인지
const mongoose = require('mongoose');

const userSchemna = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, //빈칸을 없애준다.
        unique:1, //오직 하나만. 
    },
    password:{
        type:String,
        minlength:5,
    },
    lastname:{
        type:String,
        maxlength:50,
    },
    role:{//회원인지 관리자인지
        type:Number,
        default:0,
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number 
    }
})

//모델이 스키마를 감싸는 과정
const User = mongoose.model('User',userSchemna)

module.exports={User}