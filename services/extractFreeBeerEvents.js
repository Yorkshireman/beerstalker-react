module.exports = events => {
  if (!events || !events.length) {
    throw new TypeError('Events missing', 'extractFreeBeerEvents.js');
  }

  const freeBeerEvents = [];

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

  return !freeBeerEvents.length ? null : freeBeerEvents;
}
