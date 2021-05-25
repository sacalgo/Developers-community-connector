const express =require('express');

const app =express();

app.get('/', (req, res)=>res.send('Server APi is running ... '));


const PORT=process.env.PORT||7000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))