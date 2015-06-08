// 3rd party test libs
var chai = require('chai'),
    expect = require('chai').expect,

// locaweb lib files
    locaweb = require('../index.js'),

    email = new locaweb.Email();

describe('Email object', function() {
    
    it('checa se email é uma instância da classe Email', function() {
        expect(email).to.be.instanceof(locaweb.Email);
    });
        
    it('checa se os atributos do Email são tipos válidos', function() {
        expect(email.subject).to.be.a('string');
        expect(email.from).to.be.a('string');
        expect(email.body).to.be.a('string');
        expect(email.to).to.be.an('array');
        expect(email.cc).to.be.an('array');
        expect(email.bcc).to.be.an('array');
    });
    
    it('checa o método .addSubject', function() {
        email.addSubject('Título da mensagem');
        expect(email.subject).to.equal('Título da mensagem');
    });
    
    it('checa o método .addTo', function() {
        email.addTo('someaddress@provider.com');
        expect(email.to).to.contain('someaddress@provider.com');
    });
    
    it('checa o método .addFrom', function() {
        email.addFrom('sender@provider.com');
        expect(email.from).to.equal('sender@provider.com');
    });
    
    it('checa o método .addCc', function() {
        email.addCc('anothermail@provider.com');
        expect(email.cc).to.contain('anothermail@provider.com');
    });
    
    it('checa o método .addBcc', function() {
        email.addBcc('blindcopy@provider.com');
        expect(email.bcc).to.contain('blindcopy@provider.com');
    });
    
    it('checa o método .addBody', function() {
        email.addBody('Corpo da mensagem. Pode ter <strong>HTML<\strong> mas \" duplas devem ser escapadas com \.');
        expect(email.body).to.equal('Corpo da mensagem. Pode ter <strong>HTML<\strong> mas \" duplas devem ser escapadas com \.');
        expect(email.body.length).to.equal(87);
    });
    
    it('checa o método .addHeaders', function() {
        email.addHeaders({'Content-Type': 'text/plain'});
        expect(email.headers).to.be.an('object');
        expect(email.headers['Content-Type']).to.equal('text/plain');
    })
    
    it('checa se o método .addHeaders dá erro com argunto errado', function() {
        var errorMessage = new ReferenceError('O header deve ser um objeto');
                
        expect(function () {
            email.addHeaders('Content-Type: text/plain')
        }).to.throw(Error, errorMessage);
    })
});