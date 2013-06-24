<?php
        
//header("Content-Type: text/html;");
$contents=@file_get_contents("http://cq-09.inf.cs.cmu.edu:8983/solr/collection1/select/?indent=on&q=fish&wt=json"); 
$json_doc = json_decode($contents, true);
$docs = $json_doc["response"]["docs"];
foreach($docs as $doc)
{
	echo $doc["id"];
	echo "  ";
}
//var_dump($docs);
?> 
