<footer>
  <div class="row p40-10 no-margin" style="zoom: 0.7;">
    <div class="col-xs-3 no-margin">
      <span class="sprit-icon garantia"></span>
    </div>
    <div class="col-xs-3 no-margin">
      <span class="sprit-icon seguranca"></span>
    </div>
    <div class="col-xs-3 no-margin">
      <span class="sprit-icon gi"></span>
    </div>
    <div class="col-xs-3 no-margin">
      <span class="sprit-icon abed"></span>
    </div>
  </div>

  <div class="newsletter">
    <!--
    <h3><strong>RECEBA NOVIDADES</strong><br>E CONTEÚDO GRATUITO</h3>
    <form id="newsletter">
    <input type="email" name="email" class="form-control email" placeholder="Digite seu melhor e-mail aqui">
    <button class="btn btn-success btn-block">Cadastrar</button>
  </form>
-->
  </div>

  <div class="copyright">

    <button class="top scrollTop">
      <i class="fas fa-angle-up"></i>
      TOPO
    </button>

    <p>EAD - Enfermagem a Distância</p>
    <small>Todos os direitos reservados &copy; <?php echo date('Y'); ?>.</small>
    <small>Grupo Intra de Ensino e Pesquisa a Distância</small>
  </div>

</footer>
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
          <div class="col-xs-6">
            <button type="button" class="btn btn-link btn-block" data-dismiss="modal" onclick="confirmWorkload('no');">Não quero responder</button>
          </div>
          <div class="col-xs-6">
            <button type="button" class="btn btn-success btn-block" onclick="confirmWorkload('yes');">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal-question-workload -->

<div class="modal fade" id="popupUserAgreed" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="popupUserAgreed" aria-hidden="true" style="width:100%;top:0;">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style="border-radius: 15px;">
      <div class="modal-body">
        <div class="noticejustify-content-between align-items-center">
          <div class="cookie-text font-weight-normal">
            <p class="font-weight-bold">Seja bem vindo(a)!</p>
            Este site utiliza cookies para garantir que você tenha a melhor experiência em nosso site e
            de acordo com nossa <a class="text-dark" style="text-decoration: underline" href="<?php echo base_url('institucional/politica-de-privacidade'); ?>">política de privacidade.</a>
          </div>
          <div class="buttons">
            <button class="btn btn-success btn-sm float-right" data-dismiss="modal" style="margin: 0.2rem;width: 9rem;margin-top: 5%;">Tudo Bem</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="toasts">
  <p class="floatingText"></p>
</div>

<div class="modal fade" id="modal-whatsapp" tabindex="-1" role="dialog" aria-labelledby="myModalLabelInscricao" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title" id="myModalLabelInscricao">Whatsapp</h4>
      </div>
      <div class="modal-body text-justify">

        <div class="text-center">
          <h4 class="no-margin fw300">(88) 9.9978-7305</h4>
        </div>
        <br>
        <a href="tel:(88)99978-7305" class="btn btn-block"><i class="fas fa-user-plus"></i> Adiciona aos meus contatos</a>

      </div>
    </div>
  </div>
</div>
</div> <!-- /container -->
<input type="hidden" class="base_url" value="<?php echo base_url(); ?>">
</body>

<script src="<?php echo base_url("assets/js/jquery.min.js"); ?>"></script>
<script src="<?php echo base_url("assets/js/bootstrap.min.js"); ?>"></script>

<script src="<?php echo base_url("assets/js/custom.1.11.min.js?5"); ?>"></script>


<script defer src="<?php echo base_url("assets/js/ripple-effect.js"); ?>"></script>
<!--<script src="<?php echo base_url("assets/plugins/touchSwipe/jquery.touchSwipe.min.js"); ?>"></script>-->
<script async src="<?php echo base_url("assets/plugins/floating-menu/floating-menu.js"); ?>"></script>

<link href="<?php echo base_url("assets/css/outubrorosa.1.1.css"); ?>" rel="stylesheet">


<script src="<?php echo base_url("assets/js/jquery.form.min"); ?>"></script>

</html>