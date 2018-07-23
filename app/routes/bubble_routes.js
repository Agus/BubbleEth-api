var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db){

  app.post('/bubble',(req,res) => {
    console.log(req.body);
    const bubble = { userId: req.body.userId, color: req.body.color};
    db.collection('bubbles').insert(bubble, (err,result) => {
      if (err){
        return res.send({'error': 'Cannot create bubble :('});
      }else{
        return res.send(result.ops[0]);
      }
    })
  })

  app.get('/bubble/:id',(req,res)=>{
    const details = {'_id': new ObjectID(req.params.id)};
    db.collection('bubbles').findOne(details,(err,item)=>{
      if(err){
        return res.send({'error': 'Was that bubble created?'});
      }else{
        return res.send(item);
      }
    })
  })

  app.put('/bubble/:id',(req,res)=>{
    const details = {'_id': new ObjectID(req.params.id)};
    db.collection('bubbles').update(details,req.body,(err,item)=>{
      if(err){
        return res.send({'error': 'Was that bubble created?'});
      }else{
        return res.send(item);
      }
    })
  })

  app.delete('/bubble/:id',(req,res)=>{
    const details = {'_id': new ObjectID(req.params.id)};
    db.collection('bubbles').remove(details,(err,item)=>{
      if(err){
        return res.send({'error': 'That bubble has popped'});
      }else{
        return res.send(item);
      }
    })
  })

};
