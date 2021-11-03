<div id="divnewsletter">
  <div class="container newsletter" <?php echo (isset($papoDeEnfermagem)) ? "style=\"visibility: hidden;\"" : "" ?>>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h3 class="no-margin-top">Receba nossas novidades</h3>
        <form method="post" action="assets/newsletter.php" name="newsletter" id="newsletter" class="form-inline">
          <input name="email_newsletter" id="email_newsletter" aria-label="receba nossas novidades" title="receba nossas novidades" type="email" value="" placeholder="Seu melhor e-mail" class="form-control">
          <button id="submit-newsletter"> Receber</button>
          <div id="message-newsletter"></div>
        </form>
      </div>
    </div>
  </div>
</div>
<style media="screen">
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
<!-- .modal-question-workload -->
<div class="modal fade" id="modal-question-workload" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="steps row" id="step-1" style="margin-bottom:30px;">
          <div class="col-md-12">
            <h5 class="text-center">Pergunta Rápida:</h5>
            <h2 class="text-center">Qual a carga horária ideal de um curso para você?</h2>
          </div>
          <div class="col-md-6 col-md-offset-3" style="margin-top:30px;">
            <select class="form-control" name="workload_time">
              <option>Selecione a carga horária</option>
              <?php for ($i = 10; $i <= 180;) { ?>
                <option value="<?php echo $i; ?>"><?php echo $i; ?> horas</option>
              <?php $i = $i + 10;
              } ?>
              <option value="200">200 horas</option>
              <option value="250">250 horas</option>
              <option value="300">300 horas</option>
            </select>
          </div>
        </div>
        <div class="steps row" id="step-2" style="margin-bottom:30px;display:none;">
          <div class="col-md-12">
            <h2 class="text-center">Obrigado por responder!</h2>
          </div>
        </div>
        <div class="row" id="footer-modal-question">
          <div class="col-md-6">
            <button type="button" class="btn btn-link btn-block" data-dismiss="modal" onclick="confirmWorkload('no');">Não quero responder</button>
          </div>
          <div class="col-md-6">
            <button type="button" class="btn btn-success btn-block" onclick="confirmWorkload('yes');">Confirmar carga horária</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal-question-workload -->


<footer>
  <div class="container" id="nav-footer">

    <div class="col-md-8">
      <div class="col-md-12 nav-links">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <h4>Institucional</h4>
          <ul>
            <li><a href="<?php echo base_url("institucional/quem-somos"); ?>">Quem somos</a></li>
            <li><a href="<?php echo base_url("institucional/politica-de-privacidade"); ?>">Política de privacidade</a></li>
            <li><a href="<?php echo base_url("tutor/login"); ?>">Área do tutor</a></li>
            <li><a href="<?php echo base_url("quero-ser-tutor"); ?>">Quero ser tutor</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-12">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="<?php echo base_url("ajuda/como-funciona"); ?>">Como funciona</a></li>
            <li><a href="<?php echo base_url("ajuda/faq"); ?>">Dúvidas comuns</a></li>
            <li><a href="https://grupointra.tomticket.com/chat/?id=EP45944&ac=2940416P30052020110558" rel="noopener" target="_blank">Atendimento</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-sm-3 col-xs-12">
          <h4>Serviços</h4>
          <ul>
            <li><a href="<?php echo base_url("certificado/autenticar"); ?>">Verificar Autenticidade do Certificado</a></li>
            <li><a href="<?php echo base_url("treinamentos"); ?>">Ambiente de Treinamentos</a></li>
            <!--
            <li><a href="<?php echo base_url("treinamento-saude-da-mulher/account/login"); ?>">1ª Turma do Treinamento Saúde da Mulher</a></li>
            <li><a href="<?php echo base_url("treinamentos/ava"); ?>">2ª Turma do Treinamento Saúde da Mulher</a></li>
          -->
          </ul>
        </div>

      </div>
      <div class="row">
        <div class="col-md-12">
          <h5 class="text-left">Somos associados</h5>
        </div>
        <div class="col-md-3 col-sm-3"><img src="<?php echo base_url("assets/img/abed.png"); ?>" loading="lazy" width="111" height="93" alt="somos associados a abed"></div>
        <div class="col-md-3 col-sm-3"><img src="<?php echo base_url("assets/img/gi-logo-footer.png"); ?>" loading="lazy" width="111" height="93" alt="somos associados ao grupo intra de ensino e pesquisa a distancia"></div>
        <div class="col-md-2 col-sm-2"><a href="#" data-toggle="modal" data-target="#modal-garantia-footer"><img src="<?php echo base_url("assets/img/garantia_absoluta.png"); ?>" loading="lazy" alt="garantia absoluta" width="111" height="93"></a></div>
        <div class="col-md-2 col-sm-2"><a href="<?php echo base_url("o-ead-e-confiavel"); ?>" title="Sua compra 100% segura"><img src="<?php echo base_url("assets/img/selo-seguranca-gi.png"); ?>" loading="lazy" width="111" height="93" alt="aqui sua compra 100% segura"></a></div>
        <div class="col-md-2 col-sm-2" style="padding-top: 31px;"><img src="<?php echo base_url("assets/img/siteseal_gd_3_h_l_m.png"); ?>" loading="lazy" title="Certificado de segurança" width="131" height="32" alt="certificado de segurança ssl" /></div>
      </div>
    </div>
    <div class="col-md-4 visible-lg visible-md">

      <a href="<?php echo $config->facebookFanPage; ?>" rel="noopener" target="_blank">
        <img src="<?php echo base_url('assets/img/facebook.png'); ?>" loading="lazy" width="350" height="316" alt="Enfermagem a Distancia no Facebook" class="img-responsive">
      </a>
    </div>
  </div>
  <div id="copy_right">
    <div class="container">
      <div class="col-md-6"><?php echo $config->siteName; ?></div>
      <div class="col-md-6 text-right">Todos os direitos reservados © <?php echo date("Y"); ?> - Grupo Intra de Ensino e Pesquisa a Distância</div>
    </div>
  </div>
