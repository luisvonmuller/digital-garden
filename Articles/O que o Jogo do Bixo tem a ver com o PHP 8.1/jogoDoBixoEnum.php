<?php

/** Vamos conversar sobre magic strings... */
/* Definir 24 bixos? Aí é brabo... */
$tartaruga = "Tartaruga";
$jacare = "Jacaré";
$centopeia = "Centopeia"; /* Aqui tá escrito certo */

enum PossiveisApostasNoBicho: int
{
    case AVESTRUZ = 1; /* 1 */
    case AGUIA = 2; /* 2 */
    /* ...restante dos bichos ... */
    case URSO = 23;/* 23 */
    case VEADO = 24;/* 24 */
    case VACA = 25;/* 25 */
}

function jogoDoBixoEnum(PossiveisApostasNoBicho $aposta): string
{
  return match ($aposta) {
    PossiveisApostasNoBicho::URSO => 'Acertou' . PHP_EOL, // É o bixo do dia...
    default => "Errouuuuu" . PHP_EOL // Não é o bixo do dia...
  };
}


// 
// echo jogoDoBixo(PossiveisApostasNoBicho::VACA);
// echo jogoDoBixo(PossiveisApostasNoBicho::URSO);


//jogoDoBixo($centopeia); /* Define um cadeia caracteres meio mágica */
//jogoDoBixo("Centopeia");
//jogoDoBixo("Sentopeia");


class ApostarNoBixo
{
    const AVESTRUZ = 1; /* 1 */
    const AGUIA = 2; /* 2 */
    /* ...restante dos bichos ... */
    const URSO = 23;/* 23 */
    const VEADO = 24;/* 24 */
    const VACA = 25;/* 25 */
}
$apostandoNoBixo = new ApostarNoBixo();\


function jogarNoBixo(int $aposta): string {
  if($aposta <= 25 && $aposta > 1) {
    return match ($aposta) {
      PossiveisApostasNoBicho::URSO => 'Acertou' . PHP_EOL, // É o bixo do dia...
      default => "Errouuuuu" . PHP_EOL // Não é o bixo do dia...
    };
  } else {
    return 'Aposta inválida, dinheiro do Bixeiro, fica espero "rapá"!';
  }
}

jogarNoBixo($apostandoNoBixo::AGUIA);
