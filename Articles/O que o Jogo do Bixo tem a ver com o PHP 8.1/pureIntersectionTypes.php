<?php
require_once "./jogoDoBixoEnum.php";
class Apostador {
  public String $apostador = "@luisvonmuller"; 
}

/* Com o PHP 8.1 */
function computadorDoBixeiro(PossiveisApostasNoBicho & Apostador $umMonteDeApostas): string
{
    return match ($aposta) {
      PossiveisApostasNoBicho::URSO, 23 => 'Acertou' . PHP_EOL, // É o bixo do dia...
      default => "Errouuuuu" . PHP_EOL // Não é o bixo do dia...
    };
  echo "Total de apostas processadas" . count($umMonteDeApostas) . PHP_EOL;
}

/* Exemplo de usos */
echo computadorDoBixeiro(PossiveisApostasNoBicho::URSO new Apostador()); /* Acertou */
// 
// /* Antes do PHP 8.1 */
// function jogoDoBixoAntigo($aposta): string
// {
//   if (($aposta instanceof PossiveisApostasNoBicho) || (is_int($aposta))) {
//     return match ($aposta) {
//       PossiveisApostasNoBicho::URSO, 23 => 'Acertou' . PHP_EOL, // É o bixo do dia...
//       default => "Errouuuuu" . PHP_EOL // Não é o bixo do dia...
//     };
//   } else {
//     return "Aff... tá em gringo." . PHP_EOL;
//   }
// }
// 
// /* Exemplo de usos */
// echo jogoDoBixoAntigo(PossiveisApostasNoBicho::URSO); /* Acertou */
// echo jogoDoBixoAntigo(23); /* Acertou */
// echo jogoDoBixoAntigo("bear"); /* Tá em gringo. */
