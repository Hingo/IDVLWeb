$(document).ready(function(){

var tot_elem_ct = $(".triage_item").length;
var curr_idx = 0;
var prev_idx = 0;

UpdateSelectElem();

function MoveToView(element)
{
    	var offset = element.offset().top - $(window).scrollTop();
    	if(offset + element.height() > window.innerHeight | offset < 0)
	{
		$(window).scrollTop(element.offset().top);
    	}
}

function UpdateSelectElem()
{
	var curr_elem_id = '#triage_item-'+curr_idx;
	var prev_elem_id = '#triage_item-'+prev_idx;
	$(prev_elem_id).css({"border-color":"#000000"});
	$(curr_elem_id).css({"border-color":"#00ff00"});
	MoveToView($(curr_elem_id));
}

function UpdateLabel(btn)
{
	var curr_triage_item = $('#triage_item-'+curr_idx);
	var label_elem;
	if(1 == btn)
		label_elem = curr_triage_item.find('#yes_btn');
	else if(2 == btn)
		label_elem = curr_triage_item.find('#no_btn');
	else
		label_elem = curr_triage_item.find('#maybe_btn');
	label_elem.prop("checked",true);	
}

$(".triage_item_shot").mouseenter(function() {
	var shot_src = $(this).attr("src");
	var par = $(this).closest(".item_shots");
	var shot_name = par.attr("id");
	var items = shot_name.split('-');
	var item_id = items[1];
	$("#thumb-"+item_id).attr("src",shot_src);
});


$(".triage_item").mouseenter(function(){
	var curr_item_name = $(this).attr("id");
	var items = curr_item_name.split('-');
        var item_id = parseInt(items[1],10);
	prev_idx = curr_idx;
	curr_idx = item_id;
	UpdateSelectElem();
});

$("body").keyup(function(e){ 
	var code = e.which; // recommended to use e.which, it's normalized across browsers
    	if(81 == code)	// q, move to previous triage item
	{	
        	if(curr_idx > 0)
		{
			prev_idx = curr_idx;
			curr_idx -= 1;
			UpdateSelectElem();
		}
    	}
	else if(87 == code) // w, move to next triage item
	{
		if(curr_idx < tot_elem_ct -1)
		{
			prev_idx = curr_idx;
			curr_idx +=1;
			UpdateSelectElem();
		}
	}
	else if(49 == code | 50 == code | 51 == code)// 1,2 select yes or no or maybe
	{
		UpdateLabel(code-48);
	}
});

});
