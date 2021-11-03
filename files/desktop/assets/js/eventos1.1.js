$(document).ready(function () {
    $("body").on("click", ".btn-quero-participar", function (e) {
        e.preventDefault();
        
        var form = $(".form-cadastro-email");
        var nextProcess = true;
        $("#message").html("");
        
        form.find('input[required]').each(function(k,v){
            if($(this).val() == ''){
                nextProcess = false;
            }
        });
        
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if(nextProcess == false){
            $("#message").html("<div class=\"alert alert-danger\">Existem campos vazios no formulário</div>");
        }else if(!re.test(form.find('input[name="email"]').val())){
            $("#message").html("<div class=\"alert alert-danger\">Endereço de e-mail inválido</div>");
        }else if(!form.find('#checktermo').is(':checked')){
            $("#message").html("<div class=\"alert alert-danger\">Você antes deve aceitar os termos do regulamento</div>");
        }else{
            $.ajax({
                url: form.attr("action"),
                data: form.serialize(),
                type: form.attr("method"),
                dataType: 'json',
                success: function (response) {
                    if (response.status === "success") {
                        $("#message").html("<div class=\"alert alert-success\" role=\"alert\">Seus dados forão enviados com sucesso. Verifique mais informações em seu e-mail.</div>");
                        form.find('input').val('');
                        
                        form.html("<div class=\"jumbotron\"><h1>Enviado!</h1><p>Seu dados foram enviados com sucesso!</p></div>");
                        
                        if($('#step2').length > 0){
                            $("html, body").animate({ scrollTop: $('#step2').offset().top-30 }, 1000);
                        }
                        
                        if(typeof ga == "function"){
                            ga('send', 'event', 'Promocoes', 'Depoimento devolve dinheiro', 'Confirmação na promoção');
                        }
                        
                    } else {
                        $("#message").html("<div class=\"alert alert-danger\" role=\"alert\">Houve algum problema ao salvar seu e-mail. Atualize a página e tente novamente.</div>");
                    }
                },
                error: function(){
                    $("#message").html("<div class=\"alert alert-danger\" role=\"alert\">Houve alguma falha inesperada ao tentar processar esta solicitação. Atualize a página e tente novamente.</div>");
                },
                fail: function(){
                    $("#message").html("<div class=\"alert alert-danger\" role=\"alert\">Falha ao tentar processar solicitação. Verifique sua conexão com a internet, caso o erro persista entre em contato com o nosso suporte informando o ocorrido.</div>");
                }
            });
            setTimeout(function () {
                $("#message").html("");
                $(".form-cadastro-email input").val("");
            }, 5000);
        }
    })
})

