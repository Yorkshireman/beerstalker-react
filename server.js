const express = require('express');
const request = require('request');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', ({ query: { city } }, res) => {
  const meetupApiKey = process.env.MEETUP_API_KEY;
  const path = `https://api.meetup.com/2/open_events.json?and_text=true&text=free+beer&country=gb&city=${city}&key=${meetupApiKey}&text_format=plain&order=distance`;
  request(path, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);

    const { results } = JSON.parse(body);
    const filteredResults = [];

    for (index = 0; index < results.length; index++) {
      const result = results[index].description;

      try {
        result.indexOf('free beer');
      } catch {
        break;
      }

      if (result.indexOf('free beer') >= 0) {
        filteredResults.push(results[index]);
      }
    }

    console.log('============== start ================');
    console.log(JSON.stringify(filteredResults, null, 2));
    console.log('=============== end ===============');

    res.send(filteredResults);
  });
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`);
});
