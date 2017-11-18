// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

exports.sendPush = functions.database.ref('/push').onWrite(event => {

  // let projectStateChanged = false;
  // let projectCreated = false;
  let value = event.data.val();

  console.log(event.data);

  var topic = "All";

  let payload = {
    notification: {
      title: 'teste',
      body: 'teste',
      sound: 'default',
      badge: '1'
    }
  };

  admin.messaging().sendToTopic(topic, payload).then(function(response) {
    // See the MessagingTopicResponse reference documentation for the
    // contents of response.
    console.log("Successfully sent message:", response);
  }).catch(function(error) {
    console.log("Error sending message:", error);
  });
});

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.sendEmailTestemunho = functions.database.ref('/testemunhos/{id}').onCreate(event => {
  const snapshot = event.data;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Núcleo da Fé <noreplycontato@gmail.com>'
  };

  mailOptions.to = val.email;
  mailOptions.subject = 'Recebemos seu testemunho!';
  mailOptions.html = 'Olá ' + val.nome + ',<br><br>Nós recebemos o seu testemunho! Gostaríamos de agradecer por compartilhar as bençãos que o Senhor tem derramado sobre sua vida!<br> Desejamos que mais milagres como estes te acompanhem em cada novo dia!<br><br>Núcleo da Fé';
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Novo email enviado para:', mailOptions.to);
  }).catch(error => {
    console.error('Error ao enviar email:', error);
  });

  mailOptions.to = "luszczynski@gmail.com,ministerionucleodafe@gmail.com";
  mailOptions.subject = 'Novo testemunho recebido!';
  mailOptions.html = 'Um novo testemunho foi enviado por meio do aplicativo da igreja. Veja os dados abaixo: <br><br> Nome: ' + val.nome + '<br>Email: ' + val.email + '<br>Telefone: ' + val.telefone + '<br>Testemunho: ' + val.testemunho;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Novo email enviado para:', mailOptions.to);
  }).catch(error => {
    console.error('Error ao enviar email:', error);
  });
});

exports.sendEmailPedidoOracao = functions.database.ref('/pedidos-oracao/{id}').onCreate(event => {
  const snapshot = event.data;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Núcleo da Fé <noreplycontato@gmail.com>'
  };

  mailOptions.to = val.email;
  mailOptions.subject = 'Recebemos seu pedido!';
  mailOptions.html = 'Olá ' + val.nome + ',<br><br>Nós recebemos o seu pedido de oração! Acreditamos que a oração é uma poderosa ferramenta para tocar o coração de Deus. Encaminharemos o seu pedido de oração para a nossa equipe de intercessores. Eles se unirão a você em oração.<br><br>Núcleo da Fé';

  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Novo email enviado para:', mailOptions.to);
  }).catch(error => {
    console.error('Error ao enviar email:', error);
  });

  // The user unsubscribed to the newsletter.
  mailOptions.to = "luszczynski@gmail.com,ministerionucleodafe@gmail.com";
  mailOptions.subject = 'Nova oração recebida!';
  mailOptions.html = 'Um novo pedido de oração foi recebido por meio do aplicativo da igreja. Veja os dados abaixo: <br><br> Nome: ' + val.nome + '<br>Email: ' + val.email + '<br>Telefone: ' + val.telefone + '<br>Pedido Oração: ' + val.pedido;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Novo email enviado para:', mailOptions.to);
  }).catch(error => {
    console.error('Error ao enviar email:', error);
  });
});

exports.sendEmailParticiparMinisterio = functions.database.ref('/ministerios/{id}/interessados').onWrite(event => {
  const snapshot = event.data;
  const val = snapshot.val();

  // Exit when the data is deleted.
  if (!event.data.exists()) {
    return;
  }

  //var idMinisterio = event.params.id;
  return event.data.adminRef.parent.child('emailsLideres').once('value').then((snapshot) => {
      var emails = snapshot.val();

      const mailOptions = {
        from: 'Núcleo da Fé <noreplycontato@gmail.com>'
      };

      mailOptions.to = emails;
      mailOptions.subject = 'Recebemos seu pedido!';
      mailOptions.html = 'Olá ' + val.nome + ',<br><br>Nós recebemos o seu pedido de oração! Acreditamos que a oração é uma poderosa ferramenta para tocar o coração de Deus. Encaminharemos o seu pedido de oração para a nossa equipe de intercessores. Eles se unirão a você em oração.<br><br>Núcleo da Fé';

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('Novo email enviado para:', mailOptions.to);
      }).catch(error => {
        console.error('Error ao enviar email:', error);
      });

      // mailOptions.to = "luszczynski@gmail.com";
      // mailOptions.subject = 'Nova oração recebida!';
      // mailOptions.html = 'Um novo pedido de oração foi recebido por meio do aplicativo da igreja. Veja os dados abaixo: <br><br> Nome: ' + val.nome + '<br>Email: ' + val.email + '<br>Telefone: ' + val.telefone + '<br>Pedido Oração: ' + val.pedido;
      // return mailTransport.sendMail(mailOptions).then(() => {
      //   console.log('Novo email enviado para:', mailOptions.to);
      // }).catch(error => {
      //   console.error('Error ao enviar email:', error);
      // });
  });
});

exports.sendEmailParticiparPequenoNucleo = functions.database.ref('/pequenos-nucleos/{id}/interessados').onWrite(event => {
    const snapshot = event.data;
    const val = snapshot.val();

    // Exit when the data is deleted.
    if (!event.data.exists()) {
      return;
    }

    return event.data.adminRef.parent.child('emailsLideres').once('value').then((snapshot) => {
        var emails = snapshot.val();

        const mailOptions = {
          from: 'Núcleo da Fé <noreplycontato@gmail.com>'
        };

        mailOptions.to = emails;
        mailOptions.subject = 'Recebemos seu pedido!';
        mailOptions.html = 'Olá ' + val.nome + ',<br><br>Nós recebemos o seu pedido de oração! Acreditamos que a oração é uma poderosa ferramenta para tocar o coração de Deus. Encaminharemos o seu pedido de oração para a nossa equipe de intercessores. Eles se unirão a você em oração.<br><br>Núcleo da Fé';

        return mailTransport.sendMail(mailOptions).then(() => {
          console.log('Novo email enviado para:', mailOptions.to);
        }).catch(error => {
          console.error('Error ao enviar email:', error);
        });

        // mailOptions.to = "luszczynski@gmail.com";
        // mailOptions.subject = 'Nova oração recebida!';
        // mailOptions.html = 'Um novo pedido de oração foi recebido por meio do aplicativo da igreja. Veja os dados abaixo: <br><br> Nome: ' + val.nome + '<br>Email: ' + val.email + '<br>Telefone: ' + val.telefone + '<br>Pedido Oração: ' + val.pedido;
        // return mailTransport.sendMail(mailOptions).then(() => {
        //   console.log('Novo email enviado para:', mailOptions.to);
        // }).catch(error => {
        //   console.error('Error ao enviar email:', error);
        // });
    });
});
