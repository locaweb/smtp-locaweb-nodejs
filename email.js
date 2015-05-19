// var http = require('http');
var request = require('request');

var email = new function(param) {
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

email.prototype.addToken = function(token) {
    this.apiToken = token;
    this.headers.x-auth-token = this.token;
}

