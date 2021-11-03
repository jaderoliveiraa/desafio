<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Grupo Intra Ead">
  <title>Maior Portal de Atualização para Enfermagem da América Latina</title>
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=5">
  <meta name="author" content="Grupo Intra de Ensino e Pesquisa a Distancia Ltda">
  <meta name="description" content="Oferta Plano VIP">

  <link rel="icon" href="favicon.ico">
  <meta name="theme-color" content="#875b9f">
  <meta name="apple-mobile-web-app-title" content="Cursos EAD">
  <meta name="application-name" content="Cursos EAD">

  <link href="<?php echo base_url("assets/css/ripple-effect.css"); ?>" rel="stylesheet">
  <link href="<?php echo base_url("assets/plugins/floating-menu/floating-menu-1.0.css"); ?>" rel="stylesheet">


  <!-- Bootstrap core CSS -->
  <link href="<?php echo base_url("assets/css/custom.2.2.min.css?1"); ?>" rel="stylesheet">
  <link href="<?php echo base_url("assets/css/bootstrap.min.css"); ?>" rel="stylesheet">
  <!-- Fontawesome CSS -->
  <!-- <link rel="preload" href="https://www.enfermagemadistancia.com.br/m/assets/fontawesome/webfonts/fa-solid-900.woff2" as="font" crossorigin> -->
  <link href="<?php echo base_url("assets/fontawesome/css/all.min.css"); ?>" rel="stylesheet" async>
</head>

