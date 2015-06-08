require ('dotenv').load();
// imports
var request = require ('request'),
    Email = require ('./email.js'),
    
    // request options variable
    options = {
        headers: {
            'x-auth-token': process.env.TOKEN,
            'User-Agent': 'locaweb-smtp-nodejs'
        },
        rejectUnauthorized: false,
        url: 'https://api.smtplw.com.br/v1/messages',
        json: true
    },
    exports = module.exports = {};

// private function to warn about limits
function checkLimits (email){
    if (email.subject.length > 998) {
        console.warn ('WARNING: título das mensagens não superar 998 caracteres. API vai rejeitar a sua mensagem');
    };
    
    if (email.body.length > 1048576) {
        console.warn ('WARNING: o corpo da mensagem não pode superar 1M. API vai rejeitar a sua mensagem');
    };
    
    if (email.to.length > 1000) {
        console.warn ('WARNING: cada mensagem não pode ter mais de do que 1000 destinatários por minuto');
    };
    
    if (Object.keys(email.headers).length > 50) {
        console.warn ('WARNING: não é possível exceder 50 headers');
    }
}

exports.sendMail = function (emailObject){
    checkLimits (emailObject);
    
    //compose email
    var message = options;
    message.body = emailObject;
 
    // send the api resquest
    request.post(message, function (err, httpResponse, body) {
        
        if (err) { return console.error(err); }
        console.log('MENSAGEM ENVIADA PARA A API...');
        console.log ('HTTP Code: ' + httpResponse.statusCode);
//        console.log ('Response body: ', body); //debug only
        
        if (httpResponse.statusCode === 201) {
            console.log('Location: ' + httpResponse.headers.location);
            return httpResponse.headers.location;
        }
    });
};

exports.Email = Email;