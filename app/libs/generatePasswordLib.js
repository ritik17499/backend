const bcrypt = require('bcrypt');
const saltRounds = 10;
let logger = require('../libs/loggerLib');
let hashPassword = (myPlainTextPassword) => {
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(myPlainTextPassword, salt);
    return hash;
}
let comparePassword = (oldPassword, hashpassword, cb) => {
    bcrypt.compare(oldPassword, hashpassword, (err, res) =>{
        if(err){
            logger.error(err.message, "Comparison Error", 5);
            cb(err, null);
        }else{
            cb(null, res);
        }
    })
}
let comparePasswordSync = (myPlainTextPassword, hash) => {
   return bcrypt.compareSync(myPlainTextPassword, hash);
}
module.exports = {
   hashPassword: hashPassword,
    comparePassword: comparePassword
}