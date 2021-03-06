var dataLayer = window.dataLayer || [];
function getCookie(e) {
    for (var a = e + "=", n = document.cookie.split(";"), t = 0; t < n.length; t++) {
        for (var o = n[t]; " " == o.charAt(0); ) o = o.substring(1);
        if (0 == o.indexOf(a)) return o.substring(a.length, o.length);
    }
    return null;
}
function setCookie(e, a, n) {
    var t, o;
    (o = new Date()).setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), (t = o.toUTCString()), (document.cookie = e + "=" + a + "; expires=" + t + "; path=/HttpOnly");
}
function checkAll(e) {
    document.getElementById(e).checked
        ? jQuery.each(ipts, function () {
              this.checked = !0;
          })
        : jQuery.each(ipts, function () {
              this.checked = !1;
          });
}
function legend(e, a) {
    e.className = "legend";
    for (var n = a.hasOwnProperty("datasets") ? a.datasets : a; e.hasChildNodes(); ) e.removeChild(e.lastChild);
    n.forEach(function (a) {
        var n = document.createElement("span");
        (n.className = "title"), (n.style.borderColor = a.hasOwnProperty("strokeColor") ? a.strokeColor : a.color), (n.style.borderStyle = "solid"), e.appendChild(n);
        var t = document.createTextNode(a.title);
        n.appendChild(t);
    });
}
function initializeProgressCourse() {
  // var e = randomIntFromInterval(90, 99),
  //     a = randomIntFromInterval(90, 99);
    var e = 97,
        a = 91;
    animateProgress("#progress-satisfacao", e, 1), animateProgress("#progress-indicariam", a, 1), animateProgress("#progress-satisfacaoA", e, 1), animateProgress("#progress-indicariamA", a, 1);
}
function animateProgress(e, a) {
    $(e + " .progress .progress-bar").css("width", a + "%");
    var n = $(e + " .progress .progress-bar").attr("aria-valuenow"),
        t = setInterval(function () {
            $(e + " h3 span").html(n + "%"), $(e + " .progress .progress-bar").attr("aria-valuenow", n), n > a ? n-- : n >= a ? (stop(), clearInterval(t)) : n++;
        }, 10);
}
function pnotify(e, a, n) {
    void 0 !== $.pnotify ? ($.pnotify_remove_all(), $.pnotify({ title: e, text: a, type: n, history: !1 })) : "success" != n && alert(a);
}
function miniLoadIn() {
    $(".formPreLoad").fadeIn(150);
}
function miniLoadOut() {
    $(".formPreLoad").fadeOut(150);
}
function valida_email(e) {
    return !!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e);
}
function randomIntFromInterval(e, a) {
    return Math.floor(Math.random() * (a - e + 1) + e);
}
function number_format(e, a, n, t) {
    e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
    var o = isFinite(+e) ? +e : 0,
        s = isFinite(+a) ? Math.abs(a) : 0,
        r = void 0 === t ? "," : t,
        i = void 0 === n ? "." : n,
        l = "";
    return (
        (l = (s
            ? (function (e, a) {
                  var n = Math.pow(10, a);
                  return "" + (Math.round(e * n) / n).toFixed(a);
              })(o, s)
            : "" + Math.round(o)
        ).split("."))[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)),
        (l[1] || "").length < s && ((l[1] = l[1] || ""), (l[1] += new Array(s - l[1].length + 1).join("0"))),
        l.join(i)
    );
}
function validateFormNewUser(e) {
    var a = !0;
    $("#message-password").css("display", "none");
    return (
        (0 == $("input[name=nome]").val().length || $("input[name=nome]").val().length > 100) && ($("input[name=nome]").focus(), (a = !1)),
        (0 == $("input[name=telefone]").val().length || $("input[name=telefone]").val().length > 11) && ($("input[name=telefone]").focus(), (a = !1)),
        (0 == $("input[name=email]").val().length || $("input[name=email]").val().length > 100) && ($("input[name=email]").focus(), (a = !1)),
        $("input[name=email]").val() != $("input[name=confEmail]").val() &&
            ($("input[name=email]").focus(), (a = !1), $("#formRegisterNewStudent").find("#message").addClass("alert alert-warning"), $("#formRegisterNewStudent").find("#message").html('<div class="alert alert-warning"><span class="text-danger">E-mails informados s??o diferentes!</span></div>')),
        (0 == $("input[name=confEmail]").val().length || $("input[name=confEmail]").val().length > 100) && ($("input[name=confEmail]").focus(), (a = !1)),
        (0 == $("input[name=senha]").val().length || $("input[name=senha]").val().length > 20 || $("input[name=senha]").val().length < 6) &&
            ($("input[name=senha]").focus(), $("#message-password").css("display", "inline"), (a = !1)),
        (0 == $("input[name=confSenha]").val().length || $("input[name=confSenha]").val().length > 20 || $("input[name=confSenha]").val().length < 6) &&
            ($("input[name=confSenha]").focus(), $("#message-password").css("display", "inline"), (a = !1)),
        $("input[name=email]").val() != $("input[name=confEmail]").val() &&
            ($("#formRegisterNewStudent").find(".message").html('<div class="alert alert-warning"><span class="text-danger">Os e-mails n??o conferem!</span></div>'), (a = !1)),
        $("input[name=senha]").val() != $("input[name=confSenha]").val() &&
            ($("#formRegisterNewStudent").find(".message").html('<div class="alert alert-warning"><span class="text-danger">As senhas n??o conferem!</span></div>'), (a = !1)),
        "number" != typeof parseInt($("input[name=nivel_perfil]").val()) &&
            ($("#formRegisterNewStudent").find(".message").html('<div class="alert alert-warning"><span class="text-danger">Selecione uma op????o de em "voc?? ??:"</span></div>'), (a = !1)),
        a
    );
}

    $(function () {
        "use strict";
        $('#telefone').keypress(function (e) {if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          return false;}});
        $(".btn-planos-inscricao").click(function () {
            $("html, body").animate({ scrollTop: $("#planos").offset().top + 50 }, 500);
        }),
            $(".btn-plano-vip").click(function () {
                var e = $(".form-dados-usuario").find("input[name='nome']").val(),
                    a = $(".form-dados-usuario").find("input[name='telefone']").val(),
                    n = $(".form-dados-usuario").find("textarea").val();
                if ("" == e && "" == a && "" == n) return pnotify("Error!!!", "Todos os campos devem ser preenchidos.", "error"), !1;
                $.ajax({
                    url: $(".form-dados-usuario").attr("action"),
                    dataType: "json",
                    type: "POST",
                    data: {
                        from_name: "EAD - Enfermagem a Dist??ncia",
                        from_email: "contato@enfermagemadistancia.com.br",
                        to_name: "Contato",
                        to_email: "layanne@intra-ead.com.br",
                        subject: "[Plano VIP] solicita????o de contato",
                        origem: "plano_vip",
                        message:
                            "        <div>\n        <h3>Um usu??rio solicitou liga????o no plano VIP</h3>\n        <br>\n        <br>\n        </div>\n        <h4>Dados do usu??rio</h4>\n        <p> Nome: " +
                            e +
                            "</p>\n        <p> Telefone: " +
                            a +
                            "</p>\n        <p> Descri????o: " +
                            n +
                            "</p>\n        ",
                    },
                    success: function (e) {
                        "success" == e.status && (pnotify("Parab??ns!!!", e.message, "success"), $(".form-dados-usuario")[0].reset());
                    },
                });
            }),
            $(".select-plain").click(function () {
                $("form input[name=plano]").val($(this).parents("[data-plain]").attr("data-plain"));
            }),
            $(".filterCourses").length > 0 &&
                $(".filterCourses").on("change", function () {
                    var e = window.location.href.split("?"),
                        a = "",
                        n = "";
                    $(".filterCourses").each(function (e, n) {
                        a += "&" + $(this).attr("data-query") + "=" + $(this).val();
                    }),
                        (n = (e[1], e[0] + "?" + a)),
                        (window.location.href = n);
                }),
            ($.pnotify.defaults.styling = "bootstrap3") &&
                $(document).ajaxStart(function () {
                    $(".loading").show();
                }),
            $(document).ajaxStop(function () {
                $(".loading").hide();
            }),
            $("img").lazyload({ effect: "fadeIn" }),
            $(".tp-banner").length > 0 && ($(".tp-banner").removeClass("hidden"), $(".carousel").carousel()),
            $("#dateCountdown").length > 0 &&
                ($(".alert-end").hide(),
                $("#dateCountdown").TimeCircles().getTime() < 0
                    ? ($("#dateCountdown").TimeCircles().end().hide(), $(".fields").hide().remove(), $(".alert-end").slideDown())
                    : ($("#dateCountdown").TimeCircles({
                          animation: "smooth",
                          bg_width: 1,
                          fg_width: 0.02,
                          circle_bg_color: "#EBEBEB",
                          time: {
                              Days: { text: "Dias", color: "#FFCC66", show: !0 },
                              Hours: { text: "Horas", color: "#99CCFF", show: !0 },
                              Minutes: { text: "Minutos", color: "#BBFFBB", show: !0 },
                              Seconds: { text: "Segundos", color: "#FF9999", show: !0 },
                          },
                      }),
                      setInterval(function () {
                          $("#dateCountdown").TimeCircles().getTime() <= 0 && ($("#dateCountdown").TimeCircles().end().slideUp().remove(), $(".fields").hide().remove(), $(".alert-end").slideDown());
                      }, 1e3))),
            $("#menuCategoryCourses,.menuCategoryCourses").length > 0 && $("#menuCategoryCourses li,.menuCategoryCourses li").click(function (e) {}),
            $("#formCheckCertificate").length > 0 &&
                ($(".alertMsg").hide(),
                $("#formCheckCertificate").submit(function () {
                    var e = $(this);
                    return "" == e.find("input[name=code]").val()
                        ? (pnotify("Oops!!!", "voc?? deve informar o n??mero do seu certificado.", "error"), !1)
                        : (e.find("input[name=code]").val().split('-')[0] == '999' && e.find("input[name=code]").val().split('-')[1] == 'GI')
                        ? (miniLoadIn(),
                          e.find(".alertMsg").slideUp(200),
                          $.ajax({
                              url: 'https://www.gintra.com.br/eventos/verificar_autenticidade/'+e.find("input[name=code]").val(),
                              type: "GET",
                              dataType: "json",
                              success: function (a) {
                                  "success" == a.status
                                      ? (e
                                            .find(".alertMsg .col-md-12")
                                            .html('<div class="alert alert-success no-border-radius"><strong><i class="fa fa-check-circle"></i> Autenticidade verificada</strong><br><p> ' + a.message + " </p></div>"),
                                        e.find(".alertMsg").slideDown(200))
                                      : (e
                                            .find(".alertMsg .col-md-12")
                                            .html(
                                                '<div class="alert alert-danger no-border-radius"><strong><i class="fa fa-warning"></i> Certificado n??o reconhecido</strong><br><p>O c??digo deste certificado n??o foi identificado! </p></div>'
                                            ),
                                        e.find(".alertMsg").slideDown(200),
                                        miniLoadOut());
                              },
                          })
                              .fail(function () {
                                  pnotify("Problema", "Falha na comunica????o com o servidor."), miniLoadOut();
                              })
                              .error(function () {
                                  pnotify("Problema", "Erro na requisi????o ao servidor."), miniLoadOut();
                              }),miniLoadOut(),
                          !1)
                        : (miniLoadIn(),
                          e.find(".alertMsg").slideUp(200),
                          $.ajax({
                              url: e.attr("action"),
                              type: "POST",
                              data: e.serialize(),
                              dataType: "json",
                              success: function (a) {
                                  "success" == a.status
                                      ? (e
                                            .find(".alertMsg .col-md-12")
                                            .html('<div class="alert alert-success no-border-radius"><strong><i class="fa fa-check-circle"></i> Autenticidade verificada</strong><br><p> ' + a.message + " </p></div>"),
                                        e.find(".alertMsg").slideDown(200))
                                      : (e
                                            .find(".alertMsg .col-md-12")
                                            .html(
                                                '<div class="alert alert-danger no-border-radius"><strong><i class="fa fa-warning"></i> Certificado n??o reconhecido</strong><br><p>O c??digo deste certificado n??o foi identificado! </p></div>'
                                            ),
                                        e.find(".alertMsg").slideDown(200),
                                        miniLoadOut());
                              },
                          })
                              .fail(function () {
                                  pnotify("Problema", "Falha na comunica????o com o servidor."), miniLoadOut();
                              })
                              .error(function () {
                                  pnotify("Problema", "Erro na requisi????o ao servidor."), miniLoadOut();
                              }),miniLoadOut(),
                          !1);
                })),
            $("#formLogin").length > 0 &&
                $("#formLogin").submit(function (e) {
                    e.preventDefault();
                    var a = $(this);
                    valida_email(a.find("input[name=email]").val())
                        ? $.ajax({
                              url: a.attr("action"),
                              type: a.attr("method"),
                              data: a.serialize(),
                              dataType: "json",
                              success: function (e) {
                                  if("true" == e.success){
                                      (a.find(".message").html('<span class="text-success hard">Aguarde, voc?? ser?? redirecionado.</span>'),
                                        "" !== e.url_redirect ? (window.location.href = e.url_redirect) : (window.location.href = a.find("input[name=redirect]").val()))
                                  }else{
                                      if(e.message && e.message.length > 0){
                                        a.find(".message").html('<span class="text-danger hard">'+e.message+'</span>');
                                      }else{
                                        a.find(".message").html('<span class="text-danger hard">E-mail ou senha inv??lido</span>');
                                      }
                                      grecaptcha.reset(0);
                                    }
                              },
                              error: function () {
                                  a.find(".message").html('<span class="text-danger hard">Ocorreu uma falha na solicita????o.</span>');
                              },
                              fail: function () {
                                  a.find(".message").html('<span class="text-danger hard">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>');
                              },
                          })
                        : a.find(".message").html('<span class="text-danger hard">Informe um e-mail v??lido.</span>'),grecaptcha.reset(0);
                }),
            $("#formRegisterNewStudent").length > 0 &&
                $("#formRegisterNewStudent #confEmail, #formRegisterNewStudent #confSenha").on("paste", function () {
                    return !1;
                }),
            $("button[name=btn-submit]").click(function (e) {
                e.preventDefault();
                $("#message-password").css("display", "none");
                var a = $("#formRegisterNewStudent");
                return (
                    a.find("#message").html(),
                    1 == validateFormNewUser("#formRegisterNewStudent") &&
                        $.ajax({
                            url: a.data("action"),
                            type: a.attr("method"),
                            data: a.serialize(),
                            dataType: "json",
                            success: function (e) {
                                "true" == e.success
                                    ? (dataLayer.push({ event: "user_register", customDataObject: { page: "PAGE: Cadastro de usuario" } }),
                                      a.find("#message").html('<span class="text-success hard">Aguarde, voc?? ser?? redirecionado.</span>'),
                                      (window.location.href = a.find("input[name=redirect]").val()))
                                    : (a.find("#message").html('<div class="alert alert-warning"><span class="text-danger hard">' + e.message + '</span></div>'), grecaptcha.reset());
                            },
                            error: function () {
                                grecaptcha.reset(), a.find("#message").html('<span class="text-danger hard">Ocorreu uma falha na solicita????o.</span>');
                            },
                            fail: function () {
                                grecaptcha.reset(), a.find("#message").html('<span class="text-danger hard">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>');
                            },
                        }),
                    a.find("#message").fadeIn().show(),
                    !1
                );
            }),
            $(".formRegisterNewStudentInscricao").submit(function (e) {
                e.preventDefault();
                var a = $(this);
                return (
                    a.find("#message").removeClass(),
                    a.find("#message").html(),
                    $.ajax({
                        url: a.find("input[name=action]").val(),
                        type: a.attr("method"),
                        data: a.serialize(),
                        dataType: "json",
                        async: !1,
                        success: function (e) {
                            "true" == e.success
                                ? (dataLayer.push({ event: "user_register", customDataObject: { page: "PAGE: Informa????es de curso" } }),
                                  $.ajax({
                                      url: a.attr("action") + "?new_inscricao=true",
                                      type: "GET",
                                      data: { cid: a.find("input[name=id_curso]").val(), plano: a.find("input[name=plano]").val(), carga_horaria: a.find("input[name=carga_horaria]").val() },
                                      dataType: "json",
                                      async: !1,
                                      success: function (e) {
                                          "true" == e.success &&
                                              (ga("send", "event", "cadastro", "fazer cadastro", "cad_inscricao"),
                                              ga("send", "event", "inscricao " + a.find("input[name=plano]").val(), "fazer inscricao", "insc_info_" + a.find("input[name=id_curso]").val()),
                                              a.find("#message").addClass("alert alert-success"),
                                              a.find("#message").html('<span class="hard">Aguarde, voc?? ser?? redirecionado.</span>'),
                                              void 0 !== e.link
                                                  ? (window.location.href = a.find("input[name=address_ava]").val() + "/" + e.link)
                                                  : (a.find("#message").addClass("alert alert-info"),
                                                    a.find("#message").html(
                                                            '<span class="text-warning hard">Seu cadastro foi efetuado, por??m por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.</span>'
                                                        ),
                                                    a.find("#message").show(),
                                                    (window.location.href = a.find("input[name=address_ava]").val() + "/aluno/carrinho-de-compras"),
                                                    grecaptcha.reset()));
                                      },
                                      error: function () {
                                          grecaptcha.reset(),
                                              a.find("#message").addClass("alert alert-info"),
                                              a.find("#message").html(
                                                      '<span class="hard">Seu cadastro foi efetuado, por??m ocorreu um erro na solicita????o. Por gentileza tente novamente, caso o problema persista entre em contato conosco atrav??s dos nossos canais de atendimento.</span>'
                                                  );
                                              a.find("#message").show();
                                      },
                                      fail: function () {
                                          grecaptcha.reset(),
                                              a.find("#message").addClass("alert alert-warning"),
                                              a.find("#message").html('<span class="hard">Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.</span>'),
                                              a.find("#message").show();
                                      },
                                  }))
                                : (a.find("#message").addClass("alert alert-warning"), a.find("#message").html('<span class="hard">' + e.message + "</span>"), a.find("#message").show(), grecaptcha.reset());
                        },
                        error: function (e) {
                            grecaptcha.reset(), a.find("#message").addClass("alert alert-warning"), a.find("#message").html(e.message);
                            a.find("#message").show();
                        },
                        fail: function () {
                            grecaptcha.reset(), a.find("#message").addClass("alert alert-warning"), a.find("#message").html('<span class="hard">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>');
                            a.find("#message").show();
                        },
                    }),
                    !1
                );
            }),
            $(".formLoginInscricao").submit(function (e) {
                e.preventDefault();
                var n = $(this);
                return (
                    n.find("#message").removeClass(),
                    n.find("#message").html(),
                    1 == valida_email(n.find("input[name=email]").val())
                        ? ($.ajax({
                              url: n.find("input[name=action]").val(),
                              type: n.attr("method"),
                              data: n.serialize(),
                              async: !1,
                              dataType: "json",
                              success: function (e) {
                                if("true" == e.success){
                                  $.ajax({
                                            url: n.find("input[name=address_ava]").val() + "/controle.php?new_inscricao=true",
                                            type: "GET",
                                            data: { cid: n.find("input[name=id_curso]").val(), plano: n.find("input[name=plano]").val(), carga_horaria: n.find("input[name=carga_horaria]").val() },
                                            dataType: "json",
                                            async: !1,
                                            success: function (e) {
                                              console.log("true?");
                                                "true" == e.success
                                                    ? (ga("send", "event", "inscricao " + n.find("input[name=plano]").val(), "fazer inscricao", "insc_info_" + n.find("input[name=id_curso]").val()),
                                                      n.find("#message").html('<span class="text-success hard">Aguarde, voc?? ser?? redirecionado.</span>'),
                                                      (window.location.href = void 0 !== e.link)
                                                          ? (window.location.href = n.find("input[name=address_ava]").val() + "/" + e.link)
                                                          : (window.location.href = n.find("input[name=address_ava]").val() + "/aluno/carrinho-de-compras"))
                                                    : n.find("#message").addClass("alert alert-warning").html('<span class="text-warning hard">Seu usu??rio foi identificado, por??m n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.</span>').show();
                                            },
                                            error: function () {
                                                n.find("#message").addClass("alert alert-warning").html(
                                                    '<span class="text-warning hard">Seu usu??rio foi identificado, por??m ocorreu um erro na solicita????o. Por gentileza tente novamente, caso o problema persista entre em contato conosco atrav??s dos nossos canais de atendimento.</span>'
                                                ).show();
                                            },
                                            fail: function () {
                                                n.find("#message").addClass("alert alert-warning").html('<span class="text-danger hard">Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.</span>').show();
                                            },
                                        });
                                      }else{
                                        grecaptcha.reset(0);
                                        grecaptcha.reset(1);
                                        if(e.message && e.message.length >0){
                                          n.find("#message").addClass("alert alert-warning").html('<span class="text-danger hard">'+e.message+'</span>').show();
                                        }else{
                                          n.find("#message").addClass("alert alert-warning").html('<span class="text-danger hard">E-mail ou senha inv??lido</span>').show();
                                        }
                                        return;
                                    }
                              },
                              error: function () {
                                  n.find("#message").addClass("alert alert-warning").html('<span class="text-danger hard">Ocorreu uma falha na solicita????o, verifique os dados ou tente novamente mais tarde.</span>').show();
                              },
                              fail: function () {
                                  n.find("#message").addClass("alert alert-warning").html('<span class="text-danger hard">Falha na comunica????o com o servidor, por favor verifique sua conex??o com a internet.</span>').show();
                              },
                          }))
                        : n.find("#message").html('<span class="text-danger hard">Informe um e-mail v??lido.</span>').show(),
                    !1
                );
            }),
            $("*[data-process-incricao=true]").length > 0 &&
                $("*[data-process-incricao=true]").click(function () {
                    var e = $(this);
                    $.ajax({
                        url: e.attr("data-action"),
                        type: "GET",
                        data: { cid: e.attr("data-id"), plano: e.attr("data-plano"), carga_horaria: e.attr("data-carga_horaria") },
                        dataType: "json",
                        success: function (a) {
                            "true" == a.success
                                ? (pnotify("Sucesso", "Aguarde, voc?? ser?? redirecionado.", "success"),
                                  void 0 !== a.link ? (window.location.href = e.attr("data-base-url") + "/" + a.link) : (window.location.href = e.attr("data-base-url") + "/aluno/carrinho-de-compras"))
                                : pnotify("Erro", "Por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.", "error");
                        },
                        error: function () {
                            pnotify("Problema na solicita????o", "Por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.", "error");
                        },
                        fail: function () {
                            pnotify("Falha na solicita????o", "Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.", "warning");
                        },
                    });
                }),
            $("*[data-process-palestra=true]").length > 0 &&
                $("*[data-process-palestra=true]").click(function () {
                    var e = $(this);
                    $.ajax({
                        url: e.attr("data-action"),
                        type: "GET",
                        data: { palestra_id: e.attr("data-id") },
                        dataType: "json",
                        success: function (e) {
                            "true" == e.success ? (void 0 !== e.carrinho ? pnotify("", "Aguarde...", "success") : pnotify("Parab??ns", "Sua inscri????o nesta palestra foi confirmada.", "success")) : pnotify("Aten????o", e.message, "error");
                        },
                        error: function () {
                            pnotify("Problema na solicita????o", "Por alguma raz??o n??o foi poss??vel concluir sua inscri????o. Por favor atualize sua p??gina e tente novamente.", "error");
                        },
                        fail: function () {
                            pnotify("Falha na solicita????o", "Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.", "warning");
                        },
                    });
                }),
            $("form#newsletter").length > 0 &&
                $("form#newsletter").submit(function (e) {
                    e.preventDefault(),
                        $("#message-newsletter").removeClass("danger").slideUp(200),
                        valida_email($(this).find("#email_newsletter").val())
                            ? $.ajax({
                                  url: base_url + "newsletter",
                                  type: "POST",
                                  data: { email: $(this).find("#email_newsletter").val() },
                                  dataType: "json",
                                  success: function (e) {
                                      "success" == e.status
                                          ? $("#divnewsletter").html('<div id="message-newsletter" class="show"> Seu e-mail est???? em nossa lista de novidades. </div>')
                                          : $("#message-newsletter").addClass("danger").html(e.message).slideDown(200);
                                  },
                                  error: function () {
                                      $("#message-newsletter").addClass("danger").html("Problema na solicita????o").slideDown(200);
                                  },
                                  fail: function () {
                                      $("#message-newsletter").addClass("danger").html("Ocorreu uma falha na solita????o.").slideDown(200);
                                  },
                              })
                            : $("#message-newsletter").addClass("danger").html("Informe um e-mail v??lido.").slideDown(200);
                }),
            $("form#lembrar-senha").length > 0 &&
                $("form#lembrar-senha").on("submit", function (e) {
                    e.preventDefault();
                    var a = $(this);
                    a.find(".message").slideUp(200).html(""),
                        valida_email(a.find("#emailforgot").val())
                            ? $.ajax({
                                  url: a.attr("action"),
                                  type: "POST",
                                  data: $(this).serialize(),
                                  dataType: "json",
                                  success: function (e) {
                                      "true" == e.success
                                          ? a.find(".message").html('<span class="text-success" style="font-weight: 800;">Enviamos o link para cadastrar uma nova senha no seu email. Por favor, verifique sua caixa de entrada bem como o lixo eletr??nico.</span>').slideDown(200)
                                          : a
                                                .find(".message")
                                                .html('<span class="text-danger" style="font-weight: 800;">' + e.message + "</span>")
                                                .slideDown(200);
                                                grecaptcha.reset(0);
                                  },
                                  error: function () {
                                      a.find(".message").html('<span class="text-danger" style="font-weight: 800;">Problema na solicita????o</span>').slideDown(200);
                                  },
                                  fail: function () {
                                      a.find(".message").html('<span class="text-danger" style="font-weight: 800;">Ocorreu uma falha na solita????o</span>').slideDown(200);
                                  },
                              })
                            : a.find(".message").html('<span class="text-danger" style="font-weight: 800;">Informe um e-mail v??lido.</span>').slideDown(200);
                }),
            $("body").on("click", "#link-termo-compromisso", function () {
                $(".modal-oferta-compromisso").modal();
            }),
            $(".formAderirOferta").length > 0 &&
                $("#check1").click(function () {
                    checkAll("check1");
                }),
            $("#check2").click(function () {
                checkAll("check2");
            }),
            $(".formAderirOferta").submit(function (e) {
                return (
                    e.preventDefault(),
                    $("input[name='regulamento']").is(":checked")
                        ? ($(".message").hide(),
                          $(".formAderirOferta > button").removeAttr("disabled"),
                          valida_email($(this).find("#email").val())
                              ? ($.post(base_url + "/ava/controle.php?aderirOferta=true", $(this).serialize(), function (e) {
                                    var a = $.parseJSON(e);
                                    "true" === a.success
                                        ? ($(".message").addClass("danger").html(a.message).slideDown(200), (window.location.href = base_url + "ava/aluno/carrinho-de-compras/"))
                                        : ($(".loading").hide(), $(".message").addClass("danger").html(a.message).slideDown(200));
                                }),
                                !1)
                              : void $(".message").addClass("danger").html("Informe um e-mail v??lido.").slideDown(200))
                        : ($(".message").addClass("danger").html("?? necess??rio aceitar o regulamento.").slideDown(200), $(".formAderirOferta > button").attr("disabled", "disabled"), !1)
                );
            }),
            $(".link-regulamento-conteudo-exclusivo").click(function () {
                $(".modal-regulamento-conteudo-exclusivo").modal();
            });
        var e = window.location.href.split("?");
        e[0].split("listagem")[0] + "listagem" == base_url + "cursos/listagem"
            ? null === getCookie("variacao-listagem") && null === getCookie("variacao-home") && setCookie("variacao-listagem", "A")
            : e[0] === base_url && null === getCookie("variacao-listagem") && null === getCookie("variacao-home") && setCookie("variacao-home", "A");
    });
