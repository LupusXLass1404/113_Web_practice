<?php

$animal = $_GET['animal'] ?? "cat";
$fruit = $_GET['fruit'] ?? "apple";
$people = $_GET['people'] ?? "Amy";


$obj = [
    'color' => "lightblue",
    'backgroundColor' => "darkblue",
    'width' => "240px",
    'height' => "400px",
    'padding' => "24px",
    'animal' => $animal,
    'fruit' => $fruit,
    'people' => $people,
];

$JSON = json_encode($obj);

echo $JSON;

?>