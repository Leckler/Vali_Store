$(document).ready(function(){
    $("#btnEnviar").click(function(){
        var nombre = $("#pnombre").val();
        var apellido = $("#apaterno").val();
        var edades = $("#edad").val();
        var correos = $("#correo").val();
        var fono = $("#telefono").val();
        var genero = $("#optGenero").val();
        var clave = $("#pass").val();
        var sobrenombre = $("#nombreU").val();
        var team = $("#optEquipo").val();
        var restrictora = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+/;

        if(nombre == ""){
            $("#Verify1").fadeIn();
            return false;
        }else{
            $("#Verify1").fadeOut();
            if(apellido == ""){
                $("#Verify2").fadeIn();
                return false;
            }else{
                $("#Verify2").fadeOut();
                if(edades < 18){
                    $("#Verify3").fadeIn();
                    return false;
                }else{
                    $("#Verify3").fadeOut();
                    if(correos == "" || !restrictora.test(correos)){
                        $("#Verify4").fadeIn();
                        return false;
                    }else{
                        $("#Verify4").fadeOut();
                        if(telefono <=0 && telefono >999999999){
                            $("#Verify5").fadeIn();
                            return false;
                        }else{
                            $("#Verify5").fadeOut();
                            if(genero){

                            }else{
                                $("#Verify6").fadeOut();
                                if(clave = ""){
                                    $("#Verify7").fadeIn();
                                    return false;
                                }else{
                                    $("#Verify7").fadeOut();
                                }
                            }
                        }
                    }
                }
            }
        }
        
    })
})