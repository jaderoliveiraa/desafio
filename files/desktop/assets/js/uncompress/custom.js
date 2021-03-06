$(function(){
    'use strict';
    
    $.pnotify.defaults.styling = "bootstrap3";
    
    // BEGIN AJAX DEFAULT
    $(document).ajaxStart(function() {
        $(".loading").show();
    });
    
    // END AJAX DEFAULT
    $(document).ajaxStop(function() {
        $(".loading").hide();
    });
    
    if($(".tp-banner").length > 0){
        $(".tp-banner").removeClass("hidden"); 
        $('.carousel').carousel();
    }
    
    if($("#dateCountdown").length > 0){
        if($("#dateCountdown").TimeCircles().getTime() < 0){
            $("#dateCountdown").TimeCircles().end().hide();
            $(".fields").hide().remove();
            $(".alert-end").slideDown();
        }else{ 
            $("#dateCountdown").TimeCircles({
                "animation": "smooth",
                "bg_width": 1,
                "fg_width": 0.02,
                "circle_bg_color": "#EBEBEB",
                "time": {
                    "Days": {
                        "text": "Dias",
                        "color": "#FFCC66",
                        "show": true
                    },
                    "Hours": {
                        "text": "Horas",
                        "color": "#99CCFF",
                        "show": true
                    },
                    "Minutes": {
                        "text": "Minutos",
                        "color": "#BBFFBB",
                        "show": true
                    },
                    "Seconds": {
                        "text": "Segundos",
                        "color": "#FF9999",
                        "show": true
                    }
                }
            });

            var time = setInterval(function(){
                if($("#DateCountdown").TimeCircles().getTime() < 0){
                    $("#DateCountdown").TimeCircles().end().slideUp().remove();
                    $(".fields").hide().remove();
                    $(".alert-end").slideDown();
                }
            },1000);

        }
    }
    
    if($("#menuCategoryCourses").length > 0){
       
        $("#menuCategoryCourses li").on("click", function(e){
            
            e.preventDefault();
            
            $("#menuCategoryCourses li a").removeAttr("id");
            var _this_ = $(this);
            
            $.ajax({
                url: base_url+"/cursos/getJsonByCategory/"+$(this).attr("data-id"),
                type: "POST",
                data: {},
                dataType: "json",
                success: function(response){
                    
                    $("#contentListCourses").html("");
                    
                    $("#menuCategoryCourses li").removeAttr("id");
                    _this_.find("a").attr("id", "active");
                    
                    if(response.length > 0){
                        $.each(response, function(key,value){

                            $("#contentListCourses").append(
                                    "<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">"+
                                    "    <div class=\"col-item itemOfListAll\">"+
                                    "        <div class=\"photo\">"+
                                    "            <a href=\""+value.link_informacoes+"\">"+
                                    "                <img src=\""+value.imagem+"\" alt=\"\" class=\"img-responsive\"/>"+
                                    "            </a>"+
                                    "            <div class=\"cat_row text-right\">"+
                                    "                <span>"+
                                    "                    <i class=\"icon-clock\"></i>"+value.carga_horaria+
                                    "                </span>"+
                                    "            </div>"+
                                    "        </div>"+
                                    "        <div class=\"info\">"+
                                    "            <div class=\"row\">"+
                                    "                <div class=\"course_info col-lg-12 col-md-12 col-sm-12\">"+
                                    "                    <h4>"+value.nome+"</h4>"+
                                    "                </div>"+
                                    "            </div>"+
                                    "            <div class=\"separator clearfix\">"+
                                    "                <a href=\""+value.link_informacoes+"\" title=\"Saiba mais sobre este curso\" class=\"btn btn-info btn-block no-border-radius\">"+
                                    "                    Mais informa????es"+
                                    "                </a>"+
                                    "            </div>"+
                                    "        </div>"+
                                    "    </div>"+
                                    "</div>"
                            );    

                        });
                    }else{
                        $("#contentListCourses").html("<h3>Oops, parece que n??o encontramos nenhum curso relacionado a esta categoria.</h3>");
                    }               
                },
                error: function(){
                    alert("Ocorreu um erro na solicita????o, por favor tente novamente.")
                },
                fail: function(){
                    alert("Ocorreu uma falha na solicita????o, por favor verifique sua conex??o e tente novamente.")
                }
            });
        });
    }
    
    if($("#filterCourses").length > 0){
        
        $("#filterCourses input[type=checkbox]").on("click", function(){
            
            var segmentsUrl = $("#filterCourses").attr("segmentsUrl");
            
            $.each($("#filterCourses input[type=checkbox]:checked"),function(key, value){
                
                segmentsUrl += $(this).val()+"/";
            });
            
            segmentsUrl +="1";
                        
            window.location.href = segmentsUrl+"#cursos";
        });
        
    }
    
    if($("#formCheckCertificate").length > 0){
        
        $(".alertMsg").hide();
        
        $("#formCheckCertificate").on("submit", function(){
            
            var form = $(this);
            
            // Verificando se o campo est?? preenchido
            if(form.find("input[name=code]").val() == ""){
                pnotify("Oops!!!", "voc?? deve informar o n??mero do seu certificado.", "error");
                return false;
            }
            
            // Acionando a imagem de Loading
            miniLoadIn();
            // Escondendo a div de mensagens
            form.find(".alertMsg").slideUp(200);
            // Efetuando requisi????o
            $.ajax({
                url: form.attr("action"),
                type: "POST",
                data: form.serialize(),
                dataType: "json",
                success: function(response){
                    
                    if(response.status == "success"){
                        
                        form.find(".alertMsg .col-md-12").html(""+
                            "<div class=\"alert alert-success no-border-radius\">"+
                            "    <strong> <i class=\"fa fa-check-circle\"></i> Autenticidade verificada</strong>"+
                            "    <p></p>"+
                            "    <p> "+response.message+" </p>"+
                            "</div>");
                    
                        form.find(".alertMsg").slideDown(200);
                    
                    }else{
                        form.find(".alertMsg .col-md-12").html(""+
                            "<div class=\"alert alert-danger no-border-radius\">"+
                            "    <strong> <i class=\"fa fa-warning\"></i> Certificado n??o reconhecido </strong>"+
                            "    <p></p>"+
                            "    <p> O c??digo deste certificado n??o foi indentificado! </p>"+
                            "</div>");
                    
                        form.find(".alertMsg").slideDown(200);
                    }
                    miniLoadOut();
                }
                
            }).fail(function(){
                pnotify("Problema", "Falha na comunica????o com o servidor.");
                miniLoadOut();
            }).error(function(){
                pnotify("Problema", "Erro na requisi????o ao servidor.");
                miniLoadOut();
            });
            
            return false;
            
        });
        
    }
    
    if($("#formLogin").length > 0){
                
        $("#formLogin").on("submit", function(e){
            
            e.preventDefault();
            
            var _this_ = $(this);
            
            if(valida_email(_this_.find("input[name=email]").val())){
                $.ajax({

                    url: _this_.attr("action"),
                    type: _this_.attr("method"),
                    data: _this_.serialize(),
                    dataType: "json",
                    success: function(response){

                        if(response.success == "true"){
                            
                            // Enviando requisi????o ao login process para registrar as informa????es da sess??o do AVA no codeigniter
                            $.ajax({
                                url: base_url+"/aluno/loginProcess",
                                type: "GET",
                                async: false
                            });
                            
                            _this_.find(".message").html("<span class=\"text-success hard\">Aguarde, voc?? ser?? redirecionado.</span>");
                            window.location.href = _this_.find("input[name=redirect]").val();
                            
                        }else{
                            _this_.find(".message").html("<span class=\"text-danger hard\">E-mail ou senha inv??lido</span>");
                        }

                    },
                    error: function(response){
                        _this_.find(".message").html("<span class=\"text-danger hard\">Ocorreu uma falha na solicita????o.</span>");
                    },
                    fail: function(response){
                        _this_.find(".message").html("<span class=\"text-danger hard\">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>");
                    }

                });
            }else{
                _this_.find(".message").html("<span class=\"text-danger hard\">Informe um e-mail v??lido.</span>");
            }
            
        });
        
    }
    
    if($("#formRegisterNewStudent").length > 0){
        
        $("#formRegisterNewStudent #confEmail, #formRegisterNewStudent #confSenha").on("paste", function(){
            return false;
        });
        
        $("#formRegisterNewStudent").on("submit", function(e){
            
            e.preventDefault();
            
            var _this_ = $(this);
            
            $.ajax({

                url: _this_.attr("action"),
                type: _this_.attr("method"),
                data: _this_.serialize(),
                dataType: "json",
                success: function(response){

                    if(response.success == "true"){
                        
                        $.ajax({
                            url: base_url+"/aluno/loginProcess",
                            type: "GET",
                            async: false
                        });
                        
                        _this_.find(".message").html("<span class=\"text-success hard\">Aguarde, voc?? ser?? redirecionado.</span>");
                        window.location.href = _this_.find("input[name=redirect]").val();
                    }else{
                        _this_.find(".message").html("<span class=\"text-danger hard\">"+response.message+"</span>");
                    }

                },
                error: function(response){
                    _this_.find(".message").html("<span class=\"text-danger hard\">Ocorreu uma falha na solicita????o.</span>");
                },
                fail: function(response){
                    _this_.find(".message").html("<span class=\"text-danger hard\">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>");
                }
            });
        });
        
    }
   
    if($(".formRegisterNewStudentInscricao").length > 0){
        
        $(".formRegisterNewStudentInscricao .confEmail, .formRegisterNewStudentInscricao .confSenha").on("paste", function(){
            return false;
        });
        
        $(".formRegisterNewStudentInscricao").on("submit", function(e){
            
            e.preventDefault();
            
            var _this_ = $(this);
            
            $.ajax({

                url: _this_.attr("action"),
                type: _this_.attr("method"),
                data: _this_.serialize(),
                dataType: "json",
                success: function(response){

                    if(response.success == "true"){
                        
                        // Enviando requisi????o ao login process para registrar as informa????es da sess??o do AVA no codeigniter
                        $.ajax({
                            url: base_url+"/aluno/loginProcess",
                            type: "GET",
                            async: false
                        });

                        $.ajax({
                            url: _this_.attr("action")+"?new_inscricao=true",
                            type: "GET",
                            data: {cid: _this_.find("input[name=id_curso]").val()},
                            dataType: "json",
                            success: function(response){
                                if(response.success == "true"){
                                    _this_.find(".message").html("<span class=\"text-success hard\">Aguarde, voc?? ser?? redirecionado.</span>");
                                    
                                    if(typeof response.link !== "undefined"){
                                        window.location.href = _this_.find("input[name=address_ava]").val()+"/"+response.link;
                                    }else{
                                        window.location.href = _this_.find("input[name=address_ava]").val()+"/aluno/carrinho-de-compras";
                                    }
                                    
                                }else{
                                    _this_.find(".message").html("<span class=\"text-warning hard\">Seu cadastro foi efetuado, por??m por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.</span>");
                                }
                            },
                            error: function(){
                                _this_.find(".message").html("<span class=\"text-warning hard\">Seu cadastro foi efetuado, por??m ocorreu um erro na solicita????o. Por gentileza tente novamente, caso o problema persista entre em contato conosco atrav??s dos nossos canais de atendimento.</span>");
                            },
                            fail: function(){
                                _this_.find(".message").html("<span class=\"text-danger hard\">Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.</span>");
                            }
                        });
                        
                    }else{
                        _this_.find(".message").html("<span class=\"text-danger hard\">"+response.message+"</span>");
                    }

                },
                error: function(response){
                    _this_.find(".message").html("<span class=\"text-danger hard\">Ocorreu uma falha na solicita????o.</span>");
                },
                fail: function(response){
                    _this_.find(".message").html("<span class=\"text-danger hard\">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>");
                }
            });
        });
        
    }
    
    if($(".formLoginInscricao").length > 0){
        var tentativas = 0;
        $(".formLoginInscricao").on("submit", function(e){
            
            e.preventDefault();
            
            var _this_ = $(this);
            
            if(valida_email(_this_.find("input[name=email]").val())){
                $.ajax({

                    url: _this_.attr("action"),
                    type: _this_.attr("method"),
                    data: _this_.serialize(),
                    dataType: "json",
                    success: function(response){

                        if(response.success == "true"){
                            
                            $.ajax({
                                url: _this_.find("input[name=address_ava]").val()+"/controle.php?new_inscricao=true",
                                type: "GET",
                                data: {cid: _this_.find("input[name=id_curso]").val()},
                                dataType: "json",
                                success: function(response){
                                    if(response.success == "true"){
                                        _this_.find(".message").html("<span class=\"text-success hard\">Aguarde, voc?? ser?? redirecionado.</span>");

                                        if(typeof response.link !== "undefined"){
                                            window.location.href = _this_.find("input[name=address_ava]").val()+"/"+response.link;
                                        }else{
                                            window.location.href = _this_.find("input[name=address_ava]").val()+"/aluno/carrinho-de-compras";
                                        }

                                    }else{
                                        _this_.find(".message").html("<span class=\"text-warning hard\">Seu usu??rio foi identificado, por??m n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.</span>");
                                    }
                                },
                                error: function(){
                                    _this_.find(".message").html("<span class=\"text-warning hard\">Seu usu??rio foi identificado, por??m ocorreu um erro na solicita????o. Por gentileza tente novamente, caso o problema persista entre em contato conosco atrav??s dos nossos canais de atendimento.</span>");
                                },
                                fail: function(){
                                    _this_.find(".message").html("<span class=\"text-danger hard\">Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.</span>");
                                }
                            });
                            
                        }else{
                            _this_.find(".message").html("<span class=\"text-danger hard\">E-mail ou senha inv??lido</span>");
                        }

                    },
                    error: function(response){
                        
                        if(tentativas == 5){
                            tentativas = 0;
                            _this_.find(".message").html("<span class=\"text-danger hard\">Ocorreu uma falha na solicita????o.</span>");
                        }else{
                            tentativas++;
                            _this_.submit();
                            _this_.find(".message").html("<span class=\"hard\">Aguarde...</span>");
                        }
                    },
                    fail: function(response){
                        _this_.find(".message").html("<span class=\"text-danger hard\">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>");
                    }

                });
            }else{
                _this_.find(".message").html("<span class=\"text-danger hard\">Informe um e-mail v??lido.</span>");
            }
            
        });
        
    }
    
    if($("*[data-process-incricao=true]").length > 0){
        $("*[data-process-incricao=true]").on("click", function(){
           
            var _this_ = $(this);
           
            $.ajax({
                url: _this_.attr("data-action"),
                type: "GET",
                data: {cid: _this_.attr("data-id")},
                dataType: "json",
                success: function(response) {
                    if (response.success == "true") {
                        pnotify("Sucesso","Aguarde, voc?? ser?? redirecionado.","success");
                        
                        if (typeof response.link !== "undefined") {
                            window.location.href = _this_.attr("data-base-url") + "/" + response.link;
                        } else {
                            window.location.href = _this_.attr("data-base-url") + "/aluno/carrinho-de-compras";
                        }

                    } else {
                        pnotify("Erro","Por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.","error");
                    }
                },
                error: function() {
                    pnotify("Problema na solicita????o","Por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.","error");
                },
                fail: function() {
                    pnotify("Falha na solicita????o","Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.","warning");
                }
            });
            
        });
    }
    
    if($("*[data-process-palestra=true]").length > 0){
        $("*[data-process-palestra=true]").on("click", function(){
           
            var _this_ = $(this);
           
            $.ajax({
                url: _this_.attr("data-action"),
                type: "GET",
                data: {palestra_id: _this_.attr("data-id")},
                dataType: "json",
                success: function(response) {
                    if (response.success == "true") {
                        
                        if (typeof response.carrinho !== "undefined") {
                            //window.location.href = _this_.attr("data-base-url") + "/aluno/carrinho-de-compras";
                            pnotify("","Aguarde...","success");
                        }else{
                            pnotify("Parab??ns","Sua inscri????o nesta palestra foi confirmada.","success");
                        }
                    } else {
                        pnotify("Aten????o",response.message,"error");
                    }
                },
                error: function() {
                    pnotify("Problema na solicita????o","Por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.","error");
                },
                fail: function() {
                    pnotify("Falha na solicita????o","Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.","warning");
                }
            });
            
        });
    }
    
    if($("form#newsletter").length > 0){
        
        $("form#newsletter").on("submit", function(e){
            e.preventDefault();
            
            $("#message-newsletter").removeClass("danger").slideUp(200);
            
            if(!valida_email($(this).find("#email_newsletter").val())){
                $("#message-newsletter").addClass("danger").html("Informe ume e-mail v??lido.").slideDown(200);;
            }else{
                $.ajax({
                    url: base_url+"newsletter",
                    type: "POST",
                    data: { email: $(this).find("#email_newsletter").val() },
                    dataType: "json",
                    success: function(response){
                        
                        if(response.status == "success"){
                            $("#divnewsletter").html("<div id=\"message-newsletter\" class=\"show\"> Seu e-mail est?? em nossa lista de novidades. </div>");
                        }else{
                            $("#message-newsletter").addClass("danger").html(response.message).slideDown(200);
                        }
                        
                    },
                    error: function(){
                        $("#message-newsletter").addClass("danger").html("Problema na solicita????o").slideDown(200);
                    },
                    fail: function(){
                        $("#message-newsletter").addClass("danger").html("Ocorreu uma falha na solita????o.").slideDown(200);
                    }
                });
            }
            
        });
        
    }
    
    if($("form#lembrar-senha").length > 0){
        
        $("form#lembrar-senha").on("submit", function(e){
            e.preventDefault();
            
            var $this = $(this);
            
            $this.find(".message").slideUp(200).html("");
            
            if(!valida_email($this.find("#emailforgot").val())){
                $this.find(".message").html("<span class=\"text-danger\">Informe ume e-mail v??lido.</span>").slideDown(200);
            }else{
                $.ajax({
                    url: $this.attr("action"),
                    type: "POST",
                    data: { emailforgot: $(this).find("#emailforgot").val() },
                    dataType: "json",
                    success: function(response){
                        
                        if(response.success == "true"){
                            $this.find(".message").html("<span class=\"text-success\">E-mail enviado com sucesso. Por favor, verifique sua caixa de mensagem.</span>").slideDown(200);
                        }else{
                            $this.find(".message").html("<span class=\"text-danger\">"+response.message+"</span>").slideDown(200);
                        }
                        
                    },
                    error: function(){
                        $this.find(".message").html("<span class=\"text-danger\">Problema na solicita????o</span>").slideDown(200);
                    },
                    fail: function(){
                        $this.find(".message").html("<span class=\"text-danger\">Ocorreu uma falha na solita????o</span>").slideDown(200);
                    }
                });
            }
            
        });
        
    }
    
});

