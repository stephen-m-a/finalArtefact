const express = require('express');

const app = express();

app.use(express.static('static', ));
// app.use(express.static('static', { extensions: ['index.html'] }));

// app.get('/home', function(req, res){
//     res.render('home', {value: valueCounter});
//      console.log('request was made on: /home');
//  })
 



app.get('/editor', (req, res) => {
  res.sendFile(path.join(initial_path, "editor.html"));
})

// upload link
app.post('/upload', (req, res) => {
  let file = req.files.image;
  let date = new Date();
  // image name
  let imagename = date.getDate() + date.getTime() + file.name;
  // image upload path
  let path = 'public/uploads/' + imagename;

  // create upload
  file.mv(path, (err, result) => {
      if(err){
          throw err;
      } else{
          // our image upload path
          res.json(`uploads/${imagename}`)
      }
  })
})

app.get("/:blog", (req, res) => {
  res.sendFile(path.join(initial_path, "blog.html"));
})

app.use((req, res) => {
  res.json("404");
})




const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});


