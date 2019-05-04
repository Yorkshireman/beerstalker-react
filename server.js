const express = require('express');
const buildFreeBeerEvents = require('./services/buildFreeBeerEvents');
const buildFreePizzaEvents = require('./services/buildFreePizzaEvents');
const getMeetupApiData = require('./services/getMeetupApiData');

require('dotenv').config();
const environment = process.env.NODE_ENV;
const meetupApiBaseUrl = process.env.MEETUP_API_BASE_URL;
const meetupApiKey = process.env.MEETUP_API_KEY;
const port = process.env.PORT;

const app = express();

app.set('port', port || 3001);

if (environment === 'production' || environment === 'staging') {
  app.use(express.static('client/build'));
}

app.get('/free-beer-events', async ({ query: { city } }, res) => {
  const meetupApiData = await getMeetupApiData(city, meetupApiBaseUrl, meetupApiKey);
  const freeBeerEvents = buildFreeBeerEvents(meetupApiData);
  if (freeBeerEvents) {
    console.log('Number of free beer events found: ', freeBeerEvents.length);
    res.send(freeBeerEvents);
  } else {
    console.log('No free beer events found.');
    res.sendStatus(204);
  }
});

app.get('/free-pizza-events', async ({ query: { city } }, res) => {
  const meetupApiData = await getMeetupApiData(city, meetupApiBaseUrl, meetupApiKey);
  const freePizzaEvents = buildFreePizzaEvents(meetupApiData);
  if (freePizzaEvents) {
    console.log('Number of free pizza events found: ', freePizzaEvents.length);
    res.send(freePizzaEvents);
  } else {
    console.log('No free pizza events found.');
    res.sendStatus(204);
  }
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`);
});