function legend(parent, data) {
    parent.className = 'legend';
    var datas = data.hasOwnProperty('datasets') ? data.datasets : data;

    // remove possible children of the parent
    while(parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }

    datas.forEach(function(d) {
        var title = document.createElement('span');
        title.className = 'title';
        title.style.borderColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
        title.style.borderStyle = 'solid';
        parent.appendChild(title);

        var text = document.createTextNode(d.title);
        title.appendChild(text);
    });
}


if($(".about-us-charts").length > 0){
    
    var play0 = false;
    
    $(window).scroll(function(){	
        "use strict";	
        var scroll = $(window).scrollTop();

        if( scroll >= ($(".about-us-charts").offset().top-300) && !play0){
            
            initializeProgressCourse();
            
            setInterval(function(){
                initializeProgressCourse();
            },2000);
            
            var now = new Date;
                
            // Madrugada
            if (now.getHours () >= 0 && now.getHours () < 5){
                var qtde_alunos = 3;
            }
            // Manh??
            else if (now.getHours () >= 5 && now.getHours () < 12){
                var qtde_alunos = 29;
            }
            // Tarde
            else if (now.getHours () >= 12 && now.getHours () < 18){
                var qtde_alunos = 18;
            }
            // Noite
            else{
                var qtde_alunos = 41;
            }
                 
            var count_alunos = 0;
            // Alunos Online
            setInterval(function() {                                
                
                if(count_alunos >= randomIntFromInterval(8,15)){
                   count_alunos -= randomIntFromInterval(1,3);
                }else{
                    count_alunos += randomIntFromInterval(1,3);
                }
                
                $("#progress-alunos-online h3 span").html(number_format((qtde_alunos+count_alunos),0,"","."));
                
            }, randomIntFromInterval(3000,7000));
            
            
            // Cadastro
            var numeroCadastro = parseInt($("#progress-cadastros h3 span").html().replace(".",""));            
            var y = 0;
            
            var time1 = setInterval(function() {                                
                $("#progress-cadastros h3 span").html(number_format(y,0,"","."));
                if (y >= numeroCadastro) {
                    stop();
                    clearInterval(time1);
                    
                    // O valor 106 citado ?? um n??mero que passou da contagem por conta do incremento
                    $("#progress-cadastros h3 span").html(number_format(y-106,0,"",".")).fadeOut(200).fadeIn(200);
                    
                } else {
                    y += 203;
                }
            }, 1);
            
            // Inscri????es
            var numeroInscricao = parseInt($("#progress-inscricao h3 span").html().replace(".",""));            
            var x = 0;
            
            var time2 = setInterval(function() {                                
                $("#progress-inscricao h3 span").html(number_format(x,0,"","."));
                if (x >= numeroInscricao) {
                    stop();
                    clearInterval(time2);
                                        
                    // O valor 274 citado ?? um n??mero que passou da contagem por conta do incremento
                    $("#progress-inscricao h3 span").html(number_format(x-274,0,"",".")).fadeOut(200).fadeIn(200);
                    
                } else {
                    x += 473;
                }
            }, 1);
            
            play0 = true;
        }
    });
}

