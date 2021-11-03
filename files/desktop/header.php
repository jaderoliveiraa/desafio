<!DOCTYPE html>
<!--[if IE 8 ]><html class="ie ie8" lang="pt-br"> <![endif]-->
<!--[if IE 9 ]><html class="ie ie9" lang="pt-br"> <![endif]-->
<html lang="pt-br">
<!--<![endif]-->

<head>

  <meta http-equiv="content-type" content="text/html; charset=UTF-8">

  <?php
  date_default_timezone_set('America/Sao_Paulo');
  ?>

  <title>Maior Portal de Atualização para Enfermagem da América Latina</title>
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=5">
  <meta name="author" content="Grupo Intra de Ensino e Pesquisa a Distancia Ltda">
  <meta name="description" content="Oferta Plano VIP">


  <link rel="icon" href="favicon.ico">
  <meta name="theme-color" content="#875b9f">
  <meta name="apple-mobile-web-app-title" content="Cursos EAD">
  <meta name="application-name" content="Cursos EAD">

  <link href="<?php echo base_url("assets/css/fonts.min.css?2"); ?>" rel="stylesheet">
  <link href="<?php echo base_url("assets/fontawesome/css/all.min.css"); ?>" rel="stylesheet">

  <!-- CSS -->
  <link href="<?php echo base_url("assets/css/bootstrap.min.css"); ?>" rel="stylesheet" type="text/css">
  <link href="<?php echo base_url("assets/css/pnotify/jquery.pnotify.default.css"); ?>" rel="stylesheet" type="text/css" />
  <link href="<?php echo base_url("assets/css/style-1.18.min.css?8"); ?>" rel="stylesheet" type="text/css">

  <?php if (isset($papoDeEnfermagem)) { ?>
    <link href="<?php echo base_url("assets/css/slide-curso/jquery.bxslider.css") ?>" rel="stylesheet" type="text/css">
  <?php } ?>

  <link href="<?php echo base_url("assets/css/style-1.4-outubrorosa.min.css"); ?>" rel="stylesheet">

  <link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/timeline/style.css"); ?>" />
  <link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/tipuesearch/tipuesearch.css"); ?>">
</head>

<body>
  <div class="top-bar clearfix">
    <div class="container">

      <div class="pull-left top-contact">
        <ul class="clearfix">
          <li class="pull-left hidden-xs">
            <i class="fa fa-user"></i>
            <span class="text">
              <a href="https://grupointra.tomticket.com/chat/?id=EP45944&ac=2940416P30052020110558" rel="noopener" target="_blank">Atendimento Online</a>
            </span>
          </li>
          <li class="pull-left divider hidden-xs"><span>|</span></li>

          <li class="pull-left hidden-xs"><i class="fa fa-envelope"></i>
            <span class="text">
              <a href="mailto:contato@enfermagemadistancia.com.br">contato@enfermagemadistancia.com.br</a>
            </span>
          </li>


        </ul>
      </div>

      <div class="pull-right top-contact">
        <ul class="clearfix">
          <style media="screen">
            @keyframes pulse {
              0% {
                transform: scale(0.85);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
                font-size: 14px;
              }

              70% {
                transform: scale(1.1);
                box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
                font-size: 16px;
              }

              100% {
                transform: scale(0.85);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
                font-size: 14px;
              }
            }
          </style>
          <li class="pull-left hidden-xs" style="border: solid 3px RGBA(1,1,1,0.2);border-top: 0px;border-bottom: 0px;padding-left: 2px;padding-right: 2px;background-color: gray;min-width:216px;text-align:center;">
            <span class="text">
              <a href="<?php echo base_url('ava/carrinho/etapas/1'); ?>" style="animation: pulse 2s infinite;">
                <i class="fa fa-shopping-cart"></i>
                Carrinho de compras
                <span class="countItemsCheckout" id="countItemsCheckout">(0)</span>
              </a>
            </span>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-12 col-xs-12 text-center">
          <a href="<?php echo base_url(); ?>" title="Ir para home" id="logo" itemprop="brand" itemtype="http://schema.org/Brand" itemscope>

            <?php if (date("m-d") >= '10-01' && date("m-d") <= '10-31') { ?>
              <img src="<?php echo base_url("assets/img/logo.outubrorosa.png"); ?>" width="73" height="44" alt="Logo Enfermagem a distância">
            <?php } else if ((date("m-d") >= '11-01' && date("m-d") <= '11-30')) { /* Novembro Azul */ ?>
              <img src="<?php echo base_url("assets/img/logo.novembroazul.png"); ?>" width="73" height="44" alt="Logo Enfermagem a distância">
            <?php } else if ((date("m-d") >= '12-01' && date("m-d") <= '12-31')) { /* Dezembro Vermelho Azul */ ?>
              <img src="<?php echo base_url("assets/img/logo.dezembrovermelho.png"); ?>" width="73" height="44" alt="Logo Enfermagem a distância">
            <?php } else { ?>
              <img src="<?php echo base_url("assets/img/logo.png"); ?>" width="73" height="44" alt="Logo Enfermagem a distância">
            <?php } ?>

            <p class="logoTxtSlogan" style="font-weight: 500;" itemprop="name">Enfermagem a distância</p>
          </a>
          <div id="mobnav-btn"></div>
        </div>

        <div class="col-md-3 col-sm-12 col-xs-12">
          <form action="<?php echo base_url("busca"); ?>" method="GET" class="search">

            <div class="input-group">
              <input type="text" name="q" aria-label="Caixa de busca" class="form-control autocomplete search-main" placeholder="O que você quer aprender?" autocomplete="off">
              <span class="input-group-btn"><button class="btn btn-default" aria-label="pesquisar" name="pesquisar" type="submit"><i class="fa fa-search"></i></button></span>
            </div>
          </form>

          <div class="hidden-lg hidden-md">
            <a href="<?php echo base_url("aluno/novo"); ?>" class="button_outline_white"> Cadastre-se grátis </a>
            <a href="<?php echo base_url("aluno/login"); ?>" class="button_outline_white mobile pull-right"> Ambiente do aluno </a>
            <br><br>
          </div>

        </div>

        <div class="col-md-7 col-sm-12 col-xs-12">
          <nav class="">
            <ul class="sf-menu pull-right">

              <li class="normal_drop_down"><a href="<?php echo base_url("cursos/listagem/1"); ?>">Cursos Online</a></li>

              <li class="normal_drop_down text-center"><a href="<?php echo base_url("vip"); ?>"><strong>Plano VIP</strong><br><span class="label label-success">Novo</span></a></li>

              <li class="normal_drop_down"><a href="<?php echo base_url("papo-de-enfermagem/listagem/1"); ?>" class="text-center">Blog</a></li>

              <li class="normal_drop_down hidden-sm hidden-xs text-center">
                <a href="<?php echo base_url("aluno/login"); ?>" class="text-center">

                  <?php if (isset($session->usuario_id)) : ?>

                    <?php

                    if (isset($session->img_profile) && strpos($session->img_profile, 'default') === false) {
                      $img = $session->img_profile;
                    } else {
                      $img = base_url('assets/img/icone-perfil-1.0.png');
                    }

                    ?>

                    <img src="<?php echo $img; ?>" width="44" height="44" alt="perfil usuario">
                    Área <br> do Aluno
                  <?php else : ?>
                    <img src="<?php echo base_url('assets/img/icone-perfil-1.0.png'); ?>" width="44" height="44" alt="perfil usuario">
                    ENTRAR<br>
                    <small>OU CADASTRE-SE</small>
                  <?php endif; ?>

                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>