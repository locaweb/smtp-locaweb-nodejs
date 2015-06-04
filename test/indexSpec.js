// 3rd party test libs
var request = require('request');
var chai = require('chai');
//var should = require('chai').should;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

// locaweb lib files
var locaweb = require('../index.js');


var mensagem = {
    from: 'sender@email.com',
    to: [ 'first@provider.com', 'second@provider.com' ],
    subject: 'A nice and normal email title!!!',
    body: 'Some cool and short body.'
}


describe('sendMail function', function() {
    
    var spy = sinon.spy(locaweb.sendMail);
    var email = new locaweb.Email(mensagem);
    var response = [201,
                    { 'Location': 'https://api.smtplw.com.br/v1/messages/xx',
                     'Content-Type': 'application/json' },
                    'ok'];
    var server = sinon.fakeServer.create();
    server.respondImmediately = true;
    server.respondWith('https://api.smtplw.com.br/v1/messages', response);
 
    it('sends the JSON to the API and returns location', function() {
        spy(email);
        
        spy.should.have.been.calledWith(email);
        spy.should.have.been.calledWithMatch(mensagem);
        spy.should.have.returned(response[1].location);
    })
});