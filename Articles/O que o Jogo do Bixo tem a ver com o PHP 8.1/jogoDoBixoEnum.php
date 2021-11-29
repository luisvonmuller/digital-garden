<?php

/** Vamos conversar sobre magic strings... */
/* Definir 24 bixos? Aí é brabo... */
$tartaruga = "Tartaruga";
$jacare = "Jacaré";
$centopeia = "Centopeia"; /* Aqui tá escrito certo */

enum PossiveisApostasNoBicho
{
    case AVESTRUZ; /* 1 */
    case AGUIA; /* 2 */
    case BURRO;  /* 3 */
    case BORBOLETA; /* 4 */
    case CACHORRO; /* 5 */
    case CABRA; /* 6 */
    case CARNEIRO;/* 7 */
    case CAMELO;/* 8 */
    case COBRA; /* 9 */
    case COELHO;/* 10 */
    case CAVALO;/* 11 */
    case ELEFANTE;/* 12 */
    case GALO;/* 13 */
    case GATO;/* 14 */
    case JACARE;/* 15 */
    case LEAO; /* 16 */
    case MACACO;/* 17 */
    case PORCO;/* 18 */
    case PAVAO;/* 19 */
    case PERU;/* 20 */
    case TOURO;/* 21 */
    case TIGRE;/* 22 */
    case URSO;/* 23 */
    case VEADO;/* 24 */
    case VACA;/* 25 */
}

function jogoDoBixo(PossiveisApostasNoBicho $aposta): string
{
  return match ($aposta) {
    PossiveisApostasNoBicho::URSO => 'Acertou' . PHP_EOL, // É o bixo do dia...
    default => "Errouuuuu" . PHP_EOL // Não é o bixo do dia...
  };
}

echo jogoDoBixo(PossiveisApostasNoBicho::VACA);
echo jogoDoBixo(PossiveisApostasNoBicho::URSO);


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
