import React from 'react';

export default ({ events }) => {
  return (
    <section>
      <h3>Events</h3>
      <>
        {events.map(({ address1, dateTime, eventUrl, name}, index) => (
          <div key={index}>
            <h4 className="event">
              <a href={eventUrl} rel="noopener noreferrer" target="_blank">{name}</a>
            </h4>
            <p className="address1">{address1}</p>
            <p className="dateTime">{dateTime}</p>
          </div>
        ))}
      </>
    </section>
  );
};
