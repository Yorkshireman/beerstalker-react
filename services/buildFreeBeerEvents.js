const meetupEvent = require('../models/meetupEvent');

module.exports = apiData => {
  if (!apiData) {
    throw new TypeError('apiData undefined', 'buildFreeBeerEvents.js');
  }

  const { results: events } = JSON.parse(apiData.body);
  if (!events || !events.length) {
    return null;
  }

  const freeBeerEventsData = events.filter(({ description }) => {
    console.log(description);
    
    return description && description.includes('and')
  });

  return freeBeerEventsData.length ? freeBeerEventsData.map(eventData => meetupEvent(eventData)) : null;
};
