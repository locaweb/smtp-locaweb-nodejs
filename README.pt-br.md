# Locaweb SMTP NodeJS

Trata-se de uma bibliotec NPM para fazer uso da API de envio do [serviço de email transacional da Locaweb](http://www.locaweb.com.br/produtos/smtp-locaweb.html) com NodeJS.

**ATENÇÃO:** se você deseja enviar os seus emails utilizando o protocolo SMTP, ao invés da API REST, use uma biblioteca SMTP como o [Nodemailer](http://www.nodemailer.com), para enviar suas mensagens.

## Instalação e Configuração

Instale normalmente, através do NPM digitando:

```shell
npm i locaweb-smtp-nodejs
```

Depois disso, é preciso criar um arquivo `.env` na pasta raiz da sua aplicação contendo seu token de uso da API, conforme mostrado abaixo:

```
TOKEN=yourAccountToken
```

Não são permitidos espaços. O token pode ser encontrado acessando o [painel](https://smtplw.com.br/panel/settings/api) do produto.

## Uso

Em seguida, faça o "import" do pacote em sua aplicação:

```js
var locaweb = require('locaweb-smtp-nodejs');
```

Você pode criar um novo objeto email ao invocar o construtor Email e usar os seguintes métodos para adicionar os atributos:

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

Outra forma possível é passar um objeto ao construtor. A vantagem desta estratégia é que você pode passar múltiplos destinatários, CCs, BCCs como arrays:

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

Apenas os primeiros 4 atributos são obrigatórios. Para mais informações, consulte a documentação oficial em http://developer.locaweb.com.br/documentacoes/smtp.