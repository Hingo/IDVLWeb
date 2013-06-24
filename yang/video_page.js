
function LoadShots(vid){
	$("#shot_frame").load("shot_page.php?vid="+vid);
};

function JumpToTime(time) {
$f("player").play().seek(time);
};

$(document).ready(function(){


$( "#video_meta_paenl" ).accordion({
                collapsible: true,
		heightStyle: "content"
        });


TagCanvas.interval = 20;
TagCanvas.textFont = 'Impact,Arial Black,sans-serif';
TagCanvas.textColour = '#00f';
TagCanvas.textHeight = 25;
TagCanvas.outlineColour = '#f96';
TagCanvas.outlineThickness = 5;
TagCanvas.maxSpeed = 0.04;
TagCanvas.minBrightness = 0.1;
TagCanvas.depth = 0.92;
TagCanvas.pulsateTo = 0.2;
TagCanvas.pulsateTime = 0.75;
TagCanvas.initial = [0.1,-0.1];
TagCanvas.decel = 0.98;
TagCanvas.hideTags = true;
TagCanvas.reverse = true;
TagCanvas.shadow = '#ccf';
TagCanvas.shadowBlur = 3;
TagCanvas.weight = true;
TagCanvas.weightFrom = 'data-weight';
try {
TagCanvas.Start('tagcanvas','weightTags',{weightMode:'colour'});
} catch(e) {
}
var i, g, gc = document.getElementById('gradient').getContext('2d');
g = gc.createLinearGradient(0, 0, 0, gc.canvas.height);
for(i in TagCanvas.weightGradient)
g.addColorStop(i, TagCanvas.weightGradient[i]);
gc.fillStyle = g;
gc.fillRect(0,0,gc.canvas.width,gc.canvas.height);

var g1 = {
                         0:   'red',
                         0.5: 'orange',
                         1:   'rgba(0,0,0,0.1)'
                        };




});
