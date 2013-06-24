<?php
require("util.php");
session_start();
// db_account
$_SESSION["db_user"] = "MED11";
// db_password
$_SESSION["db_password"] = "MED1132";
// video web base path
$_SESSION["web_video_basepath"] = "http://mmdb.inf.cs.cmu.edu:10590";
//field names of in shot_infos or thumb_infos USED FOR thumb or shots description
$_SESSION["img_fields"] = array("vname"=>"Video","timestamp"=>"Time","conf"=>"Score","desc"=>"Descption");
// dataset event info (what videos does each event contain) structure: [collection_name => [video_id1,video_id2...]...]
// dataset video info structure: [video_id=>["vid"=>video_id,"vname"=>video_name,"xref"=>video_xref,"cname"=>collection_name, "lname"=>library_name,"length"=>video_length,"h"=>video_height,"w"=>video_width,"fps"=>video_fps]...];
if(!isset($_SESSION["event_info_map"]) || ! isset($_SESSION["video_info_map"]))
{
	GetDatasetEventVideoStruct();
}
// SIN min score
$_SESSION["min_sin_conf"] = 0.6;
// SIN max retrieval count for each concept
$_SESSION["max_sin_count"] = 500;
// SIN concept and video shot mapping structure: [sin_concept => [["shot_id"=>shot_id, "conf"=> conf]...]...];
// SIN concept id and concep name mapping $_SESSION["sin_id_name_map"] = [sid=>sname,...]
// SIN concept name and total score map $_SESSION["sin_name_totsc_map"] = [sname=>tot_sc,...];
if(!isset($_SESSION["sin_info_map"]))
{
	GetDatasetSINStruct();
}
// solr text search service base url
$_SESSION["solr_url"] = "http://cq-09.inf.cs.cmu.edu:8983/solr/collection1/select/?indent=on&wt=json&fl=id,score";
// cache of seaching results (video ids) in each tab
//$_SESSION["tab_results"];
?>
