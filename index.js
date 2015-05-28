var request = require ('request');
var email = require ('./email.js');
var token = require ('./token.js');

//var options = {
//        headers: {
//            'x-auth-token': 'token'
//        },
//        rejectUnauthorized: false,
//        url: 'https://api.smtplw.com.br/v1/messages'
//}

function checkLimits (message){
    if (message.subject.length > 998) {
        console.warn ('WARNING: título das mensagens não superar 998 caracteres. API vai rejeitar a sua mensagem');
    };
    if (message.body.length > 1048576) {
        console.warn ('WARNING: o corpo da mensagem não pode superar 1M. API vai rejeitar a sua mensagem');
    };
    if (message.to.length > 1000) {
        console.warn ('WARNING: cada mensagem não pode ter mais de do que 1000 destinatários por minuto');
    };
    // implementar checagem dos headers. Eles não podem superar 50.
}

module.exports = function (emailObject){
    
    checkLimits (emailObject);
    
    request.post({headers: {
            'x-auth-token': token
        },
        rejectUnauthorized: false,
        url: 'https://api.smtplw.com.br/v1/messages', form:emailObject}, function (err, httpResponse, body) {
        if (err) { return console.error(err); }
        console.log ("HTTP Code: " + httpResponse.statusCode);
        console.log ("Response body: " + body);
    });
};