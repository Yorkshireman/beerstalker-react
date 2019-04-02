const extractFreeBeerEvents = require('./extractFreeBeerEvents');

module.exports = apiData => {
  if (!apiData) {
    throw new TypeError('apiData undefined', 'buildFreeBeerEvents.js');
  }

  const { results: events } = JSON.parse(apiData.body);

  if (!events || !events.length) {
    return null;
  }

  return extractFreeBeerEvents(events);
};
