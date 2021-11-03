$(document).ready(function () {
    $('.list-course').bxSlider({
        slideWidth: 250,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 10,
        auto: true,
        autoHover: true,
        responsive: false,
    });
    
    $('body').on('click', '.feedback-action', function(){
        
        var _this = $(this);
        
        $.ajax({
            url: base_url + "papoDeEnfermagem/registerFeedback",
            type: "POST",
            data: {
                postID: _this.attr('data-postID'),
                action: _this.attr('data-action')
            },
            dataType: "json",
            success: function (e) {
                $('.post-feedback').html('<strong>Obrigado por nos dar o seu feedback</strong>').addClass('text-center').css('margin', '50px 0');
            },
            error: function () {
                alert('Ocorreu um erro inesperado ao registrar seu feedback');
            },
            fail: function () {
                alert('Falha ao registrar seu feedback. Por gentileza, verifique sua conexão com a internet.');
            }
        });
        
    });
    
    if (($('.form-blog-newsletter').length > 0)) {

        $('.form-blog-newsletter').on("submit", function (e) {
            e.preventDefault();

            var _nome = $(this).find("input[name='nome_n']");
            var _email = $(this).find("input[name='email_n']");
            var _message = $(this).find('.blog-newsletter-message');

            _message.slideUp(200);

            if (($(_nome).val() == '') || ($(_nome).val() == null)) {
                _message.html('Por favor, informe seu nome!');
                _message.slideDown(200);
                $(_nome).focus();
                return false;
            } else if (($(_email).val() == '') || ($(_email).val() == null)) {
                _message.html('Informe seu email!');
                _message.slideDown(200);
                $(_email).focus();
                return false;
            } else if (!(valida_email($(_email).val()))) {
                _message.html('Informe um email válido!');
                _message.slideDown(200);
                $(_email).focus();
                return false;
            } else {
                $.ajax({
                    url: base_url + "newsletter/blog",
                    type: "POST",
                    data: {
                        email_n: $(_email).val(),
                        nome_n: $(_nome).val()
                    },
                    dataType: "json",
                    success: function (e) {
                        if (e.status === 'success') {
                            ga('send', 'event', 'Newsletter', 'Assinar', 'Box');
                            window.location.reload();
                        }
                        $('.form-blog-newsletter').html('<div class="alert alert-success" role="alert"><p>Seu email foi cadastrado com sucesso!</p></div>');
                    },
                    error: function () {
                        _message.slideDown(200);
                        _message.html('Não foi possível cadastrar seus dados. Recarregue esta página e tente novamente.');
                    },
                    fail: function () {
                        _message.slideDown(200);
                        _message.html('Ocorreu uma falha na solicitação. Recarregue esta página e tente novamente.');
                    }
                });
            }
        });

    }
    $("body").on("click", ".close", function () {
        setCookie("is_modal_newsletter", true, 3650);
    })

    $(document).scroll(function () {
        if ($(this).scrollTop() > 700 && $(this).scrollTop() < 720 && (getCookie("is_modal_newsletter") === "")) {
			setTimeout(function(){
				$("#modal-blog-newsletter").modal();
			},15000);
            
        }
    });
    
});
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
};

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
