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
    venue
  } = eventData;
  

  let address1;
  let googleMapsUrl;
  if (venue && venue.address_1 && venue.city) {
    address1 = venue.address_1;
    const q = encodeURI(`${address1} ${venue.city}`);
    googleMapsUrl = `https://maps.google.com?q=${q}`;
  }

  const dateTime = new Date(time + utc_offset);
  return {
    address1,
    dateTime,
    eventUrl,
    googleMapsUrl,
    name
  };
};
