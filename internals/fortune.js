var fortunePaper = {
    "mensaje" :
    "La honestidad es un regalo caro, no lo esperes de gente baratisima"

};

module.expots = {
"getFottune" : function (cb) {
                //Convirtiendo el fortunePaper de objeto
                //a su version en string

            fortunePaper = JSON.stringify(fortunePaper);

            //Ejecuatndo el callback (cb) pasandole
            // como parametros el fortunePaper string
            cb(fortunePaper);   

}

}