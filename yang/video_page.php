<?php
require('vis_elems.php');
?>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link rel="stylesheet" type="text/css" href="vidpg_styles.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	  	<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
		<script src="video_page.js"></script>
		<script src="tagcanvas.js" type="text/javascript"></script>
		<script type="text/javascript" src="flowplayer-3.2.12.min.js"></script>	
	</head>
	<body onload="LoadShots(<?php echo $_GET["vid"];?>)">
		<div align="center" id="vidpg_container">
			<div id="header">
                            <h1>ELAMP Prototype System</h1>
                        </div>
			<div id="left_container">
				<div id="vid_container">
				<?php
                                        if(isset($_GET["vid"]))
                                        {
                                                $video_id = $_GET["vid"];
                                                PresentSingleVideo($video_id);
                                        }
                                ?>
				</div>

				<div id="video_meta_paenl">
					  <h3>Video Meta Information:</h3>
					  <div>
					  <?php
						if(isset($_GET["vid"]))
                                       		{
                                                	$video_id = $_GET["vid"];
	                                                PresentVideoMetaInfo($video_id);
                                        	}
					  ?>
					  </div>
					  <h3>Concepts Highlight</h3>
					  <div>
						<div style="width:280px;">
						<ul class="weighted" style="font-size: 50%" id="weightTags">
						<?php
                                                	if(isset($_GET["vid"]))
                                                	{
                                                	        $video_id = $_GET["vid"];
								PresentVideoSINClound($video_id);
                                                	}
	                                        ?>

						</ul>
						<canvas id="tagcanvas" style="float: left; margin-left:-10px" width="280" height="280"></canvas>
						</div>
					  </div>
					  <h3>ASR Transcript</h3>
					  <div>
					  <?php
                                                if(isset($_GET["vid"]))
                                                {
                                                        $video_id = $_GET["vid"];
                                                        PresentVideoASR($video_id);
                                                }
                                          ?>
					  </div>
				</div>
			</div>
			<div id="shot_container">
			
				<?php
					if(isset($_GET["vid"]))
						//echo "<iframe id=\"shot_frame\" name=\"shot_page\" src=\"shot_page.php?vid=".$_GET["vid"]."\" frameborder=\"1\"></iframe>";
						echo "<div id=\"shot_frame\" name=\"shot_page\"\"></div>";
				?>	
			</div>
		</div>
	</body>
</html>
