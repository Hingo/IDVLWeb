<?php
require('vis_elems.php');
?>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="triage_styles.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>  
		<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
		 <script>
		$(function() {
			$( ".leftmenu" ).accordion({
           		     collapsible: true,
		             heightStyle: "content"
		        });
		});
		</script>
	</head>
	<body>

		
		<div class="triage_page_container">
				
			
			<div class="leftmenu">
				<h3 style="font-size:12px">Event Name:</h3>
				<div style="font-size:10px">
					Cleaning an appliance.
				</div>
				<h3 style="font-size:12px">Definition:</h3>
				<div style="font-size:10px">
					One or more people clean an appliance.
				</div>
				<h3 style="font-size:12px">Explication:</h3>
                                <div style="font-size:10px;overflow:scroll;" >
                                        Household appliances are machines that are used for
					household functions such as cleaning, cooking, or cooling the
					home. Major household appliances are typically large appliances that
					are often metallic, black/white/beige/stainless steel in color, and
					can include: air conditioners, dishwashers, clothes dryers, drying
					cabinet, freezer, refrigerator, kitchen stove, water heater, washing
					machine, trash compactor, microwave ovens and induction
					cookers. Non-major household appliances are typically small appliances
					that perform a more specialized task, and can include: coffee makers,
					toasters, stand mixers, food processors, and electric can
					openers. Small devices that are held and moved with the hand while
					operating them, such as hand mixers, hair dryers, or electric
					toothbrushes, are not considered appliances and therefore cleaning
					these items is off-topic for this event.  Cleaning an appliance
					usually involves applying some kind of cleansing product to the
					appliance and scrubbing by hand and/or rinsing it with water. For a
					refrigerator or freezer, cleaning may also involve simply removing
					unwanted/old food items from the appliance. Cleaning of any appliance
					may also involve removing or disassembling some or all of the
					appliance to clean some parts separately and/or get better access to
					parts of the appliance to clean them. For example, the drawers and
					some shelves of a refrigerator may be removed and washed separately.
                                </div>
			</div>
			
			
			<div class="triage_list_content">
				<iframe name="triage_list" src="triage_list.php" frameborder="1"></iframe>
			</div>
		</div>
	</body>
</html>