var ipts = $("input[name='regulamento']");
if ($(".about-us-charts").length > 0) {
    var play0 = !1;
    $(window).scroll(function () {
        "use strict";
        if ($(window).scrollTop() >= $(".about-us-charts").offset().top - $(window).height()*0.5 && !play0) {
            initializeProgressCourse();
            var e = new Date();
            if (e.getHours() >= 0 && e.getHours() < 5) var a = 3;
            else if (e.getHours() >= 5 && e.getHours() < 12) a = 29;
            else if (e.getHours() >= 12 && e.getHours() < 18) a = 18;
            else a = 41;
            var n = 0;
            setInterval(function () {
                n >= randomIntFromInterval(8, 15) ? (n -= randomIntFromInterval(1, 3)) : (n += randomIntFromInterval(1, 3)), $("#progress-alunos-online h3 span").html(number_format(a + n, 0, "", "."));
            }, randomIntFromInterval(3e3, 7e3));
            var t = 251.345;
            var r = 537.367;
            $.ajax({
                  url: "https://www.enfermagemadistancia.com.br/aluno/total",
                  type: "GET",
                  async: !1,
                  dataType: "json",
                  success: function (e) {
                      t = parseInt(e.total);
                      $("#progress-cadastros h3 span").html(t);
                  },
                  error: function (e) {
                    $("#progress-cadastros h3 span").html(251.345);
                  },
                  fail: function (e) {
                    $("#progress-cadastros h3 span").html(251.345);
                  },
              });
              $.ajax({
                    url: "https://www.enfermagemadistancia.com.br/aluno/totalInscricoes",
                    type: "GET",
                    async: !1,
                    dataType: "json",
                    success: function (e) {
                        r = parseInt(e.total);
                        $("#progress-inscricao h3 span").html(r);
                    },
                    error: function (e) {
                      $("#progress-inscricao h3 span").html(537.367);
                    },
                    fail: function (e) {
                      $("#progress-inscricao h3 span").html(537.367);
                    },
                });
                var o = 0,
                s = setInterval(function () {
                    $("#progress-cadastros h3 span").html(number_format(o, 0, "", ".")),
                        o >= t
                            ? (stop(),
                              clearInterval(s),
                              $("#progress-cadastros h3 span")
                                  .html(number_format(o - 106, 0, "", "."))
                                  .fadeOut(200)
                                  .fadeIn(200))
                            : (o += 603);
                }, 1),
                i = 0,
                l = setInterval(function () {
                    $("#progress-inscricao h3 span").html(number_format(i, 0, "", ".")),
                        i >= r
                            ? (stop(),
                              clearInterval(l),
                              $("#progress-inscricao h3 span")
                                  .html(number_format(i - 274, 0, "", "."))
                                  .fadeOut(200)
                                  .fadeIn(200))
                            : (i += 873);
                }, 1);
            play0 = !0;
        }
    });
}
if ($("#myChart1").length > 0) {
    var play1 = !1;
    $(window).scroll(function () {
        "use strict";
        if ($(window).scrollTop() >= $("#myChart1").offset().top - 400 && !play1) {
            var e = document.getElementById("myChart1").getContext("2d");
            new Chart(e).Doughnut(data1, { responsive: !0 }), legend(document.getElementById("myChart1Legend"), data1), (play1 = !0);
        }
    });
}
if ($("#myChart2").length > 0) {
    var play2 = !1;
    $(window).scroll(function () {
        "use strict";
        if ($(window).scrollTop() >= $("#myChart2").offset().top - 400 && !play2) {
            var e = document.getElementById("myChart2").getContext("2d");
            new Chart(e).Doughnut(data2, { responsive: !0 }), legend(document.getElementById("myChart2Legend"), data2), (play2 = !0);
        }
    });
}
if ($("#myChart3").length > 0) {
    var play3 = !1;
    $(window).scroll(function () {
        "use strict";
        if ($(window).scrollTop() >= $("#myChart3").offset().top - 400 && !play3) {
            var e = document.getElementById("myChart3").getContext("2d");
            new Chart(e).Doughnut(data3, { responsive: !0 }), legend(document.getElementById("myChart3Legend"), data3), (play3 = !0);
        }
    });
}
if ($(".autocomplete").length > 0) {
    var e = $.map(courses, function (e, a) {
        return { value: e, data: a };
    });
    $(".autocomplete").autocomplete({
        lookup: e,
        lookupFilter: function (e, a, n) {
            return new RegExp("\\b" + $.Autocomplete.utils.escapeRegExChars(n), "gi").test(e.value);
        },
        onSelect: function () {},
        onHint: function (e) {
            $("#autocomplete-ajax-x").val(e);
        },
        onInvalidateSelection: function () {},
    });
}
$(".participar").on("click", function () {
    var e = $(".form-participar");
    valida_email(e.find("input[name=email]").val())
        ? $.ajax({
              url: e.attr("action"),
              type: "post",
              data: e.serialize(),
              dataType: "json",
              success: function (e) {
                  1 == e.success
                      ? (pnotify("Sucesso", e.mensagem, "success"),
                        setTimeout(function () {
                            $(".close").click(), $.pnotify_remove_all(), $("section, header, footer").removeClass("blur");
                        }, 1e3))
                      : pnotify("Erro", e.mensagem, "error");
              },
              error: function () {
                  pnotify("Problema na solicita????o", "Por alguma raz??o n??o foi poss??vel concluir essa a????o. Por favor atualize sua p??gina e tente novamente.", "error");
              },
              fail: function () {
                  pnotify("Falha na solicita????o", "Falha na comunica????o com o servidor. Por gentileza, verifique sua conex??o com a internet.", "warning");
              },
          })
        : pnotify("Dado inv??lido", "Email inv??lido. Por favor insira um e-mail v??lido.", "error");
});
const togglePassword = document.querySelector('#togglePassword');
const showPassword = document.querySelector('#password');
if(togglePassword && showPassword){
  togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = showPassword.getAttribute('type') === 'password' ? 'text' : 'password';
      showPassword.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
  });
}

