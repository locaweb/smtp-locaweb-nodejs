# SMTP Locaweb NodeJS

Leia a versão em português no [README.pt-br.md](README.pt-br.md).

This is a NPM library to make usage of [Locaweb transactional email service](http://www.locaweb.com.br/produtos/smtp-locaweb.html) API with NodeJS.

**WARNING:** if you wish to send email using the SMTP protocol, instead of the REST API, use a SMTP library such as [Nodemailer](http://www.nodemailer.com) to send your messages.

## Instalation and Configuration

Install it as usual, with NPM package manager by typing:

```shell
npm i smtp-locaweb-nodejs
```

After that, you must create a `.env` file on the root folder of your application with your account's API token, just like show below:

```
TOKEN=yourAccountToken
```

No spaces are allowed. The token can be found by accessing the product's [dashboard](https://smtplw.com.br/panel/settings/api).

## Usage

Later, just require the package on your application:

```js
var locaweb = require('smtp-locaweb-nodejs');
```

You can create a new email object involking the Email constructor and using the following methods to populate it:

```js
var email = new locaweb.Email();

email.addTo('address@provider.com');
email.addSubject('Email title!!!');
email.addFrom('noreply@yourdomain.com');
email.addBody('A cool and useful content.');
email.addCc('optionalcc@address.com');
email.addBcc('optionalbcc@address.com');
email.addHeaders({x-source: api});

locaweb.sendMail(email);
```

Another possible way is passing an object to the constructor. The advantage to this strategy is that you can pass multiples recipients, CCs, BCCs in an array:

```js
message = {
    to: ['addess1@provider.com', 'address2@provider.com', 'addressN@provider.com'],
    subject: 'Email title!!!',
    from: 'noreply@yourdomain.com',
    body: 'A cool and useful content.',
    cc: ['optional@address.com']
}

var email = new locaweb.Email(message);

locaweb.sendMail(email);
```

Only the first 4 attributes are mandatory, the others are all optional. For more in-depth information, see the official documentation at http://developer.locaweb.com.br/documentacoes/smtp.
