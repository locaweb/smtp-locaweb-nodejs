'use strict';
var method = Email.prototype;

function Email (param) {
    param = param || {};
    this.subject    = param.subject || '';
    this.from       = param.from    || '';
    this.to         = param.to      || [];
    this.cc         = param.cc      || [];
    this.bcc        = param.bcc     || [];
    this.body       = param.body    || '';
    this.headers    = param.headers || {};
    this.apiToken   = param.token   || '';
}

method.addSubject = function (subject) {
    this.subject = subject;
};

method.addFrom = function (from) {
    this.from = from;
};

method.addTo = function (to) {
    this.to = to;
};

method.addCc = function (cc) {
    this.cc = cc;
};

method.addBcc = function (bcc) {
    this.bcc = bcc;
};

method.addBody = function (body) {
    this.body = body;
};

//method.addToken = function(token){
//    this.apiToken = token;
//    this.headers.x-auth-token = this.token;
//}

module.exports = Email;