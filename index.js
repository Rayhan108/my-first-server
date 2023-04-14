const express = require('express');
var cors = require('cors')
const phones = require('./phones.json');
const app =express();
port=5000;
app.use(cors())
app.get('/',(req,res)=>{
res.send('Hellow world!!!');
})
app.get('/phones',(req,res)=>{
res.send(phones);
})
app.get('/phones/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    // console.log(id);
  const phone =  phones.find(phone=>phone.id === id) || {}
res.send(phone);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })