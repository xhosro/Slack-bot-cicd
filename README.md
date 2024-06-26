@# Slack bots for kubernetes CI/CD

- create a new slack channel #devops

- got to api.slack.come/apps & create a new app & enable a incoming webhook api

- for local development environment we can use a ngrok, for event subscriptions api
  - npm install -g ngrok

- npm init

    package name: (slack-bot-cicd) 
    version: (1.0.0) 0.1.0
    description: slack bot
    entry point: (index.js) app.js
    test command: npm test
    git repository: (https://github.com/xhosro/Slack-bot-cicd.git)
    keywords: slackbot
    author: xhosro
    license: (ISC) 

we need add 2 packages
 - npm install @slack/web-api
 - npm install @slack/events-api


we create a app.js file
 and provide a environment variable for slack signing secret and token that we can find in api.slack.come/apps
    - export SLACK_SINGING_SECRET=
    - export SLACK_TOKEN=

we add two permissions for bot
and then: 
    - node app.js
    Server started on port 3000

enable events subscription in the site

we can use ngrok before we need sign in and then: ngrok http 3000

## docker multi stage JS

