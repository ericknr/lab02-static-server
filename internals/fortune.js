// 1. Cargando el Driver de Mongodb que
// me permitira conectarme a la base de datos
var mongodb = require("mongodb");
// 2. Cargo al cliente de driver
var mongoClient = mongodb.MongoClient;

module.exports = {
    "getFortune" : function(cb){
        // Conectando el cliente a la base de datos fortune
        //var connectionString = "mongodb://127.0.0.1:27017/fortune";
        //var connectionString = 
        //"mongodb:///fortune";  
        mongoClient.connect("mongodb://mensajesfortuna:lalombris11@ds042379.mlab.com:42379/mensajesfortuna",
       // mongoClient.connect("",
        function(err, db){
            if(err){
                console.log("> ERROR al conectarse a" +
                " la base de datos: "+ "mongodb://127.0.0.1:27017/fortune");
                var fortunePaper = {
                    "mesagge":
                    "La honestidad es un regalo caro, no lo esperes de gente barata"
                };
                // Convirtiendo el fortunePaper de objeto
                // a su version en string
                var fortunePaperResponse = JSON.stringify(fortunePaper);
                
                // Ejecuto el callback (cb) pasandole
                // como parametro el fortunepaper string
                cb(fortunePaperResponse);
            }else{
                // Obtengo la coleccion con la que quiero trabajar
                var papersCollection = 
                db.collection("papers");
                
                // Consulto todos los documentos de mi coleccion
                var objetoRestultado = 
                papersCollection.find({});

                // Parseo el objeto resultado en un arreglo
                objetoRestultado.toArray(function(err, papers){
                    // Obtengo un indide aleatorio
                    // contemplando como min = 1
                    // Y como max = la logitud de arreglo papers
                    var randomIndex = 
                    getRandomArbitrary(1, papers.length);
                    console.log("> RandomIndex calculated: " + randomIndex);
                    var fortunePaperResponse = 
                    JSON.stringify(papers[randomIndex]);
                    // Cerrar la conexion entre el cliente
                    // y la base de datos
                    db.close()
                    // Invoco al cb pasandole como parametro
                    // la respuesta
                    console.log("> La fortuna es: " + fortunePaperResponse);
                    cb(fortunePaperResponse);
                });
            }
        });
    }
};

// Devuelve un número aleatorio entre min (ambos inclusive ) y máximo (exclusivo )

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




