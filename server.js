const express = require('express');
const extractFreeBeerEvents = require('./services/extractFreeBeerEvents');
const getMeetupApiData = require('./services/getMeetupApiData');

require('dotenv').config();

const app = express();
const meetupApiKey = process.env.MEETUP_API_KEY;

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', async ({ query: { city } }, res) => {
  const meetupApiData = await getMeetupApiData(city, meetupApiKey);
  const events = JSON.parse(meetupApiData).results || [];
  const freeBeerEvents = extractFreeBeerEvents(events);
  res.send(freeBeerEvents);
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`);
});
