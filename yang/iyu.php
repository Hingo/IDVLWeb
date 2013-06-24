<html>
	<head>
	</head>
	<body >
<?php
	$user = "MED11";
	$password = "MED1132";
	if ($c = oci_connect($user, $password, 'mmdb.inf.cs.cmu.edu/mmdb')) {
		//echo 'Successfully connected to Oracle.<br/>';
	} else {
		$err = oci_error();
		die('Oracle Connect Error ' . $err['message']);
	}
	$i = 0;
	
	
	$shot_ids = array("859991", "859992", "859995", "860000", "860010", "860011", "860002", "860020", "860023", "860200");
	$queryPrefix = "select S.image as IMAGE, S.frame as FRAME ,M.movie_name as MNAME, M.movie_id as MID from shotbreak S, movie M where S.shotbreak_id = '";
	$querySuffix = "' AND S.movie_id = M.movie_id";
	
	$queries = array();
	for ($i = 0; $i < sizeof($shot_ids); $i++)
	{
		$queries[$i] = $queryPrefix.$shot_ids[$i].$querySuffix;
	}
	
	for ($i = 0; $i < sizeof($queries); $i++)
	{
		$is = oci_parse($c,$queries[$i]);
// 		echo $queries[$i];
		oci_execute($is);
		if(($row = oci_fetch_array($is,OCI_ASSOC)))
		{
			if (is_object($row['IMAGE'])) { // protect against a NULL LOB
				$data = $row['IMAGE']->load();
				$row['IMAGE']->free();
				$name = "tmp/img" . strval($i) . ".jpg";
// 				echo 'Here is something '.$acc;
				$fp = fopen($name, "w");
				fwrite($fp, $data);
				fclose($fp);
				echo '<img src="' . $name . '"/>';
			}	
		}
	}
	
?>

	</body>
</html>
