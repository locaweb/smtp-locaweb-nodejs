// 3rd party test libs
var chai = require('chai');
var expect = require('chai').expect;
var blanket = require('blanket');

// locaweb lib files
var Email = require('../email.js');
var sendMail = require('../index.js');

describe('Email', function() {
    
    it('checa se os atributos do Email são tipos válidos', function() {
        expect(email.subject).to.be.a('string');
        expect(email.from).to.be.a('string');
        expect(email.body).to.be.a('string');
        expect(email.to).to.be.instanceof('array');
        expect(email.cc).to.be.instanceof('array');
        expect(email.bcc).to.be.instanceof('array');
    });
    
    it('checa se email é uma instância da classe Email', function() {
        var email = new Email();
        expect(email).to.be.instanceof(Email);
    })
});

