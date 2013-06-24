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
	<body onload="sin_hypertree_init();">
		<div id="container">
			<div class="leftmenu">
				<div><p>Query Elements:</p></div>
				<!--<div style="text-align:left"><a href="#" style="margin-left:12px" id="filters_btn">add filters</a></div>-->
				<div class="filter_panel">
					<ul id="filter_menu">
						<!--<li class="filter_options"><a href="#" id="event_filter_btn">Event Classes:</a></li>-->
						<li class="filter_options">
							<a href="#">Concepts:</a>
							<ul>
		  						<li><a id="sin_filter_btn" href="#">SIN</a></li>
		 	 					<!--<li><a id="objbnk_filter_btn" href="#">Object Bank</a></li>-->
							</ul>
						</li>
						<li class="filter_options">
                                                        <a href="#">Keywords:</a>
                                                        <ul>
                                                                <li><a id="asr_filter_btn" href="#">ASR</a></li>
                                                                <li><a id="ocr_filter_btn" href="#">OCR</a></li>
								<!--<li><a id="vname_filter_btn" href="#">Video Name</a></li>-->
                                                        </ul>
                                                </li>
					</ul>
				</div>
			
				<div id="filter_bucket_panel" class="ui-widget">
					<p>Query Bucket:</p>
					<table id="filter_bucket" class="ui-widget ui-widget-content">
						<thead>
					      		<tr class="ui-widget-header ">
								<th>Element type</th>
								<th>Description</th>
								<th>Block</th>
								<th>Remove</th>
					      		</tr>
					    	</thead>
					    	<tbody>
					    	</tbody>
					</table>
					<button id="clear_filter_bucket_btn">clear bucket</button>
					<a style="margin-left:5px" target="" id="search_btn" href=""><button>Search</button></a>
					
					<div id="corpus_btn">
						<p>Searching Corpus:</p>
						<input type="radio" id="corp_all_btn" name="radio" checked="Checked" style="margin-left:10px"/><label style="font-size:12px;" for="corp_all_btn">Whole Database</label>    
						<input type="radio" id="corp_curr_btn" name="radio" /><label style="font-size:12px" for="corp_curr_btn">Current Results</label>  
					</div>
				</div>
				
				<div id="search_history_panel" class="ui-widget">
                                        <p>Searching History:</p>
                                        <table id="history_table" class="ui-widget ui-widget-content">
                                                <thead>
                                                        <tr class="ui-widget-header ">
                                                                <th>Iteration</th>
                                                                <th>Element type</th>
								<th>Description</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                        </table>
                                </div>				
	
			</div>
			
			
			<div class="content">
				<div id="tabs">
					<ul>
				    		<!---<li><a class="tab_names" href="#tabs-1">Q1</a> <span class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>-->
				  	</ul>
					<!--<div id="tabs-1">
						<iframe name="thumb_page" src="thumb_page.php" frameborder="1"></iframe>
					</div>-->
			    	</div>
			</div>
			<div id="event_filter_dialog" title="Add Event Classes">
					<ol id="event_class_list">
					
					</ol>
			</div>
			<div id="sin_filter_dialog" title="Add SIN Concepts">
				<div id="sin_hypertree_panel"></div>
                                <a id="sin_name" style="visibility:hidden;height:0px;width:0px;"></a>
                        </div>
			<div id="objbnk_filter_dialog" title="Add Object Bank Concepts">
				<!--<div id="obj_hypertree_panel"></div>-->
				<a id="obj_name" style="visibility:hidden;height:0px;width:0px;"></a>
                        </div>

			<div id="asr_filter_dialog" title="Add ASR Keywords">
                                <fieldset>
                                       	<label>ASR Keywords:</label>
				    	<input type="text" id="asr_kw" value="" class="text ui-widget-content ui-corner-all"/>
                                </fieldset>
                        </div>
			
			<div id="ocr_filter_dialog" title="Add OCR Keywords">
                                <fieldset>
                                        <label>OCR Keywords:</label>
                                        <input type="text" id="ocr_kw" value="" class="text ui-widget-content ui-corner-all"/>
                                </fieldset>
                        </div>
		
			<div id="vname_filter_dialog" title="Add Video Name">
                                <fieldset>
                                        <label>Video Name:</label>
                                        <input type="text" id="vname_kw" value="" class="text ui-widget-content ui-corner-all"/>
                                </fieldset>
                        </div>	
		</div>
	</body>
</html>