<body>

  <div class="bck-sidebar"></div>
  <div id="sidebar">

    <ul>


      <li ripple class="user">
        <a href="<?php echo base_url('aluno/login'); ?>">
          <i>
            <img src="<?php echo base_url('assets/images/user.png'); ?>" alt="Imagem do Usuário" width="57" height="57" class="img-responsive">
          </i>
          <p class="no-margin">
            ENTRAR<br><small>OU CADASTRAR-SE</small>
          </p>
        </a>
      </li>

      <li ripple><a href="<?php echo base_url(); ?>" aria-label="Página Inicial"><i class="fas fa-home" aria-label="Página Inicial"></i> Inicio</a></li>

      <li ripple>
        <a href="https://www.enfermagemadistancia.com.br/ava/carrinho/etapas/1">
          <i class="fa fa-shopping-cart"></i>
          Carrinho de compras
        </a>
      </li>
      <li ripple><a href="<?php echo base_url('cursos'); ?>"><i class="fas fa-book-open"></i> Cursos Online</a></li>
      <li ripple><a href="<?php echo base_url('vip'); ?>"><i class="fas fa-crown"></i> Plano VIP</a></li>
      <li ripple><a href="<?php echo base_url('quero-ser-tutor'); ?>"><i class="fas fa-user-graduate"></i> Quero ser tutor</a></li>
      <li ripple><a href="https://grupointra.tomticket.com/chat/?id=EP45944&ac=2940416P30052020110558" rel="noopener" target="_blank"><i class="fa fa-user"></i>Atendimento Online</a></li>
      <li ripple><a href="<?php echo base_url('certificado/autenticar'); ?>"><i class="fas fa-award"></i> Verificar Autenticidade do Certificado</a></li>
      <li ripple><a href="<?php echo base_url('../papo-de-enfermagem'); ?>"><i class="fas fa-blog"></i> Blog</a></li>
      <li ripple><a href="<?php echo base_url('institucional/quem-somos'); ?>"><i class="fas fa-user-friends"></i> Quem somos</a></li>
      <li ripple><a href="<?php echo base_url('ajuda/como-funciona'); ?>"><i class="fas fa-star"></i> Como funciona</a></li>
      <li ripple><a href="<?php echo base_url('institucional/politica-de-privacidade'); ?>"><i class="fas fa-balance-scale"></i> Politica de privacidade</a></li>
      <li ripple><a href="<?php echo base_url('institucional/termo-de-compromisso'); ?>"><i class="fas fa-handshake"></i> Termo de compromisso</a></li>
      <li ripple><a href="<?php echo base_url('ajuda/faq'); ?>"><i class="fas fa-question"></i> Dúvidas comuns</a></li>
      <li ripple><a href="<?php echo base_url('o-ead-e-confiavel'); ?>"><i class="fas fa-smile-wink"></i> O EAD é confiável?</a></li>

      <?php if (isset($session->usuario_id) && !empty($session->usuario_id)) : ?>
        <li class="divider"></li>
        <li ripple><a href="<?php echo base_url('aluno/logout'); ?>">Sair</a></li>
      <?php endif; ?>

    </ul>
  </div>

  <header class="topHeader">

    <?php if (isset($session->usuario_nome) && !empty($session->usuario_nome)) : ?>
      <div class="container-fluid text-center userLogged" style="color:white;">
        <strong>Olá
          <?php
          if (!empty($session->usuario_nome)) {
            echo explode(' ', trim($session->usuario_nome))[0];
          }
          ?>
          , seja bem-vindo</strong>
      </div>
    <?php endif; ?>

    <div class="container-fluid">

      <?php if (isset($_SESSION['usuario_id'])) : ?>
        <div class="menu left" style="padding:0px;padding-left:15px">
          <div>
            <a href="javascript:void()" class="loadSearch" arial-label="Pesquisar" ripple>
              <i arial-label="Pesquisar" class="fas fa-search" style="font-size: 20px;"></i>
            </a>
          </div>
          <div style="padding-top:20px;">
            <?php if (!empty($enableCartV2)) : ?>
              <a href="https://www.enfermagemadistancia.com.br/ava/carrinho/etapas/1">
                <i class="fa fa-shopping-cart" style="font-size: 20px;"></i>
                <span id="countItemsCheckout" class="countItemsCheckout text-white" style="position: relative;left: 2px;top: -17px;font-size: 10px;display: block;">0</span>
                <script type="text/javascript">
                  if (carrinhoEAD && carrinhoEAD.cp && carrinhoEAD.plus) {
                    document.getElementById('countItemsCheckout').innerHTML = (carrinhoEAD.cp.length + carrinhoEAD.plus.length);
                  }
                </script>
              </a>
            <?php else : ?>
              <a href="https://www.enfermagemadistancia.com.br/ava/aluno/carrinho-de-compras">
                <i class="fa fa-shopping-cart" style="font-size: 20px;"></i>
                <span class="countItemsCheckout text-white" style="position: relative;left: 2px;top: -17px;font-size: 10px;display: block;">
                  <?php echo isset($_SESSION["carrinho"]) ? count($_SESSION["carrinho"]) : '0'; ?>
                </span>
              </a>
            <?php endif; ?>
          </div>
        </div>
      <?php else : ?>
        <div class="menu left">
          <a href="javascript:void()" class="loadSearch" aria-label="Pesquisar" ripple>
            <i class="fas fa-search"></i>
          </a>
        </div>
      <?php endif; ?>

      <div class="row text-center">

        <div class="col-xs-12 mb15 mt10">
          <a href="<?php echo base_url(); ?>" aria-label="Página Inicial">
            <img src="<?php echo base_url('assets/images/logo.png'); ?>" alt="Página Inicial" id="logo" width="73" height="40">
          </a>
        </div>

        <div class="col-xs-12 fw500" id="slogan" itemprop="brand" itemtype="http://schema.org/Brand" itemscope>
          <span itemprop="name">Enfermagem a Distância</span>
        </div>

      </div>

      <div class="menu right">
        <a href="javascript:void()" class="loadMenu" title="Menu Principal" arial-label="Menu Principal" ripple>
          <i arial-label="menu" class="fas fa-bars"></i>
        </a>
      </div>
    </div>

    <div class="search">
      <!--<i class="fas fa-search ico"></i>-->
      <form class="form-search">
        <input type="search" class="form-control input-search" aria-label="Pesquisar" placeholder="Pesquisar no EAD..." value="<?php echo isset($searchTerm) ? $searchTerm : '' ?>">
      </form>
    </div>

  </header>

  <!--<div class="espace"></div>-->

  <?php if (isset($session->usuario_nome) && !empty($session->usuario_nome)) : ?>
    <div class="col-xs-12"></div>
  <?php else : ?>
    <div class="col-xs-12"></div>
  <?php endif; ?>