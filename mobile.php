<?php
function base_url($s = '')
{
    return './files/mobile/' . $s;
}
$config = new stdClass();
$config->siteName = 'Enfermagem A Distancia';
$config->facebookFanPage = '';
include_once(base_url("header.php"));
?>

<!-- seu código aqui :) -->



<div style="padding:150px 0px;text-align:center">
    Hello World!
</div>



<!-- fim do seu codigo -->

<?php
include_once(base_url("footer.php"));
?>