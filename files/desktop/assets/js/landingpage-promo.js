$(document).ready(function () {
    if (($('#save-cod').length > 0)) {

        $('#save-cod').on("submit", function (e) {
            e.preventDefault();

            var _message = $('.message');
            _message.slideUp(200);
            var idUser = $("input[name='codigo']").val();
            $.ajax({
                url: $("#save-cod").attr("action"),
                type: $("#save-cod").attr("method"),
                data: $("#save-cod").serialize(),
                dataType: "json",
                success: function (e) {
                    if (e.status === 'success') {
                        ga('send', 'event', 'LandingPage', 'brinde', idUser);
                        window.location.href = e.redirect;
                    } else if (e.status === 'page-error') {
                        window.location.href = e.redirect;
                    } else if (e.status === "success-cookie") {
                        setCookie("access_landing_promo", e.date, 3650);
                        window.location.href = e.redirect;
                    } else if (e.status === "error") {
                        _message.slideDown(200);
                        _message.html(e.message);
                    }
                },
                error: function () {
                    _message.slideDown(200);
                    _message.html('Não foi possível processar seu código. Recarregue esta página e tente novamente.');
                },
                fail: function () {
                    _message.slideDown(200);
                    _message.html('Ocorreu uma falha na solicitação. Recarregue esta página e tente novamente.');
                }
            });
        });

    }

    $("body").on("click", ".video-promo", function () {
        $("label").css("color", "#5D5555");
        $(this).find("label").css("color", "#fff");
        var cod = $(this).find("label").attr("cod");
        $('.iframe-promo').attr("src", "https://player.vimeo.com/video/" + cod + "?title=0&byline=0&portrait=0");
    });

    $("#primeiro").click();
    $("#primeiro-mobile").click();


});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}
;

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}