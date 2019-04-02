const express = require('express');
const buildFreeBeerEvents = require('./services/buildFreeBeerEvents');
const getMeetupApiData = require('./services/getMeetupApiData');

require('dotenv').config();
const environment = process.env.NODE_ENV;
const meetupApiKey = process.env.MEETUP_API_KEY;
const port = process.env.PORT;

const app = express();

app.set('port', port || 3001);

if (environment === 'production') {
  app.use(express.static('client/build'));
}

app.get('/free-beer-events', async ({ query: { city } }, res) => {
  const meetupApiData = await getMeetupApiData(city, meetupApiKey);
  const freeBeerEvents = buildFreeBeerEvents(meetupApiData);
  if (freeBeerEvents) {
    res.send(freeBeerEvents);
  } else {
    res.sendStatus(204);
  }
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`);
});
