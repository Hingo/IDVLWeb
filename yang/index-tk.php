<?php
require('vis_elems.php');
?>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
		<!--<link type="text/css" href="Jit/Examples/css/base.css" rel="stylesheet" />-->
		<link type="text/css" href="Jit/Examples/css/Hypertree.css" rel="stylesheet" />

		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>  
		<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>  
		<script language="javascript" type="text/javascript" src="Jit/jit.js"></script>
		<script language="javascript" type="text/javascript" src="hypertree.js"></script>
		<script src="index_page.js"></script>
<script>
  // just here for quick demo -- can be moved to separate .js file
  function loadVCD() {
  $('#module_container').load( 'VCDII.php', 'body' );  // only put in contents of the 'body' tag
  console.log("started load of VCDII ...");
  }
</script>
	</head>
	<body >
		<div id="container">
        	        <div id="header">
		            <h1>ELAMP Prototype System</h1>
        		</div>


			<div id="topmenu">
				<ul>
					<li ><a href="javascript:loadVCD();">VCDII Generation | </a></li>
					<li ><a href="#">ECD Generation | </a></li>
					<li ><a href="#">Event Search | </a></li>
					<li ><a href="triage.php" target="module_page" href="#">Event Triage</a></li>
				</ul>
			</div>
			<div id="module_container" name="module_page" ></div>

		</div>
	</body>
</html>
