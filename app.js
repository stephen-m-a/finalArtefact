const express = require('express');

const app = express();

app.use(express.static('static', ));
// app.use(express.static('static', { extensions: ['index.html'] }));

// app.get('/home', function(req, res){
//     res.render('home', {value: valueCounter});
//      console.log('request was made on: /home');
//  })
 







const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});


