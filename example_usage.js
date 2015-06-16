var locaweb = require('smtp-locaweb-nodejs')

var email = new locaweb.Email()

email.addTo('email_address@provider.com')
email.addSubject('Email title!!!')
email.addFrom('noreply@yourdomain.com') // must have been previously authorized on products's dashboard
email.addBody('A cool and useful content.')
email.addCc('optional@address.com')

locaweb.sendMail(email)

// another option is passing an object with all the right atributes to the constructor
message = {
  to: 'email_address@provider.com',
  subject: 'Email title!!!',
  from: 'noreply@yourdomain.com', // must have been previously authorized on products's dashboard
  body: 'A cool and useful content.',
  cc: 'optional@address.com'
}

var email2 = new locaweb.Email(message)

locaweb.sendMail(email2)
