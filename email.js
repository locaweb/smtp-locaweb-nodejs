// var http = require('http');
// var request = require('request');

var email = new function(param){
    param = param || {};

    this.subject    = param.subject     || '';
    this.from       = param.from        || '';
    this.to         = param.to          || [];
    this.cc         = param.to          || [];
    this.bcc        = param.bcc         || [];
    this.body       = param.body        || '';
    this.headers    = param.headers     || {};
    this.apiToken   = param.token       || '';

}


email.prototype.addSubject = function(subject){
    this.subject = subject;
};

email.prototype.addFrom = function(from){
    this.from = from;
};

email.prototype.addTo = function(to){
    this.to = to;    
};

email.prototype.addCc = function(cc){
    this.cc = cc;    
};

email.prototype.addBcc = function(bcc){
    this.bcc = bcc;    
};

email.prototype.addBody = function(body){
    this.body = body;
};

//email.prototype.addToken = function(token){
//    this.apiToken = token;
//    this.headers.x-auth-token = this.token;
//}

module.exports = email;