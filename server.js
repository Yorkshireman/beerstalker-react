const express = require('express');
const request = require('request');

const { promisify } = require('util');
const rp = promisify(request);

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', ({ query: { city } }, res) => {
  const meetupApiKey = process.env.MEETUP_API_KEY;
  const path = `https://api.meetup.com/2/open_events.json?and_text=true&text=free+beer&country=gb&city=${city}&key=${meetupApiKey}&text_format=plain&order=distance`;
  const freeBeerEvents = [];

  rp(path)
  .then(({ body, statusCode }) => {
    console.log('statusCode:', statusCode);

    const events = JSON.parse(body).results || [];

    if (events.length) {
      for (index = 0; index < events.length; index++) {
        const event = events[index].description;

        try {
          event.indexOf('free beer');
        } catch {
          break;
        }

        if (event.indexOf('free beer') >= 0) {
          freeBeerEvents.push(events[index]);
        }
      }
    }

    console.log('============== start ================');
    console.log(JSON.stringify(freeBeerEvents, null, 2));
    console.log('=============== end ===============');

    res.send(freeBeerEvents);
  })
  .catch(e => {
    console.log(e);
    res.send(freeBeerEvents);
  });
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`);
});
