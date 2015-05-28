'use strict';

function Email (param) {
    param = param || {};
    this.subject    = param.subject || '';
    this.from       = param.from    || '';
    this.to         = param.to      || [];
    this.cc         = param.cc      || [];
    this.bcc        = param.bcc     || [];
    this.body       = param.body    || '';
}

var method = Email.prototype;

method.addSubject = function (subject) {
    this.subject = subject;
};

method.addFrom = function (from) {
    this.from = from;
};

method.addTo = function (to) {
    this.to.push(to);
};

method.addCc = function (cc) {
    this.cc.push(cc);
};

method.addBcc = function (bcc) {
    this.bcc.push(bcc);
};

method.addBody = function (body) {
    this.body = body;
};

module.exports = Email;