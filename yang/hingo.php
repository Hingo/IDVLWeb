<html>
<head>
<title>Image Search</title>
</head>

<body>
<!--
<input type="radio" name="SearchType" value="color" /> Color Search <br/>
<input type="radio" name="SearchType" value="sift" /> Sift Search <br/>
<input type="radio" name="SearchType" value="texture" /> Texture Search <br/>
<br/>
<input type="button" id="btnSearchType" Value="Select Search Type" />
<div id="div1"> </div>-->

<!--<script>
$(document).ready(function(){
    $('#btnSearchType').click(function() {
	$.ajax({url:"/var/www/yang/hingo.php",success:function(result){
		$("#div1").html(result);
	}
// 	var srchType = $('input[name=SearchType]:checked').val();
// 	$('#div1').html('<br/>Selected Radio Button Value is : <b>' + srchType + '</b>');
    });
});
</script>

<br/><br/><br/>

Image-Id: <input type="text" id="imgid" value="1"><br />
<input type="button" id="btnImageId" Value="Select Image Id" />
<div id="div2"> </div>

<br/><br/><br/>

<script>
$(document).ready(function(){
    $('#btnImageId').click(function() {
	var imgID = $('#imgid').val();
	$('#div2').html('<br/>Submitted Image Id is : <b>' + imgID + '</b>');
    });
});
</script>-->

<?PHP
/*
error_reporting(E_ALL);
ini_set('display_errors', '1');*/
// phpinfo();
// 
// // $color_status = 'unchecked';
// $sift_status = 'unchecked';
// $texture_status = 'unchecked';
// 
// if (isset($_POST['Submit1'])) {
// 
// 	$selected_radio = $_POST['search_type'];
// 	
// // 		if ($selected_radio == 'color') {
// // 			$color_status = 'checked';
// // 			echo 'Color Search';
// // 
// // 		}
// 		if ($selected_radio == 'sift') {
// 			$sift_status = 'checked';
// 			echo 'Sift Search';
// 		}
// 		else if ($selected_radio == 'texture') {
// 			$texture_status = 'checked';
// 			echo 'Texture Search';
// 		}
// }
// 
// ?>

<!--<script>
function copyText()
{
document.getElementById("field2").value=document.getElementById("imgid").value;
}
</script>-->

<!-- <FORM NAME ="form1" METHOD ="POST" ACTION ="hingo.php"> -->

<!-- <INPUT TYPE = 'Radio' Name ='search_type'  value= 'color'  >Color -->
<?PHP // print $color_status; ?>


<!-- <INPUT TYPE = 'Radio' Name ='search_type'  value= 'sift' <?PHP
// print $sift_status; ?> >Sift -->

<!-- <INPUT TYPE = 'Radio' Name ='search_type'  value= 'texture' 
<?PHP
// print $texture_status; ?> >Texture -->

<!-- <INPUT TYPE = "Submit" Name = "Submit1"  VALUE = "Select the search type"> -->
<!-- </FORM> -->

<?php
	/*$paramCount = 20
	$paramFile = 859995
	
	exec("python ./../results_texture.py ".strval($paramCount)." ".strval($paramFile), $output);
	var_dump($output);
	*/// echo $output[0];

?>

<?php
	$user = "MED11";
	$password = "MED1132";
	if ($c = oci_connect($user, $password, 'mmdb.inf.cs.cmu.edu/mmdb')) {
		//echo 'Successfully connected to Oracle.<br/>';
	} else {
		$err = oci_error();
		die('Oracle Connect Error ' . $err['message']);
	}

	$queryPrefix = "select S.image as IMAGE, S.frame as FRAME ,M.movie_name as MNAME, M.movie_id as MID from shotbreak S, movie M where S.shotbreak_id = '";
	$querySuffix = "' AND S.movie_id = M.movie_id";
	
	$queries = array();
	
	if( ! isset( $_GET["shotid"] ) ){
		
		$shot_ids = array("859991", "859992", "859995", "860000", "860010", "860011", "860002", "860020", "861465", "861461");
		for ($i = 0; $i < sizeof($shot_ids); $i++)
		{
			$queries[$i] = $queryPrefix.$shot_ids[$i].$querySuffix;
		}
		
		for ($i = 0; $i < sizeof($queries); $i++)
		{
			$is = oci_parse($c,$queries[$i]);
			oci_execute($is);
			if(($row = oci_fetch_array($is,OCI_ASSOC)))
			{
				if (is_object($row['IMAGE'])) { // protect against a NULL LOB
					$data = $row['IMAGE']->load();
					$row['IMAGE']->free();
					$name = "tmp/img" . strval($i) . ".jpg";
					$fp = fopen($name, "w");
					fwrite($fp, $data);
					fclose($fp);
	// 				echo $i.'<br>';
					echo '<a href="hingo.php?shotid=000' . $shot_ids[$i] . '"><img height="60" width="80" src="' . $name . '"/></a>';
	// 				echo '<br><br>';
				}	
			}
		}
		
	}else{
		
		echo '<br/><br/>Texture Search Results<br/>';
		
		$paramCount = 15;
		$paramFile = substr($_GET['shotid'], 3);
		
// 		echo $paramFile;
		
		$queryForVid = "select S.movie_id as MID from shotbreak S where S.shotbreak_id = '".strval($paramFile)."'";
		$is = oci_parse($c,$queryForVid);
		oci_execute($is);
		$row = oci_fetch_array($is,OCI_ASSOC);
		
		$vidId = $row['MID'];
		$vidId = sprintf('%04d', $vidId);
// 		echo $vidId;
		
		exec("python ./../results_texture.py ".strval($paramCount)." ".strval($paramFile)." ".strval($vidId), $outputTexture);
	// 	var_dump($outputTexture);
	// 	echo strval(intval($outputTexture[0]));
		for ($i = 0; $i < sizeof($outputTexture); $i++)
		{
			$queries[$i] = $queryPrefix.$outputTexture[$i].$querySuffix;
		}
		
		for ($i = 0; $i < sizeof($queries); $i++)
		{
			$is = oci_parse($c,$queries[$i]);
			oci_execute($is);
			if(($row = oci_fetch_array($is,OCI_ASSOC)))
			{
				if (is_object($row['IMAGE'])) { // protect against a NULL LOB
					$data = $row['IMAGE']->load();
					$row['IMAGE']->free();
					$name = "tmp/img" . strval($i+100) . ".jpg";
					$fp = fopen($name, "w");
					fwrite($fp, $data);
					fclose($fp);
	// 				echo $i.'<br>';
					echo '<a href="hingo.php?shotid=' . $outputTexture[$i] . '"><img height="60" width="80" src="' . $name . '"/></a>';
	// 				echo '<br><br>';
				}	
			}
		}
		
		echo '<br/><br/> Color Search Results<br/>';
		
		exec("python ./../results_color.py ".strval($paramCount)." ".strval($paramFile)." ".strval($vidId), $outputColor);
	// 	var_dump($outputColor);
	// 	echo strval(intval($outputTexture[0]));
		for ($i = 0; $i < sizeof($outputColor); $i++)
		{
			$queries[$i] = $queryPrefix.$outputColor[$i].$querySuffix;
		}
		
		for ($i = 0; $i < sizeof($queries); $i++)
		{
			$is = oci_parse($c,$queries[$i]);
			oci_execute($is);
			if(($row = oci_fetch_array($is,OCI_ASSOC)))
			{
				if (is_object($row['IMAGE'])) { // protect against a NULL LOB
					$data = $row['IMAGE']->load();
					$row['IMAGE']->free();
					$name = "tmp/img" . strval($i+200) . ".jpg";
					$fp = fopen($name, "w");
					fwrite($fp, $data);
					fclose($fp);
	// 				echo $i.'<br>';
					echo '<a href="hingo.php?shotid=' . $outputTexture[$i] . '"><img height="60" width="80" src="' . $name . '"/></a>';
	// 				echo '<br><br>';
				}	
			}
		}
		
	}
?>

</body>
</html>


