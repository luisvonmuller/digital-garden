<?php


function count_and_iterate(Iterator&Countable $value) {
    foreach ($value as $val) {
        echo $val;
    }

    count($value);
}
