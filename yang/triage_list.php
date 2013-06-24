<?php
require('vis_elems.php');
?>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link rel="stylesheet" type="text/css" href="triage_styles.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	  	<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
		<script src="triage_list.js" type="text/javascript"></script>
	</head>
	<body>
		<div align="center">
			<div id="triage_main_container">
				<?php 
					$triage_items_folderpath = 'MER/test/E022';
					LoadTriageItems($triage_items_folderpath);
				?>
				
			</div>
		</div>
	</body>
</html>