if($("#myChart1").length > 0){
    
    var play1 = false;
    
    $(window).scroll(function(){	
        "use strict";	
        var scroll = $(window).scrollTop();

        if( scroll >= ($("#myChart1").offset().top-400) && !play1){
            var ctx1 = document.getElementById("myChart1").getContext("2d");
            var myDoughnutChart1 = new Chart(ctx1).Doughnut(data1,{responsive: true});
            legend(document.getElementById("myChart1Legend"), data1);
            play1 = true;
        }
    });
}

if($("#myChart2").length > 0){
    
    var play2 = false;
    
    $(window).scroll(function(){	
        "use strict";	
        var scroll = $(window).scrollTop();

        if( scroll >= ($("#myChart2").offset().top-400) && !play2){
            var ctx2 = document.getElementById("myChart2").getContext("2d");
            var myDoughnutChart2 = new Chart(ctx2).Doughnut(data2,{responsive: true});
            legend(document.getElementById("myChart2Legend"), data2);
            play2 = true;
        }
    });
}

if($("#myChart3").length > 0){
    
    var play3 = false;
    
    $(window).scroll(function(){	
        "use strict";	
        var scroll = $(window).scrollTop();

        if( scroll >= ($("#myChart3").offset().top-400) && !play3){
            var ctx3 = document.getElementById("myChart3").getContext("2d");
            var myDoughnutChart3 = new Chart(ctx3).Doughnut(data3,{responsive: true});
            legend(document.getElementById("myChart3Legend"), data3);
            play3 = true;
        }
    });
}

