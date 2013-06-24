

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
$query = "select M.movie_id as MID, M.movie_name as MNAME from movie M";
$ms = oci_parse ($c, $query);
oci_execute($ms);
while(($row = oci_fetch_array($ms,OCI_ASSOC)))
{
	$vid = $row["MID"];
	$vname = $row["MNAME"];
	$idx_doc_filepath = "/var/www/infmed/IdxDoc/".$vid.".xml";
	$idx_doc_file = fopen($idx_doc_filepath,'w');
	fprintf($idx_doc_file,"<add>\n<doc>\n");
	fprintf($idx_doc_file,"<field name=\"id\">%s</field>\n",$vid);
	fprintf($idx_doc_file,"<field name=\"name\">%s</field>\n",$vname);

	$query = "select S.TRANSCRIPT_TEXT as TRAN from segment S where S.movie_id=".$vid;
	$ss = oci_parse ($c, $query);
	oci_execute($ss);
	while(($row = oci_fetch_array($ss,OCI_ASSOC)))
	{	
		if (isset($row['TRAN']) && is_object($row['TRAN'])) 
		{
			$trans_txt = $row["TRAN"]->load();
			$row['TRAN']->free();
			$filter_string = FilterTranscriptGarbage($trans_txt);
			fprintf($idx_doc_file,"<field name=\"asr\">%s</field>\n",$filter_string);
		}
		else
			fprintf($idx_doc_file,"<field name=\"asr\"></field>\n");

		$query = "select V.VALUE as OCR from VOCR V where V.movie_id =" .$vid;
		$vs = oci_parse($c, $query);
		oci_execute($vs);
		fprintf($idx_doc_file,"<field name=\"ocr\">");
		while(($row = oci_fetch_array($vs,OCI_ASSOC)))
		{
			$ocr_word = $row["OCR"];
			$ocr_word = preg_replace("/[^A-Za-z0-9 ]/", '', $ocr_word);
			fprintf($idx_doc_file,"%s ",FilterTranscriptGarbage($ocr_word));
		}
		fprintf($idx_doc_file,"</field>\n");
		oci_free_statement($vs);
	}
	fprintf($idx_doc_file,"</doc>\n</add>\n");
	fclose($idx_doc_file);
	oci_free_statement($ss);
}
oci_free_statement($ms);
oci_commit($c);


?>
