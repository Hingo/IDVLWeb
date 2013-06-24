<?php
$mer_xml = simplexml_load_file('227617.xml');
$terms= explode('_',$mer_xml["clipID"]);

$str = "dwadwawd (dwadaw dwadaw 10:0) ";
$str = trim(preg_replace('/\s*\([^)]*\)/', '', $str));
echo $str."</br>";
?>
