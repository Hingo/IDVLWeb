<?php
require('vis_elems.php');
?>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="styles.css">
	</head>
	<body>
		<div id="thumb_container">
			<?php
				// [vid_id=>[hit_query_name=>hit_query_info,...],...];
				// e.g. [312=>["asr"=>["birthday"=>{"sc"=>0.32,"em"=>evids},...],"event"=>["landing a fish"=>1]]];
				// That means the video with id=312 is selected because of containing the asr keywords: birthday and animal and belonging to the event class: landing a fish.
				$hit_video_infos = Array();
				$vid_matqryct_map = Array();
				// if corpus = 0: search in whole database and then generate a new entry in the result table (tabs-id => results).
				// if corpus = 1: search in the collection entry given by the active tab (acttab) and update that entry.
				$search_corpus = intval($_GET["corpus"]);
				$active_tab = $_GET["acttab"];
				$corpus_video_ids = array();
				if($search_corpus == 1)
				{
					$corpus_video_ids = $_SESSION["tab_results"][$active_tab];
				}
				if(isset($_GET["Event"]))
				{
					$event_query = $_GET["Event"];
					$cnames = explode('^',$event_query);
					foreach($cnames as $cname)
					{
						$event_info_map = $_SESSION["event_info_map"];
						$curr_video_ids = $event_info_map[$cname];
						foreach($curr_video_ids as $video_id)
						{
							if($search_corpus == 1 && !isset($corpus_video_ids[$video_id]))
								continue;
							
							if(!isset($hit_video_infos[$video_id]))
								$hit_video_infos[$video_id] = Array();
							if(!isset($hit_video_infos[$video_id]["event"]))
                                                                $hit_video_infos[$video_id]["event"] = Array();
							$hit_video_infos[$video_id]["event"][$cname] = array("sc"=>1);
							if(!isset($vid_matqryct_map[$video_id]))
								$vid_matqryct_map[$video_id] = 0;
							$vid_matqryct_map[$video_id] += 1;
							//$all_video_ids[$acc++] = $video_id;
						}
					}
				}
				if(isset($_GET["SIN"]))
                                {
                                        $sin_query = $_GET["SIN"];
                                        $snames = explode('^',$sin_query);
                                        foreach($snames as $sname)
                                        {
                                                $sin_info_map = $_SESSION["sin_info_map"];
                                                $curr_video_shot_infos = $sin_info_map[$sname];
                                                foreach($curr_video_shot_infos as $video_id=>$shot_infos)
                                                {
                                                        if($search_corpus == 1 && !isset($corpus_video_ids[$video_id]))
                                                                continue;

                                                        if(!isset($hit_video_infos[$video_id]))
                                                                $hit_video_infos[$video_id] = Array();
                                                        if(!isset($hit_video_infos[$video_id]["sin"]))
                                                                $hit_video_infos[$video_id]["sin"] = Array();
                                                        $hit_video_infos[$video_id]["sin"][$sname] = $shot_infos;
                                                        if(!isset($vid_matqryct_map[$video_id]))
                                                                $vid_matqryct_map[$video_id] = 0;
                                                        $vid_matqryct_map[$video_id] += 1;
                                                        //$all_video_ids[$acc++] = $video_id;
                                                }
                                        }
                                }
				if(isset($_GET["ASR"]))
                                {
                                        $event_query = $_GET["ASR"];
                                        $kws = explode('^',$event_query);
                                        foreach($kws as $kw)
                                        {
						$kw = str_replace(array(" "),"%20",$kw); // replace space to %20!
						$contents=@file_get_contents($_SESSION["solr_url"]."&q=asr:".$kw."&hl=true&hl.fl=asr");
						$json_doc = json_decode($contents,true);
						$video_docs = $json_doc["response"]["docs"];
						foreach($video_docs as $video_doc)
						{
						        $video_id = $video_doc["id"];
							if($search_corpus == 1 && !isset($corpus_video_ids[$video_id]))
                                                                continue;
							$video_score = $video_doc["score"];
							// note video_evids is a array!!!
							if(!isset($json_doc["highlighting"][$video_id]["asr"]))
								continue;
							$video_evids = $json_doc["highlighting"][$video_id]["asr"];
						
                                                        if(!isset($hit_video_infos[$video_id]))
                                                                $hit_video_infos[$video_id] = Array();
                                                        if(!isset($hit_video_infos[$video_id]["asr"]))
                                                                $hit_video_infos[$video_id]["asr"] = Array();
                                                        $hit_video_infos[$video_id]["asr"][$kw] = array("sc"=>$video_score, "em"=>$video_evids);
							if(!isset($vid_matqryct_map[$video_id]))
                                                                $vid_matqryct_map[$video_id] = 0;
                                                        $vid_matqryct_map[$video_id] += 1;
                                                }
                                        }
                                }
				if(isset($_GET["OCR"]))
                                {
                                        $event_query = $_GET["OCR"];
                                        $kws = explode('^',$event_query);
                                        foreach($kws as $kw)
                                        {
						$kw = str_replace(array(" "),"%20",$kw); // replace space to %20!
                                                $contents=@file_get_contents($_SESSION["solr_url"]."&q=ocr:".$kw."&hl=true&hl.fl=ocr");
                                                $json_doc = json_decode($contents, true);
                                                $video_docs = $json_doc["response"]["docs"];
                                                foreach($video_docs as $video_doc)
                                                {
                                                        $video_id = $video_doc["id"];
							if($search_corpus == 1 && !isset($corpus_video_ids[$video_id]))
                                                                continue;
							if(!isset($json_doc["highlighting"][$video_id]["ocr"]))
								continue;
                                                        $video_score = $video_doc["score"];
                                                        // note video_evids is a array!!!
                                                        $video_evids = $json_doc["highlighting"][$video_id]["ocr"];
							if(!isset($json_doc["highlighting"][$video_id]["ocr"]))
                                                                continue;
                                                        if(!isset($hit_video_infos[$video_id]))
                                                                $hit_video_infos[$video_id] = Array();
                                                        if(!isset($hit_video_infos[$video_id]["ocr"]))
                                                                $hit_video_infos[$video_id]["ocr"] = Array();
                                                        $hit_video_infos[$video_id]["ocr"][$kw] = array("sc"=>$video_score, "em"=>$video_evids);
							if(!isset($vid_matqryct_map[$video_id]))
                                                                $vid_matqryct_map[$video_id] = 0;
                                                        $vid_matqryct_map[$video_id] += 1;
                                                }
                                        }
                                }
				if(isset($_GET["VideoName"]))
                                {
                                        $event_query = $_GET["VideoName"];
                                        $kws = explode('^',$event_query);
                                        foreach($kws as $kw)
                                        {
                                                $kw = str_replace(array(" "),"%20",$kw); // replace space to %20!
                                                $contents=@file_get_contents($_SESSION["solr_url"]."&q=name:".$kw);
                                                $json_doc = json_decode($contents, true);
                                                $video_docs = $json_doc["response"]["docs"];
                                                foreach($video_docs as $video_doc)
                                                {
                                                        $video_id = $video_doc["id"];
							if($search_corpus == 1 && !isset($corpus_video_ids[$video_id]))
                                                                continue;
                                                        // note video_evids is a array!!!
                                                        if(!isset($hit_video_infos[$video_id]))
                                                                $hit_video_infos[$video_id] = Array();
                                                        if(!isset($hit_video_infos[$video_id]["vname"]))
                                                                $hit_video_infos[$video_id]["vname"] = Array();
                                                        $hit_video_infos[$video_id]["vname"][$kw] = array("sc"=>1);
							if(!isset($vid_matqryct_map[$video_id]))
                                                                $vid_matqryct_map[$video_id] = 0;
                                                        $vid_matqryct_map[$video_id] += 1;
                                                }
                                        }
                                }
				if(isset($_GET["search_type"]) && $_GET["search_type"]== "SIN")
				{
					if(isset($_GET["sin_type"]) && isset($_GET["sin_name"]))
                                        {
                                                $sin_info_map = $_SESSION["sin_info_map"];
                                                $sin_type = $_GET["sin_type"];
                                                $sin_name = $_GET["sin_name"];
                                                $shot_infos = $sin_info_map[$sin_type][$sin_name];
                                                PresentSINShotsByShotIds($shot_infos);
                                        }
				}

				arsort($vid_matqryct_map);
				$sort_hit_vid_infos = Array();
				$_SESSION["tab_results"][$active_tab] = array();
				foreach($vid_matqryct_map as $vid_id=>$hit_ct)
				{
					$sort_hit_vid_infos[$vid_id] = $hit_video_infos[$vid_id];
					$_SESSION["tab_results"][$active_tab][$vid_id] = 1;
				}
				PresentMultiVideoThumbs($sort_hit_vid_infos);
			?>	
		</div>
	</body>
</html>
