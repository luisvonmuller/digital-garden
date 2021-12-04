<?php
/* Vamos usar tipos 
  -> Já que é uma black box, acho que ao menos 10% de CPU vamos ter disponível...
    php8.1 index.php & sleep 1000 & cpulimit --limit 10 --cpu 1 -e php8.0 -z
    npx ts-node index.ts & sleep 1000 & cpulimit --limit 10 -cpu 1 -e node -z
*/

declare(strict_types=1);

/** Define o nosso data Set. */
define('DATASETAIRPORTS', json_decode(file_get_contents('../data.json'), true));
var_dump(count(DATASETAIRPORTS)); // Amount of listed AirPorts ... int(4408)

/** 
 Meta 
  -> Encontrar um código didático o suficiente para explicar de maneira acessível
  o que seria uma abstração que seja compatível em PHP/TypeScript/Java e aí comparar com Rust

 */
