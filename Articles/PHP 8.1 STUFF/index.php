<?php

/** Vamos conversar sobre magic strings... */
/* Po... defini 24? Aí brabo... */
$tartaruga = "Tartaruga";
$jacare = "Jacaré";
$centopeia = "Centopeia"; /* Aqui tá escrito certo */

enum PossiveisApostas
{
    case CENTOPEIA; 
    case JACARE;
    case TARTARUGA;
    case URSO;
    case URSAL;
}

function jogoDoBixo(PossiveisApostas $aposta): string
{
  return match ($aposta) {
    PossiveisApostas::URSO => 'Acertou' . PHP_EOL, // É o bixo do dia...
    default => "Errouuuuu" . PHP_EOL // Não é o bixo do dia...
  };
}

echo jogoDoBixo(PossiveisApostas::CENTOPEIA);
echo jogoDoBixo(PossiveisApostas::JACARE);
echo jogoDoBixo(PossiveisApostas::JACARE);
//jogoDoBixo($centopeia); /* Define um cadeia caracteres meio mágica */
//jogoDoBixo("Centopeia");
//jogoDoBixo("Sentopeia");


// class possiveisApostas
// {/
  // TUDO AQUI AINDA ÉSTRING.....
//   const TARTARUGA = 'Tartaruga';
//   const JACARE = 'Jacaré';
//   const CENTOPEIA = 'Centopeia'; /* String */
// }
// $possiveisApostas = new possiveisApostas();
//jogoDoBixo($possiveisApostas::CENTOPEIA);
