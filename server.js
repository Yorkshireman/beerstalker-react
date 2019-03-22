const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', (req, res) => {
  res.send('HELLO!!');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`);
});




// customSearch: function(cityName) {
//   var meetupUrl = 'https://api.meetup.com/2/open_events.json?and_text=true&:text&:country&:city&:key&:text_format&:order'

//   var searchForEvents = $resource(
//     meetupUrl,
//     {
//       text_format: "text_format=plain",
//       text: "text=free+beer",
//       country: "country=gb",
//       city: "city=" + cityName,
//       key: 'key=646f252216306e6d712d7c536a3c2565',
//       order: "order=distance",
//       callback: 'JSON_CALLBACK'
//     },
//     { get: { method: 'JSONP' } }
//   );

//   return searchForEvents.get().$promise.then(function (response) {
//     var filteredResults = [];
//     for (index = 0; index < response.results.length; index++) {
//       var result = response.results[index].description;

//       try {
//         result.indexOf('free beer')
//       }
//       catch (err) {
//         $('#error-div').fadeIn(500).delay(8000).fadeOut(1000);
//         break;
//       }

//       if (result.indexOf('free beer') >= 0) {
//         filteredResults.push(response.results[index]);
//       }
//     }

//     if (filteredResults.length === 0) {
//       $('.results').hide();
//       $('#no-results-div').fadeIn(500).delay(5000).fadeOut(1000);
//       return
//     } else {
//       $('.results').show();
//       return filteredResults
//     }
//   });
// },
