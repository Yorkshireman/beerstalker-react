module.exports = eventData => {
  console.log(eventData);
  
  
  if (!eventData) {
    throw new TypeError('eventData undefined', 'meetupEvent.js');
    
  }

  const {
    event_url: eventUrl,
    name,
    time,
    utc_offset,
    venue: {
      address_1: address1,
      city
    }
  } = eventData;
  

  const dateTime = new Date(time + utc_offset);
  const q = encodeURI(`${address1} ${city}`);
  const googleMapsUrl = `https://maps.google.com?q=${q}`;

  return {
    address1,
    dateTime,
    eventUrl,
    googleMapsUrl,
    name
  };
};
