$(document).ready(function(){
    $("#boton2").click(function(){
        var usuario = $("#nombre").val();
        var entrada = $("#clave").val();

        var enlace = true;
        if(usuario.length == 0){
            enlace = false;
        }

        if(entrada.length < 8){
            enlace = false;
        }

        if (enlace){
            $("#alerta").attr("hidden", false)
            $("#alerta").attr("class", "alert alert-success col-md-3")
            $("#resultado").text("Enlace confirmado")

        }else{
            $("#alerta").attr("hidden", false)
            $("#alerta").attr("class", "alert alert-danger col-md-3")
            $("#resultado").text("Enlace no confirmado")

        }

        if(enlace == true){
            window.location.href = "http://127.0.0.1:5500/(HTML)/Home.HTML";
        }

    })
    $("#nombre").blur(function(){
        var usuario=$("#nombre").val();
        if(usuario.length==0){
            $("#nombre").css("border","3px solid red")
            alert("Este campo no puede estar vacio")
        }else{
            $("#nombre").css("border","1px solid lightgrey")
        }
    })
})