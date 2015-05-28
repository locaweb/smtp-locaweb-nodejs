var request = require('request');
var email = require('./email.js');
var token = require('./token.js');

//var options = {
//        headers: {
//            'x-auth-token': '952bf9d71decb71dfba71d6e9508eb60'
//        },
//        rejectUnauthorized: false,
//        url: 'https://api.smtplw.com.br/v1/messages'
//}

module.exports = function (emailObject){
    request.post({headers: {
            'x-auth-token': token
        },
        rejectUnauthorized: false,
        url: 'https://api.smtplw.com.br/v1/messages', form:emailObject}, function(err, httpResponse, body){
        if (err) { return console.error(err);}
        console.log("HTTP Code: " + httpResponse.statusCode);
        console.log("Response body: " + body);
    });
};