</footer>
<div class="modal fade" id="modal-garantia-footer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title" id="myModalLabel">Sobre a garantia Absoluta</h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">
            <h4>Garantia absoluta</h4>
            <p class="text-justify">Após a confirmação do pagamento você tem sete dias corridos para pedir seu dinheiro de volta por qualquer motivo, sem justificativa, sem ninguém ligando pra você, sem letra miúda, simples assim, preto no branco e ainda continuamos amigos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="fb-root"></div>
<script>
  var base_url = '<?php echo base_url(); ?>';

  function obterParametroUrl(parametro) {
    var parametros = window.location.search.substring(1).split("&");
    for (var i = 0; i < parametros.length; i++) {
      var splitParametro = parametros[i].split("=");
      if (splitParametro[0] == parametro) {
        return splitParametro[1];
      }
    }
    return null;
  }
</script>

<script src="<?php echo base_url("assets/js/join.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/jquery.lazyload.js"); ?>"></script>

<script src="<?php echo base_url("assets/js/tipuesearch/tipuesearch_set.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/tipuesearch/tipuesearch_content-1.6.js?1"); ?>"></script>
<script src="<?php echo base_url("assets/js/tipuesearch/tipuesearch.min.js"); ?>"></script>

<script>
  $(document).ready(function() {
    $('#tipue_search_input').tipuesearch({
      'show': 10,
      'showURL': true,
      'descriptiveWords': 80
    });

  });
</script>
<!-- Auto Complete -->
<script src="<?php echo base_url("assets/js/autocomplete/jquery.mockjax.min.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/autocomplete/jquery.autocomplete.min.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/autocomplete/courses.js"); ?>"></script>

<script src="<?php echo base_url("assets/js/eventos1.1.js"); ?>"></script>

<script src="<?php echo base_url("assets/js/maskField/jquery.maskedinput.min.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/custom-1.1.3.min.js?13"); ?>"></script>

<script>
  $(document).ready(function() {
    $(".mask-phone").mask("(99) 9999?9-9999");
  });
</script>

<?php if (isset($papoDeEnfermagem)) { ?>
  <script src="<?php echo base_url("assets/js/slide-curso/jquery.bxslider.js"); ?>"></script>
  <script src="<?php echo base_url("assets/js/sticky/jquery.sticky.js"); ?>"></script>
  <script src="<?php echo base_url("assets/js/papo-de-enfermagem-1.0.js"); ?>"></script>
<?php } ?>

<script src="<?php echo base_url("assets/js/jquery.form.min.js"); ?>"></script>
</body>

</html>