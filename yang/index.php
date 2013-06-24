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
	</head>
	<body >
		<div id="container">
        	        <div id="header">
		            <h1>ELAMP Prototype System</h1>
        		</div>
			
			<div align="center" id="login_panel">
				<div style="width:330px; border:solid 1px #333333;" align="left">
					<div style="background-color:#333333; color:#FFFFFF; padding:3px;"><b>Login</b></div>
					<div style="margin:30px">
						<label>UserName:</label><input type="text" id="username"/><br /><br />
						<label>Password :</label><input type="password" id="password"/><br/><br/>
						<button id="login_btn"/>Login</button><br />
						<div id="login_msg" style="color:#cc0000; margin-top:10px;"></div>
					</div>
				</div>
			</div>

			<div id="topmenu">
				<ul>
					<li ><a href="VCDII.php" target="module_page">VCDII Generation | </a></li>
					<li ><a href="#">ECD Generation | </a></li>
					<li ><a href="#">Event Search | </a></li>
					<li ><a href="triage.php" target="module_page" href="#">Event Triage</a></li>
				</ul>
			</div>
			<iframe id="module_container" name="module_page"  frameBorder="0"></iframe>
		</div>
	</body>
</html>
