<?php
require('vis_elems.php');
?>

<html>
        <head>
                <link rel="stylesheet" type="text/css" href="styles.css">
		<script src="shot_page.js"></script>
        </head>
        <body>
                <div id="thumb_container">
                        <?php
				if(isset($_GET["vid"]))
                                {
					$video_id = $_GET["vid"];
					if(isset($_GET["sname"]))
	                                {
	                                        $sname = $_GET["sname"];
						PresentVideoShotsWithConcept($video_id,$sname);
					}
					else
	                                        PresentSingleVideoShots($video_id);
                                }	
                        ?>
                </div>
        </body>
</html>
