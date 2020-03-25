//process.env.NODE_ENV는 환경변수 
//production or devleopment 
if(process.env.NODE_ENV == 'production'){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}