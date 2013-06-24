
$(document).ready(function(){
	$("#topmenu").hide();
        $("#login_btn").click(function(){
		if($("#username").val() == "CMU" && $("#password").val() == "ALADDIN")
		{
			$("#topmenu").show();
			$("#login_panel").hide();
		}
		else
		{
			$("#login_msg").html("invalid user or password");
		}
        });

	$("#filters_btn").click(function(){
		$(".filter_panel").toggle();
		$("#filter_bucket_panel").toggle();
	});

        $("#filters_btn").click();
	

    	$( "#filter_menu" ).menu();

	$( "#clear_filter_bucket_btn").click(function(){
		$("#filter_bucket tbody").empty();
	});
		
	$(document).on('click',".tab_names",function(){
		var id=$(this).attr("href").replace("#","");
		UpdateSearchHistoryPanel(tab_qry_hist_map[id]);
        });

	$(document).on('click',".remove_filter_btn",function(){
                $(this).parent().parent("tr").remove();
        });
	
	$(document).on('click',".block_filter_btn",function(){ 
        	if($(this).attr("checked")){
			$(this).parent().parent("tr").removeClass("ui-state-disabled");
			$(this).attr("checked",false);
		}else{ 
			$(this).parent().parent("tr").addClass("ui-state-disabled");
			$(this).attr("checked",true);
        	} 
    	});
	
	//$(document).tooltip();
	
	$( "#corp_curr_btn").click(function(){
                if(active_tab_ct == 0)
		{
			alert("No smaller corpus (results) is available, please initialize a search first.");
			$("#corp_all_btn").prop("checked",true);
		}
		else
		{
			search_corpus = 1;
		}
        });

	$( "#corp_all_btn").click(function(){
                search_corpus = 0;
        });


	var tabTemplate = "<li><a class='tab_names' id='#{id}' href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
      	    next_tab_id =1, 
	    active_tab_ct = 0;
	var search_corpus = 0; //0 means whole database, 1 means the corpus of current results.
	var active_tab_name = '';
	var tab_qry_hist_map = {};
	var tab_name_list = [];
	var tabs = $( "#tabs" ).tabs({
    		beforeActivate: function( event, ui ) {
			active_tab_name = ui.newPanel.prop("id");
   		}
	});

	function UpdateSearchHistoryPanel(qry_hist_list)
	{
		$("#history_table tbody").empty();
		for(var i = 0; i < qry_hist_list.length; i++)
                {
			var qry_items = qry_hist_list[i].split(";");
			for(var j = 0; j < qry_items.length; j++)
			{	
				var filter_items = qry_items[j].split(":");	
				var filter_name = filter_items[0];
				var filter_desc = filter_items[1];
				if(j == 0)
				{
					$( "#history_table tbody" ).append( "<tr>" +
                                              "<td rowspan='"+qry_items.length+"'>#"+(i+1)+"</td>" +
                                              "<td >" + filter_name + "</td>" +
					      "<td >" + filter_desc + "</td>" +
                                            "</tr>" );
				}
				else
				{
					$( "#history_table tbody" ).append( "<tr>" +
                                               "<td >" + filter_name + "</td>" +
                                               "<td >" + filter_desc + "</td>" +
                                            "</tr>" );
				}
			}
		}
	}
	// close icon: removing the tab on click
	tabs.delegate( "span.ui-icon-close", "click", function() {
		var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
		$( "#" + panelId ).remove();
		active_tab_ct -=1;
		var tab_idx = parseInt(panelId.replace("tabs-",""))-1;
		tab_name_list[tab_idx][1]=false;
		var active_tab_name = "";
		for(var i = tab_idx-1; i >= 0; i--)
		{
			if(tab_name_list[i][1] == true)
			{
				active_tab_name = tab_name_list[i][0];
				break;
			}
		}
		if(active_tab_name == "")
		{
			for(var i = tab_idx+1; i < tab_name_list.length; i++)
                	{
                        	if(tab_name_list[i][1] == true)
                        	{
                                	active_tab_name = tab_name_list[i][0];
	                                break;
        	                }
                	}
		}
		if(active_tab_name != "")
		{	
			UpdateSearchHistoryPanel(tab_qry_hist_map[active_tab_name]);
		}
		else
		{
			UpdateSearchHistoryPanel([]);
		}
		if(active_tab_ct == 0)
		{
			$("#corp_all_btn").prop("checked",true);
			search_corpus = 0;
		}
		tabs.tabs( "refresh" );
	});
	
	tabs.bind( "keyup", function( event ) {
		if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
		var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
		$( "#" + panelId ).remove();
		active_tab_ct -=1;
		if(active_tab_ct == 0)
                {
                        $("#corp_all_btn").prop("checked",true);
			search_corpus = 0;
                }
		tabs.tabs( "refresh" );
		}
	});

	function addTab() {
      		var label = "Q" + next_tab_id;
	        id = "tabs-" + next_tab_id;
		//[tab_name,is_active];
		tab_name_list.push([active_tab_name,true]);
        	li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{id\}/g, + id ).replace( /#\{label\}/g, label ) ),
			
	        tabContentHtml = '<iframe name="thumb_page_' + id + '" src="thumb_page.php" frameborder="1"></iframe>';

	      	tabs.find( ".ui-tabs-nav" ).append( li );
		tabs.append( "<div id='" + id + "'>" + tabContentHtml + "</div>" );
	      	tabs.tabs( "refresh" );
      		next_tab_id++;
		active_tab_ct++;
		$("#"+id).click();
    	}


	$( "#search_btn" ).click(function(){	
		var query_link = "thumb_page.php?";
		var filter_map = {};
		var filter_desc = "";
		var filter_idx = 0;
		$("#filter_bucket tbody tr").each(function(){
			if(!$(this).hasClass("ui-state-disabled"))	// the filter is not blocked
			{
				var filter_type = $(this).children(".filter_type").text();
				var filter_content = $(this).children(".filter_content").text();
				if(!(filter_type in filter_map))
				{
					filter_map[filter_type] = [];
				}
				filter_map[filter_type].push(filter_content);
				if(filter_idx == 0)
					filter_desc += filter_type+":"+filter_content;
				else
					filter_desc += ";"+ filter_type+":"+filter_content;
				filter_idx++;
				//alert(filter_map);
			}		
		});

		if(search_corpus == 0)
		{
			$("#search_btn").attr("target",'thumb_page_tabs-'+next_tab_id);
			active_tab_name = 'tabs-'+next_tab_id;
			tab_qry_hist_map[active_tab_name] = [];
			addTab();
			
		}
		else
		{
			$("#search_btn").attr("target",'thumb_page_'+active_tab_name);	
		}
		
		tab_qry_hist_map[active_tab_name].push(filter_desc);
		UpdateSearchHistoryPanel(tab_qry_hist_map[active_tab_name]);

		var is_first = true;
		for(filter_type in filter_map)
		{
			var filter_content_list = filter_map[filter_type];
			if(is_first)
			{
				query_link += filter_type + "=";
				is_first = false;
			}
			else
				query_link += "&" + filter_type + "=";
			for(var i = 0; i < filter_content_list.length; i++)
			{
				if(i == 0)
					query_link += filter_content_list[i];
				else
					query_link += "^"+ filter_content_list[i];
			}
		}
		query_link += "&corpus=" + search_corpus + "&acttab="+active_tab_name;
		
		$("#search_btn").attr("href",query_link);
		$("#filter_bucket tbody").empty();
	});

	
	$( "#event_class_list").selectable();

	$( "#event_filter_dialog" ).dialog({
      		autoOpen: false,
      		height: 480,
      		width: 600,
      		modal: true,
      		buttons: {
			"Add": function() {
			  var bValid = true;
			  if ( bValid ) {
		        	$( ".ui-selected", $("#event_class_list") ).each(function() {
					var event_name = $(this).text();//$( "#event_class_list li" ).index($(this));
					$( "#filter_bucket tbody" ).append( "<tr>" +
				              "<td class=\"filter_type\">Event</td>" +
				              "<td class=\"filter_content\">" + event_name + "</td>" +
					      "<td><input class=\"block_filter_btn\" type=\"checkbox\"/></td>" +
			        	      "<td><button class=\"remove_filter_btn\">X</button></td>" +
				            "</tr>" );
				});
			    $( this ).dialog( "close" );
			  }
			},
			Cancel: function() {
			  $( this ).dialog( "close" );
			}
	      	},
	      	close: function() {
			
	      	}
	});
	$( "#event_filter_btn" ).click(function() {
        	$( "#event_filter_dialog" ).dialog( "open" );
      	});

	$( "#sin_filter_dialog" ).dialog({
		autoOpen: false,
                height: 800,
                width: 800,
                modal: true,
                buttons: {
                        "Add": function() {
                          var bValid = true;
                          if ( bValid ) {
                            $( this ).dialog( "close" );
                            var sin_name = $("#sin_name").text();
                            if(sin_name != "")
                            {
                                $( "#filter_bucket tbody" ).append( "<tr>" +
                                              "<td class=\"filter_type\">SIN</td>" +
                                              "<td class=\"filter_content\">" + sin_name + "</td>" +
                                              "<td><input class=\"block_filter_btn\" type=\"checkbox\"/></td>" +
                                              "<td><button class=\"remove_filter_btn\">X</button></td>" +
                                            "</tr>" );
                            }
                            else
                            {
                                alert("Only leaf node filters can be added!");
                            }
                          }
                        },
                        Cancel: function() {
                          $( this ).dialog( "close" );
                        }
                },
                close: function() {

                }
        });
        $( "#sin_filter_btn" ).click(function() {
                $( "#sin_filter_dialog" ).dialog( "open" );
        });

	$( "#objbnk_filter_dialog" ).dialog({
                autoOpen: false,
                height: 450,
                width: 400,
                modal: true
                //buttons: {
                //        "Add": function() {
                //          var bValid = true;
                //          if ( bValid ) {
                //            $( this ).dialog( "close" );
		//	    var obj_name = $("#obj_name").text();
		//	    if(obj_name != "")
		//	    {
		//	    	$( "#filter_bucket tbody" ).append( "<tr>" +
                //                              "<td class=\"filter_type\">Object</td>" +
                //                              "<td class=\"filter_content\">" + obj_name + "</td>" +
                //                              "<td><input class=\"block_filter_btn\" type=\"checkbox\"/></td>" +
                //                              "<td><button class=\"remove_filter_btn\">X</button></td>" +
                //                            "</tr>" );
                //                $("#asr_kw").val("");
		//	    }
		//	    else
		//	    {
		//		alert("Only leaf node filters can be added!");
		//            }
                //          }
                //        },
                //        Cancel: function() {
                //          $( this ).dialog( "close" );
                //        }
                //},
                //close: function() {

                //}
        });
        $( "#objbnk_filter_btn" ).click(function() {
                $( "#objbnk_filter_dialog" ).dialog( "open" );
        });

        $( "#asr_filter_dialog" ).dialog({
                autoOpen: false,
                height: 200,
                width: 500,
                modal: true,
                buttons: {
                        "Add": function() {
                          var bValid = true;
                          if ( bValid ) {
				var asr_word = $("#asr_kw").val();
                             	$( "#filter_bucket tbody" ).append( "<tr>" +
                                              "<td class=\"filter_type\">ASR</td>" +
                                              "<td class=\"filter_content\">" + asr_word + "</td>" +
                                              "<td><input class=\"block_filter_btn\" type=\"checkbox\"/></td>" +
                                              "<td><button class=\"remove_filter_btn\">X</button></td>" +
                                            "</tr>" );
				$("#asr_kw").val("");
                            $( this ).dialog( "close" );
                          }
                        },
                        Cancel: function() {
                          $( this ).dialog( "close" );
                        }
                },
                close: function() {

                }
        });
        $( "#asr_filter_btn" ).click(function() {
                $( "#asr_filter_dialog" ).dialog( "open" );
        });

	$( "#ocr_filter_dialog" ).dialog({
                autoOpen: false,
                height: 200,
                width: 500,
                modal: true,
                buttons: {
                        "Add": function() {
                          var bValid = true;
                          if ( bValid ) {
                                var ocr_word = $("#ocr_kw").val();
                                $( "#filter_bucket tbody" ).append( "<tr>" +
                                              "<td class=\"filter_type\">OCR</td>" +
                                              "<td class=\"filter_content\">" + ocr_word + "</td>" +
                                              "<td><input class=\"block_filter_btn\" type=\"checkbox\"/></td>" +
                                              "<td><button class=\"remove_filter_btn\">X</button></td>" +
                                            "</tr>" );
                                $("#ocr_kw").val("");
                            $( this ).dialog( "close" );
                          }
                        },
                        Cancel: function() {
                          $( this ).dialog( "close" );
                        }
                },
                close: function() {

                }
        });
        $( "#ocr_filter_btn" ).click(function() {
                $( "#ocr_filter_dialog" ).dialog( "open" );
        });
	
	$( "#vname_filter_dialog" ).dialog({
                autoOpen: false,
                height: 200,
                width: 500,
                modal: true,
                buttons: {
                        "Add": function() {
                          var bValid = true;
                          if ( bValid ) {
                                var vname_word = $("#vname_kw").val();
                                $( "#filter_bucket tbody" ).append( "<tr>" +
                                              "<td class=\"filter_type\">VideoName</td>" +
                                              "<td class=\"filter_content\">" + vname_word + "</td>" +
                                              "<td><input class=\"block_filter_btn\" type=\"checkbox\"/></td>" +
                                              "<td><button class=\"remove_filter_btn\">X</button></td>" +
                                            "</tr>" );
                                $("#vname_kw").val("");
                            $( this ).dialog( "close" );
                          }
                        },
                        Cancel: function() {
                          $( this ).dialog( "close" );
                        }
                },
                close: function() {

                }
        });
        $( "#vname_filter_btn" ).click(function() {
                $( "#vname_filter_dialog" ).dialog( "open" );
        });

});
