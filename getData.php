<?php
ini_set('user_agent', 'PHP/' . PHP_VERSION);
header("content-type: application/json");

$item = $_GET['item'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://services.runescape.com/m=itemdb_rs/api/graph/'.$item.'.json');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);

echo $output;

?>
