const mongoose = require("mongoose");
const fs = require('fs');
const path = require('path');




mongoose.connect(

  "mongodb://localhost:27017/userdata",

  {

    useNewUrlParser: true

  }

  

  ).then(success => {
    console.log("Connection succeeded");
    bindmodels();
  }).catch(err => {

   
      console.log("Error in connection: " + err);

    
  });


 bindmodels = function() {
  const __dirname = path.resolve(path.dirname('./')); 
 let pathTomodel = path.join(__dirname, 'public','model');
 if(pathTomodel){
  let fileArray =  fs.readdirSync(pathTomodel).filter(file=> file.indexOf('.')).map(file=>{
                      require(`${pathTomodel}/${file}`);
                      return file;
                     });
                     return fileArray;
 }
 
}





  