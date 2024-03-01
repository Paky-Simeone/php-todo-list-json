<?php
$serie_list_content = file_get_contents('../data/listaserie.json');

header('Content-Type: application/json');
echo $serie_list_content;






// var_dump($serie_list_content);
// $todo_array = json_decode($serie_list_content);
// var_dump( $todo_array );