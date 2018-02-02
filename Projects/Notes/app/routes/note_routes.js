const contentType = 'Content-type';
const json = 'application/json';
const collectionName = 'notes';

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db) {
// Create a note
    app.post('/note', function(req,res){
      const note = {title:req.body.title, text:req.body.note};
      // res.writeHead(201,{contentType : json});
      console.log(JSON.stringify(req.body));
      db.collection(collectionName).insert(note, function(err, result){
        if(err) {
          res.send('Error');
        } else {
          res.send(result.ops[0],201);
        }
      });
    });

//Fetch all notes
    app.get('/notes', function(req, res){
      db.collection(collectionName).find({}).toArray(function(err, result) {
        if(err) {
            res.send('Error');
        } else {
          console.log(result);
          res.send(result,200);
        }
      });
    });

// Fetch note by id
  app.get('/note/:id', function(req, res){
    const id = new ObjectID(req.params.id);
    db.collection(collectionName).findOne({'_id':id},function(err, result) {
      if(err) {
          res.send('Error');
      } else {
        console.log(result);
        res.send(result,200);
      }
    });
  });

  // Update by id
    app.patch('/note/:id', function(req, res){
      const query =  {'_id':new ObjectID(req.params.id)};
      const note = req.body;
      db.collection(collectionName).update(query, {$set:note}, function(err, result) {
        if(err) {
            res.send('Error');
        } else {
          console.log('Change:'+note);
        }
      });

      db.collection(collectionName).findOne(query,function(err, result) {
        if(err) {
            res.send('Error');
        } else {
          res.send(result,200);
        }
      });

    });

    // Delete note by id
      app.delete('/note/:id', function(req, res){
        const id = new ObjectID(req.params.id);
        db.collection(collectionName).remove({'_id':id},function(err, result) {
          if(err) {
              res.send('Error');
          } else {
            // console.log('Deleted');
            const resp = {'status':200,'message':'Successfully deleted note with id'+ req.params.id};
            res.status(200).send(JSON.stringify(resp));
          }
        });
      });



};
