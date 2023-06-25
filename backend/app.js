// import cors from 'cors';
// const express = require('express');
// const app = express();
// const PORT = 3000;
// app.use((req, res, next)=>{
//     res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
//     console.log('First middleware');
//     next();
// });
// let corsoptions={
//     origin: 'http://localhost:4200',
//     methods: 'GET, PUT, POST, DELETE, PATCH',
//     preflightContinue : false,
//     optionsSuccessStatus: 200

// }
// app.use(cors(corsoptions))



// // error handler
// app.use((err, req, res, next) => {
//     res.status(400).send(err.message)
//   })

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
//   app.post('api/user/signup', (req, res) => {
//     res.send('Got a POST request')
//   })
//   app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
//   })
//   app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
//   })
//   app.listen(PORT,()=>console.log(`server running on port ${PORT}`))