$("form#generic-post").length > 0 &&
$("form#generic-post").on("submit", function (e) {
    e.preventDefault();
    var a = $(this);
    a.find(".message").slideUp(200).html(""),
        $.ajax({
                  url: a.attr("action"),
                  type: "POST",
                  data: $(this).serialize(),
                  dataType: "json",
                  success: function (e) {
                      if("true" == e.success){
                          if(typeof e.message !== 'undefined' && e.message){
                            a.find(".message").html('<span class="text-success" style="font-weight: 800;">'+e.message+'.</span>').slideDown(200);
                            if (typeof pnotify !== 'undefined') {pnotify("Sucesso!",e.message,"success")};
                          }else{
                            a.find(".message").html('<span class="text-success" style="font-weight: 800;">Sucesso!</span>').slideDown(200);
                            if (typeof pnotify !== 'undefined') {pnotify("Sucesso!","Sucesso!","success")};
                          }
                        }else{
                          if(typeof e.message !== 'undefined' && e.message){
                            a.find(".message").html('<span class="text-danger" style="font-weight: 800;">' + e.message + "</span>").slideDown(200);
                            if (typeof pnotify !== 'undefined') {pnotify("Erro!",e.message,"error")};
                          }else{
                            a.find(".message").html('<span class="text-danger" style="font-weight: 800;"> Error! </span>').slideDown(200);
                            if (typeof pnotify !== 'undefined') {pnotify("Erro!","Erro!","error")};
                          }
                        }
                        if (typeof grecaptcha !== 'undefined') {grecaptcha.reset(0)};
                        if (typeof e.url_redirect !== 'undefined' && e.url_redirect) {
                          a.find(".message").html('<span class="text-success" style="font-weight: 800;">Voc?? ser?? redirecionado em 5 segundos...</span>').slideDown(200);
                          if (typeof pnotify !== 'undefined') {pnotify("Sucesso!","Voc?? ser?? redirecionado em 5 segundos...","success")};
                          window.setTimeout(function(){
                            window.location.href = e.url_redirect;
                        }, 5000);
                      }
                  },
                  error: function () {
                      a.find(".message").html('<span class="text-danger" style="font-weight: 800;">Problema na solicita????o, atualize a p??gina e tente novamente!</span>').slideDown(200);
                      if (typeof pnotify !== 'undefined') {pnotify("Erro!","Problema na solicita????o, atualize a p??gina e tente novamente!","error")};
                  },
                  fail: function () {
                      a.find(".message").html('<span class="text-danger" style="font-weight: 800;">Ocorreu uma falha na solita????o, atualize a p??gina e tente novamente!</span>').slideDown(200);
                      if (typeof pnotify !== 'undefined') {pnotify("Erro!","Ocorreu uma falha na solita????o, atualize a p??gina e tente novamente!","error")};
                  },
              });
});
