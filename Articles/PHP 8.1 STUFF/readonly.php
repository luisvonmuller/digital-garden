<?php

class JogoDobBixo
{
  // No PHP 8.1 é tipo assim:
  public readonly String $bixoDoDia; /* Deixa pegar publicamnete mas não deixa altera. */

  public function __construct(String $bixoDoDia)
  {
    $this->bixoDoDia = $bixoDoDia;
  }
 
  /* Abaixo de PHP 8.1 */
  // public String $bixoDoDia = "Urso"; // Permite edição pelo bixeiro...
  // private String $bixoDoDia = "Urso"; /* Ia precisar da função para "PEGAR" esse dado... */
  // public function getBixoDoDia(): string
  // {
  //   return $this->bixoDoDia;
  // }

}
/* Caixa economica federal faz: */
$jogo = new JogoDobBixo("Urso");
// Sai o resultado... */
echo $jogo->bixoDoDia;
/* Bixeiro tenta modificar o resultado... */
$jogo->bixoDoDia = "Centopeia"; // NUM CONSEGUE ! FATAL ERROR!
/* Ainda é o mesmo bixo... */
echo $jogo->bixoDoDia;
