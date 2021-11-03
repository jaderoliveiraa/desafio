(function ($) {
    $.fn.tourJs = function (options) {

        var _time = false;

        var defaults = {
            fadeSpeed: 200,
            nextLabel: "Próximo",
            previusLabel: "Voltar",
            finishLabel: "Finalizar",
            finishFunction: function () {
            }
        };

        var settings = $.extend({}, defaults, options);

        var _this = $(this);
        var _body = $("body");
        var size_section = _this.find(".content-tour section").length;
        var size_step = 100 / size_section;
        var current = size_step;
        var finish_button = "<button class=\"btn btn-success pull-right finish\">" + settings.finishLabel + "</button>";

        _this.addClass("tourJs");

        // Verificando se já existe o footer, caso exista o mesmo será apagado e gerado um novo
        if (_this.find("div").hasClass("footer-tour")) {
            _this.find("div.footer-tour").remove();
        }

        _this.append("<div class=\"footer-tour\">" +
                "       <div class=\"progress\">" +
                "           <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%\"></div>" +
                "       </div>" +
                "       <div class=\"buttons text-center\">" +
                "           <button class=\"btn btn-default pull-left previus\">" + settings.previusLabel + "</button>" +
                "			<span class=\"label-step\" style=\"font-size:15px;\"></span>" +
                "           <button class=\"btn btn-primary pull-right next\">" + settings.nextLabel + "</button>" +
                "       </div>" +
                "   </div>");

        $('input').on('ifChecked', function (event) {
            $('.next').removeAttr('disabled');
            
            if ($(this).attr('id') === 'outra_utilidade_pesquisa_certificado') {
                $('textarea[name="outra_utilidade_texto"]').show();
                if ($('textarea[name="outra_utilidade_texto"]').val() === '') {
                    $('.next').attr('disabled', 'disabled');
                }
            } else {
                $('textarea[name="outra_utilidade_texto"]').hide();
            }

            if ($(this).attr('id') === 'outra_opcao_de_compra') {
                $('textarea[name="outra_opcao_de_compra"]').show();
                if ($('textarea[name="outra_opcao_de_compra"]').val() === '') {
                    $('.next').attr('disabled', 'disabled');
                }
            } else {
                $('textarea[name="outra_opcao_de_compra"]').hide();
            }

            if ($(this).attr('id') === 'importa_no_curso_text') {
                $('textarea[name="importa_no_curso_text"]').show();
                if ($('textarea[name="importa_no_curso_text"]').val() === '') {
                    $('.next').attr('disabled', 'disabled');
                }
            } else {
                $('textarea[name="importa_no_curso_text"]').hide();
            }

            if ($(this).attr('id') === 'veio_por') {
                $('textarea[name="veio_por_text"]').show();
                if ($('textarea[name="veio_por_text"]').val() === '') {
                    $('.next').attr('disabled', 'disabled');
                }
            } else {
                $('textarea[name="veio_por_text"]').hide();
            }

            if ($(this).attr('id') === 'metodo_text') {
                $('textarea[name="metodo_text"]').show();
                if ($('textarea[name="metodo_text"]').val() === '') {
                    $('.next').attr('disabled', 'disabled');
                }
            } else {
                $('textarea[name="metodo_text"]').hide();
            }

        });

        $('input').on('ifUnchecked', function (event) {
            if (($(this).attr('name').indexOf('dispositivo')) !== -1) {
                if (($("section.active").find('div.checked').length) === 1) {
                    _this.find(".footer-tour .next").attr('disabled', 'disabled');
                } else {
                    _this.find(".footer-tour .next").attr('disabled', false);
                }
            }
        });

        $('textarea[name="outra_utilidade_texto"],textarea[name="outra_opcao_de_compra"],textarea[name="importa_no_curso_text"],textarea[name="veio_por_text"],textarea[name="metodo_text"]').on("keyup", function () {
            if ($(this).val() === "") {
                _this.find(".footer-tour .next").attr('disabled', 'disabled');
            } else {
                _this.find(".footer-tour .next").attr('disabled', false);
            }
        });

        // Next button
        _this.find(".footer-tour .next").on("click", function () {

            var element = $("section.active").fadeOut(settings.fadeSpeed, function () {
                element.hide().removeClass("active").next().fadeIn(settings.fadeSpeed).addClass("active");

                var posicao = $("section.active").index();
                $('.label-step').text(posicao + ' de ' + (size_section - 1));

                if (posicao == (size_section - 1)) {
                    _this.find(".footer-tour .next").hide();
                    _this.find(".footer-tour .buttons").append(finish_button);
                } else if (posicao !== 0) {
                    _this.find(".footer-tour .next").text(settings.nextLabel);
                    _this.find(".footer-tour .next").removeClass('btn-success');
                    _this.find(".footer-tour .next").addClass('btn-primary');
                    if ($("section.active *").hasClass('opcional') || $("section.active *").hasClass('checked')) {
                        _this.find(".footer-tour .next").attr('disabled', false);
                    } else {
                        _this.find(".footer-tour .next").attr('disabled', 'disabled');
                    }
                }

                if (posicao == 1) {
                    if (_time === false) {
                        _time = new Date().getTime();
                    }
                }
                if (posicao == 0) {
                    $('.next').removeAttr('disabled');
                    $('.label-step').text('');
                }
                _this.find(".footer-tour .previus").show();
                current += size_step;
                _this.find(".progress .progress-bar").css("width", current + "%");
            });

        });

        var posicao = _this.find("section.active").index();
        var firstExec = false;
        if (posicao === 0) {
            _this.find(".footer-tour .next").text('Iniciar');
            _this.find(".footer-tour .next").removeClass('btn-primary');
            _this.find(".footer-tour .next").addClass('btn-success');
            _this.find(".footer-tour .previus").hide();
            $('.label-step').text('');

            setTimeout(function () {
                _this.find(".progress .progress-bar").css("width", "0%");
            }, 300);

            current = size_step;

            firstExec = true;

        } else {
            current = (parseInt(posicao) + 1) * size_step;
        }
        if (!firstExec) {
            setTimeout(function () {
                _this.find(".progress .progress-bar").css("width", current + "%");
            }, 300);
        }

        // Previus button
        _this.find(".footer-tour .previus").on("click", function () {

            var element = _this.find("section.active").fadeOut(settings.fadeSpeed, function () {
                element.hide().removeClass("active").prev().fadeIn(settings.fadeSpeed).addClass("active");

                var posicao = _this.find("section.active").index();
                $('.label-step').text(posicao + ' de ' + (size_section - 1));

                if (posicao == 0) {
                    _this.find(".footer-tour .previus").hide();
                    _this.find(".footer-tour .next").text('Iniciar');
                    _this.find(".footer-tour .next").removeClass('btn-primary');
                    _this.find(".footer-tour .next").addClass('btn-success');
                    _this.find(".progress .progress-bar").css("width", "0%");
                    $('.label-step').text('');
                } else {
                    _this.find(".footer-tour .buttons .finish").remove();
                }

                _this.find(".footer-tour .next").attr('disabled', false);

                _this.find(".footer-tour .next").show();
                current -= size_step;
                if (posicao != 0) {
                    _this.find(".progress .progress-bar").css("width", current + "%");
                }

            });
        });

        var _function = function () {
            return settings.finishFunction(_time);
        }

        _body.on("click", ".footer-tour .finish", _function);

    };
})(jQuery);