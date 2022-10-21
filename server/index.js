const express = require('express');
const mongoose = require('mongoose');
 const authRouter = require('./auth');
const PORT =3005;
const DB ="mongodb+srv://Bilal:9048539347a@cluster0.mzeskwl.mongodb.net/?retryWrites=true&w=majority";
const app = express();

 app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(() => {
  console.log('Connection Successful');
}).catch(e =>{
    console.log(e);
});


app.listen(PORT, "0.0.0.0" , () => {
    console.log('connected at port ' +PORT);
})