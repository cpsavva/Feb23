# Feb23


In express, calls are linear so if you have a general task and a specific task, you should start with specific then go general




npm nodemon -g 
this will allow you to update the files without having to cut off the server






app.get('/:a/:b/:c/:d/', function(req, res) {
  console.log('im here!');
  console.log(req.params);
  console.log(req.query);
});

localhost:3000/aaa/bb/ccc/ddd?apikey=1234&searchTerm=cats