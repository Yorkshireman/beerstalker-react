const request = require('request');
const { promisify } = require('util');

const promisifiedRequest = promisify(request);

module.exports = (city, apiBaseUrl, apiKey) => {
  
  const path = `${apiBaseUrl}/2/open_events.json`;
  const queryParams = `and_text=true&text=free+beer&country=gb&city=${city}&key=${apiKey}&text_format=plain&order=distance`;

  return promisifiedRequest(`${path}?${queryParams}`)
    .then(data => {
      console.log('Meetup API returned status code:', data.statusCode);
      
      return data;
    })
    .catch(e => console.log(e)); // need to create unified error handler
};
