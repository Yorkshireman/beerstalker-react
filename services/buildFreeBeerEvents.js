const meetupEvent = require('../models/meetupEvent');
const extractFreeBeerEventsData = require('./extractFreeBeerEventsData');

module.exports = apiData => {
  if (!apiData) {
    throw new TypeError('apiData undefined', 'buildFreeBeerEvents.js');
  }

  const { results: events } = JSON.parse(apiData.body);
  if (!events || !events.length) {
    return null;
  }

  const freeBeerEventsData = extractFreeBeerEventsData(events);
  return freeBeerEventsData &&
    freeBeerEventsData.map(eventData => meetupEvent(eventData));
};
