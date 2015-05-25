var request = require('request');
var email = require('email.js');

var options = {
    endpoint: 'https://api.smtplw.com.br/v1/messages',
    headers: {
        'x-auth-token': ''
    }

var sendMail = function(emailObject){
    request.post({url:endpoint, form:emailObject}, function(err, httpResponse, body){
        if (err) { return console.error(err);}
        console.log("HTTP Code: " + httpResponse);
        console.log("Response body: " + body);
    }
}
