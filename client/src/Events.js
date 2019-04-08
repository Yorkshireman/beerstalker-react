import React from 'react';

export default ({ events }) => {
  return (
    <section>
      <h3>Events</h3>
      <>
        {events.map((event, index) => (
          <div className="event" key={index}>{event.name}</div>
        ))}
      </>
    </section>
  );
};
