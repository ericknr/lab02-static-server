// Manejadores de rutas virtuales
var fortune = require("./fortune");
 var fechaDeNacimiento = new Date(1981,10,22,1,45);
 module.exports = {
     "/edad/erick-navarro" : function(req, res){
         res.writeHead(200,{
             "Content-Type" : "application/json"
         });
         // Calculo la edad
         var hoy = new Date();
         var age = 
         Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
         // Armando el json
         var objetoRespuesta = {
             "edad" : age
         };
         var jsonResponse = 
         JSON.stringify(objetoRespuesta);
         // Envio la respuesta al cliente
         res.end(jsonResponse); 
     }, 
      "/getfortune": function(req, res){
          var fortunePaper = {

              "mensaje" :
              "La Honestidad es un regalo caro, no lo esperes de gente baratisima"
          };
         //se configura el encabezado de respuesta
         //HTTP
          res.writeHead(200,{
              "Content-Type" : "application/json"
          });
          //Parseando a string al objetoRespuesta
          //de respuesta
 var jsonResponse = JSON.stringify(fortunePaper);
 fortune.getFortune(function (fortunePaper) {
     
 })


 //Respondemos el Objeto

 res.end (jsonResponse);

      }
 }; 