function initializeProgressCourse(){
    var random1 = randomIntFromInterval(90,99);
    var random2 = randomIntFromInterval(90,99);
    
    animateProgress("#progress-satisfacao",random1,1);
    animateProgress("#progress-indicariam",random2,1);
}

function animateProgress(element, fim){
    
    $(element+" .progress .progress-bar").css("width",fim+"%");
    
    var u = $(element+" .progress .progress-bar").attr("aria-valuenow");
    var time1 = setInterval(function(){
        $(element+" h3 span").html(u+"%");
        $(element+" .progress .progress-bar").attr("aria-valuenow", u);
        
        if(u > fim){
            u--;
        }else{
           if(u >= fim){
                stop();
                clearInterval(time1);
            }else{
                u++;
            } 
        }
        
        
    },10);
}

function pnotify(title, message, type){
    
    $.pnotify_remove_all();

    $.pnotify({
        title: title,
        text: message,
        type: type,
        history: false
    });
}

function miniLoadIn(){
    $(".formPreLoad").fadeIn(150);
}

function miniLoadOut(){
    $(".formPreLoad").fadeOut(150);
}

function valida_email(email){
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(filter.test(email)){
        return true;
    }else{
        return false;
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function number_format(number, decimals, dec_point, thousands_sep) {
  
  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}