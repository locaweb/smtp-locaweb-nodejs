var request = require('request');
var email = require('./email.js');

var endpoint = 'https://api.smtplw.com.br/v1/messages';
var options = {
    headers: {
        'x-auth-token': ''
    }
};

module.exports = function (emailObject){
    request.post(options, {url:endpoint, form:emailObject}, function(err, httpResponse, body){
        if (err) { return console.error(err);}
        console.log("HTTP Code: " + httpResponse);
        console.log("Response body: " + body);
    });
};