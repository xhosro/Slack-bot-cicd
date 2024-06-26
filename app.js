const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

if (!slackSigningSecret) {
    throw new Error('SLACK_SIGNING_SECRET environment variable is not set');
  }

const slackToken = process.env.SLACK_TOKEN;
const port = process.env.SLACK_PORT || 3000;

const slackEvents = createEventAdapter(slackSigningSecret);  //for listening to messages
const slackClient = new WebClient(slackToken); //for posting messages

slackEvents.on('app_mention', (event) => {
    console.log(`Got message from user ${event.user}: ${event.text}`);
    (async () => {
      try {
        await slackClient.chat.postMessage({ channel: event.channel, text: `Hello <@${event.user}>! :tada:` })
      } catch (error) {
        console.log(error.data)
      }
    })();
  });
  
  slackEvents.on('error', console.error);
  
  slackEvents.start(port).then(() => {
    console.log(`Server started on port ${port}`)
  });
