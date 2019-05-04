const search = (city, cb) => {
  return fetch(`free-beer-events?city=${city}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

const searchPizza = (city, cb) => {
  return fetch(`free-pizza-events?city=${city}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    
    return response;
  }

  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  if (response.status === 204) { // handle this somewhere else?
    return null;
  }

  return response.json();
}

const EventsSource = { search, searchPizza };
export default EventsSource;
