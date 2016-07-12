const http = require('http');
const cs = require('./node_modules/concat-stream');
const url = process.argv[2];


http.get(url, (res) => {
  res.pipe(cs((data) => {
    data = data.toString();
// arr.push(data);
    console.log(data.length);
    console.log(data);
  })
  );
});
