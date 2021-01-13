const port =  process.env.PORT || 3000;
const token = 'lOTKtIjuPG1Qno6ZX5DiqzSbgtKyx_hmsWTo';
const url = `https://whatsapp-zenvia-test.herokuapp.com:${port}/`;



const { Client, WebhookController } = require('@zenvia/sdk');

const client = new Client(token);

const webhook = new WebhookController({
    messageEventHandler: (messageEvent) => {
        console.log('Message event:', messageEvent);
    },
    messageStatusEventHandler: (messageStatusEvent) => {
        console.log('Message status event:', messageStatusEvent);
    },
    port,
    client,
    url,
    channel: 'whatsapp',
});

webhook.on('listening', () => {
    console.log('Webhook is listening ', url);
});

webhook.on('error', (error) => {
    console.error('Error:', error);
});

webhook.init();