<?php 
$new_serie =[
    'name'=> $_POST['name'],
    'done'=> $_POST['done'] === 'true',
];

$json_listaserie = file_get_contents('../data/listaserie.json');
$listaserie = json_decode($json_listaserie, true);

$listaserie[] = $new_serie;

$json_listaserie = json_encode($listaserie);

file_put_contents('../data/listaserie.json', $json_listaserie);

header('Content-Type: application/json');
echo $json_listaserie;