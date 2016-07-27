 function getFortuneFromServer(){
     // Realizando la solicitud get en AJAX
     $.get("/getfortune","", function(data, status){
         console.log("> " +  typeof(data));
         console.log("> Mensaje: " + typeof(data.mesagge));
         console.log("> Estatus de respuesta: " + status);
         swal({
             title: "¡TU FORTUNA!",
             text: data.mesagge,
              imageUrl: "img/gl.png"
          });
      },"json");
 
 }
 

 ;