<?php
/* Vamos usar tipos 
  -> Já que é uma black box, acho que ao menos 10% de CPU vamos ter disponível...
    php8.0 index.php & sleep 1000 & cpulimit --limit 10 --cpu 1 -e php8.0 -z
*/

declare(strict_types=1);

/** Define o nosso data Set. */
define('DATASETAIRPORTS', json_decode(file_get_contents('../data.json'), true));
var_dump(count(DATASETAIRPORTS)); // Amount of listed AirPorts ... int(4408)


function withOverHead(): void
{
  //$totalIterations = 0;
  /* Overhead */
  $dataSetLenght = count(DATASETAIRPORTS);
  $counterExecutions = 0;
  while ($counterExecutions <= 1000) {
    /* Clean dataset to next run */
    $dataSetWantedData = [];
    $counter = 0;
    while ($dataSetLenght > $counter) {
      $airPort = DATASETAIRPORTS[$counter];
      $dataSetWantedData[] = [
        "name" => $airPort["Airport"]["Name"],
        "code" => $airPort["Airport"]["Code"],
        "totalFlights" => $airPort["Statistics"]["Flights"]["Total"]
      ];
      $counter++;
    }
    //   var_dump(count($dataSetWantedData));
    $counterExecutions++;
  }
  //var_dump($counterExecutions); // Proof of "How much times it has been Over Executed"! !! Must be: 10 !!
  //var_dump($totalIterations); // Proof of total iterations over the object itself! !! Must be: 44080 !!
}


function withoutOverHead(): void
{
  //  $counterExecutions = 0; // Counter
  //  $totalIterations = 0;
  foreach (range(0, 1000) as $exec) {
    $dataSetWantedData = []; // Clears wanted dataset...
    foreach (DATASETAIRPORTS as $airPort) {
      $dataSetWantedData[] = [
        "name" => $airPort["Airport"]["Name"],
        "code" => $airPort["Airport"]["Code"],
        "totalFlights" => $airPort["Statistics"]["Flights"]["Total"]
      ];
      //  $totalIterations++;
    }
    //var_dump(count($dataSetWantedData));
    // $counterExecutions++;
  }
  // var_dump($counterExecutions); // Proof of "How much times it has been Over Executed"! !! Must be: 10 !!
  // var_dump($totalIterations); // Proof of total iterations over the object itself! !! Must be: 44080 !!
}


function main(): void
{

  /* 12898 ms -> 12746 -> 12822ms (12800ms~) */
  $startOverHead = microtime(true);
  withOverHead();
  $endOverHead = microtime(true);
  $executionTimeOverhead = round(($endOverHead - $startOverHead) * 1000);

  /* Let this thread sleep a little */
  //sleep(2);
  // 
  /* 12873 ms -> 12776ms -> 12708ms  (12600~ ms)*/

  // $start = microtime(true);
  // withoutOverHead();
  // $end = microtime(true);
  // $executionTime = round(($end - $start) * 1000);

  echo "With Over Head: " . $executionTimeOverhead . " ms" . PHP_EOL;
  //echo "Without Over Head: " . $executionTime . " ms" . PHP_EOL;
}

main();
