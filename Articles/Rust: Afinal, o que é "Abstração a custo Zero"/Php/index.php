<?php
/* Vamos usar tipos */

declare(strict_types=1);

/** Define o nosso data Set. */
define('DATASETAIRPORTS', json_decode(file_get_contents('../data.json'), true));
var_dump(count(DATASETAIRPORTS)); // Amount of listed AirPorts ... int(4408)


function withOverHead(): void
{
  $totalIterations = 0;
  /* Overhead */
  $dataSetLenght = count(DATASETAIRPORTS);
  $counterExecutions = 0;
  while ($counterExecutions <= 10) {
    /* Clean dataset to next run */
    $dataSetWantedData = [];
    $counter = 0;
    while ($dataSetLenght > $counter) {
      $airPort = DATASETAIRPORTS[$counter];
      $dataSetWantedData[$counter] = [
        "name" => $airPort["Airport"]["Name"],
        "code" => $airPort["Airport"]["Code"],
        "totalFlights" => $airPort["Statistics"]["Flights"]["Total"]
      ];
      $totalIterations++;
      $counter++;
    }
    $counterExecutions++;
  }
  var_dump($counterExecutions); // Proof of "How much times it has been Over Executed"! !! Must be: 10 !!
  var_dump($totalIterations); // Proof of total iterations over the object itself! !! Must be: 44080 !!
}


function withoutOverHead(): void
{
  $counterExecutions = 0; // Counter
  $totalIterations = 0;
  foreach (range(0, 10) as $exec) {
    $dataSetWantedData = []; // Cleans wanted dataset...
    foreach (DATASETAIRPORTS as $airPort) {
      $dataSetWantedData += [
        "name" => $airPort["Airport"]["Name"],
        "code" => $airPort["Airport"]["Code"],
        "totalFlights" => $airPort["Statistics"]["Flights"]["Total"]
      ];
      $totalIterations++;
    }
    $counterExecutions++;
  }
  var_dump($counterExecutions); // Proof of "How much times it has been Over Executed"! !! Must be: 10 !!
  var_dump($totalIterations); // Proof of total iterations over the object itself! !! Must be: 44080 !!

}


function main(): void
{
  // $time_start = microtime(true);
  // withOverHead();
  // $time_end = microtime(true);
  // $executionTimeOverhead = ($time_end - $time_start);
  $time_start = microtime(true);
  withoutOverHead();
  $time_end = microtime(true);
  $executionTime = ($time_end - $time_start);
  //echo $executionTimeOverhead . PHP_EOL;

  echo $executionTime . PHP_EOL;
}

main();
