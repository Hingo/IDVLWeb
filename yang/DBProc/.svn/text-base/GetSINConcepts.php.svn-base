

<?php
require("../util.php");
function connectDB($user, $password){
	if ($c = oci_connect($user, $password, 'mmdb.inf.cs.cmu.edu/mmdb')) {
		//echo 'Successfully connected to Oracle.<br/>';
	} else {
		$err = oci_error();
		die('Oracle Connect Error ' . $err['message']);
	}
	return $c;
}


$c= connectDB("MED11","MED1132");
$query = "select F.short_name as SNAME from feature_info F";
$fs = oci_parse ($c, $query);
oci_execute($fs);
$sname_file = fopen("../SinConcepts/concepts.txt",'w');
while(($row = oci_fetch_array($fs,OCI_ASSOC)))
{
	$sname = $row["SNAME"];
	fprintf($sname_file,"%s\n",$sname);
}
fclose($sname_file);
oci_free_statement($fs);
oci_commit($c);


?>
