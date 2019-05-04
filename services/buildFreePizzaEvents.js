const meetupEvent = require('../models/meetupEvent');

module.exports = apiData => {
    if (!apiData) {
        throw new TypeError('apiData undefined', 'buildFreePizzaEvents.js');
    }

    const { results: events } = JSON.parse(apiData.body);
    if (!events || !events.length) {
        console.log('No events of any kind found.');
        return null;
    }

    const freePizzaEventsData = events.filter(({ description }) => {
        console.log(description);

        return description && description.includes('free pizza')
    });

    return freePizzaEventsData.length ? freePizzaEventsData.map(eventData => meetupEvent(eventData)) : null;
};

