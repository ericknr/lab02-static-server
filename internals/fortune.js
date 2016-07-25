 //Cargando el driver de Mongodb que
 //me permitira conectarme a la base de datos

 var mongodb = require ("mongodb");

 //Cargo al cliente de driver

 var mongoClient = mongodb.MongoClient;

 module.exports = {
      "getFortune" : function(cb){
          //conectando el cliente a la base de datos fortune
          mongoClient.connect("mongodb://127.0.0.1:27017/fortune",
          function (err, db) {
              if(err){
                  console.log("Error al conectarse a" +
                  "la base de datos" +
                  "mongodb://127.0.0.1:27017/fortune");
                  var fortunePaper = {
    "mensaje":
     "La honestidad es un regalo caro, no lo esperes de gente barata"
 };
           


          // Convirtiendo el fortunePaper de objeto
          // a su version en string

        var fortunePaperResponse = JSON.stringify(fortunePaper);
          // Ejecuto el callback (cb) pasandole
          // como parametro el fortunepaper string
 
         //cb(fortunePaperResponse);
       }else{
           //obtengo la collection con la que quiero trabajar
           var papersCollection = db.collection("papers");
           //Consulto todos los documentos de mi coolleccion
           var objetoResultado = papersCollection.find({});

           //parseo el objetoResultado en un arreglo
           objetoResultado.toArray(function (err, papers) {
               var fortunePaperResponse = 
               JSON.stringify(papers[0]);
               //cerrar la conexion entre el cliente
               //y la base de datos

               db.close()
               //Invoco al cb pasadole como paramtero
               //la respuesta
               cb(fortunePaperResponse); 
           })

       }
          });  
    }

  };
  // var fortunePaper = {
  //   "mensaje":
    // "La honestidad es un regalo caro, no lo esperes de gente barata"
// };