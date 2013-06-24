<?php
require("global_var.php");
?>

<?php
function connectDB($user, $password){
	if ($c = oci_connect($user, $password, 'mmdb.inf.cs.cmu.edu/mmdb')) {
		//echo 'Successfully connected to Oracle.<br/>';
	} else {
		$err = oci_error();
		die('Oracle Connect Error ' . $err['message']);
	}
	return $c;
}


function FetchSINShotsByShotIds($shot_infos)
{
	$c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
	$acc =0;
	$thumb_infos = array();// [["path"=>img_path, "desc"=>desc]...];
	foreach($shot_infos as $shot_info)
	{
		$shot_id = $shot_info["shot_id"];
		$shot_conf = $shot_info["conf"];
		$query = "select S.image as IMAGE, S.frame as FRAME ,M.movie_name as MNAME, M.movie_id as MID from shotbreak S, movie M where S.shotbreak_id ='" .$shot_id."' AND S.movie_id = M.movie_id";	
	        $is = oci_parse($c,$query);
                oci_execute($is);
                if(($row = oci_fetch_array($is,OCI_ASSOC)))
		{
			if (is_object($row['IMAGE'])) { // protect against a NULL LOB
				$data = $row['IMAGE']->load();
				$row['IMAGE']->free();
				$name = "tmp/img" . $acc . ".jpg";
				$fp = fopen($name, "w");
				fwrite($fp, $data);
				fclose($fp);
				$video_name = $row["MNAME"];
				$video_frame = $row["FRAME"];
				$video_id = $row["MID"];
				$thumb_info["path"] = $name;
				$thumb_info["desc"] = "";
				$thumb_info["timestamp"] = MSec2Time($video_frame); 
				$thumb_info["vname"] = $video_name;
				$thumb_info["conf"] = $shot_conf;
				$thumb_info["vid"] = $video_id;
				$thumb_infos[$acc++] = $thumb_info;
			}	
		}
                else
                        continue;	
	}
	return $thumb_infos;

}



function FetchVideoThumbnails($video_ids)
{
	$c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
	$acc =0;
	$thumb_infos = array();// [["path"=>img_path, "desc"=>desc]...];
	foreach($video_ids as $video_id)
	{
		$video_name = $_SESSION["video_info_map"][$video_id]["vname"];
		$query = "select COUNT(*) as NUM from  shotbreak S where S.movie_id=".$video_id;
		$rnums = oci_parse($c,$query);
		
		oci_define_by_name($rnums, 'NUM', $num_rows);
	        oci_execute($rnums);
        	oci_fetch($rnums);

		
		$query = "select S.shotbreak_id as SBID from  shotbreak S where S.movie_id=".$video_id ." order by S.frame";
		$sbs = oci_parse($c,$query);
		oci_execute($sbs);
		$row_id = 0;
		$row_sel_id = floor($num_rows/2/2);
		$is_sel = false;
		while (($row = oci_fetch_array($sbs, OCI_ASSOC))) {
			if($row_id < $row_sel_id)
			{
				$row_id+=1;
				continue;
			}
			else
			{
                        	$sbid = $row["SBID"];
				$is_sel = true;
				break;
			
			}
		}
		if($is_sel == false)
			continue;
		$query = "select S.image as IMAGE from shotbreak S where S.shotbreak_id ='" .$sbid."'";	
	        $is = oci_parse($c,$query);
                oci_execute($is);
                if(($row = oci_fetch_array($is,OCI_ASSOC)))
		{
			if (is_object($row['IMAGE'])) { // protect against a NULL LOB
				$data = $row['IMAGE']->load();
				$row['IMAGE']->free();
				$name = "tmp/img" . $acc . ".jpg";
				$fp = fopen($name, "w");
				fwrite($fp, $data);
				fclose($fp);
				$thumb_info["path"] = $name;
				$thumb_info["desc"] = "";
				$thumb_info["vname"] = $video_name;
				$thumb_info["vid"] = $video_id;
				$thumb_infos[$acc++] = $thumb_info;
			}	
		}
                else
                        continue;	
	}
	return $thumb_infos;

}
function FetchVideoShotsWithConcept($video_id,$sname)
{
	$video_name = $_SESSION["video_info_map"][$video_id]["vname"];
        $c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
	$shot_list = $_SESSION["sin_info_map"][$sname][$video_id];
	$acc = 0;
	foreach($shot_list as $shot)
	{
		$s_id = $shot["shot_id"];
		$sc = $shot["sc"];
		$query = "select S.image as IMAGE, S.frame as FRAME from shotbreak S where S.shotbreak_id=".$s_id;
		$s = oci_parse ($c, $query);
		oci_execute($s);
		$shot_infos = array();
		while (($row = oci_fetch_array($s, OCI_ASSOC))) {
			if (is_object($row['IMAGE'])) { // protect against a NULL LOB
				$data = $row['IMAGE']->load();
				$row['IMAGE']->free();
				$name = "tmp/img" . $acc++ . ".jpg";
				$fp = fopen($name, "w");
				fwrite($fp, $data);
				fclose($fp);
				$shot_info["timestamp"] = MSec2Time($row["FRAME"]); // in miliseconds!
				$shot_info["path"] = $name;
				$shot_info["desc"] = "";
				$shot_info["vname"] = "";//$video_name;
				$shot_infos_temp[$sc] = $shot_info;
			}
		}
		oci_free_statement($s);
	}
	oci_commit($c);
        krsort($shot_infos_temp);
        $acc = 0;
        foreach($shot_infos_temp as $sts => $shot_info)
        {
                $shot_infos[$acc++] = $shot_info;
        }
        return $shot_infos;
}

function FetchVideoShots($video_id)
{
	$video_name = $_SESSION["video_info_map"][$video_id]["vname"];
	$c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
	$query = "select S.image as IMAGE, S.frame as FRAME from shotbreak S where S.movie_id=".$video_id;
	$s = oci_parse ($c, $query);
	oci_execute($s);
	$acc = 0;
	$shot_infos = array();
	while (($row = oci_fetch_array($s, OCI_ASSOC))) {
		if (is_object($row['IMAGE'])) { // protect against a NULL LOB
			$data = $row['IMAGE']->load();
			$row['IMAGE']->free();
			$name = "tmp/img" . $acc++ . ".jpg";
			$fp = fopen($name, "w");
			fwrite($fp, $data);
			fclose($fp);
			$shot_info["timestamp"] = MSec2Time($row["FRAME"]); // in miliseconds!
			$shot_info["path"] = $name;
			$shot_info["desc"] = "";
			$shot_info["vname"] = "";//$video_name;
			$shot_infos_temp[$row["FRAME"]] = $shot_info;
		}
	}
	oci_free_statement($s);
	oci_commit($c);
	ksort($shot_infos_temp);
	$acc = 0;
	foreach($shot_infos_temp as $sts => $shot_info)
	{
		$shot_infos[$acc++] = $shot_info;
	}
	return $shot_infos;
}

function FecthSingleVideoSINWeightMap($video_id)
{
	$sin_weight_map = array();
	$video_name = $_SESSION["video_info_map"][$video_id]["vname"];
        $c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
        $query = "select S.shotbreak_id as SID from shotbreak S where S.movie_id=".$video_id;
        $ss = oci_parse ($c, $query);
        oci_execute($ss);
	while (($row = oci_fetch_array($ss, OCI_ASSOC))) {
		$sid = $row["SID"];	
		$query = "select F.feature_id as FID, F.confidence as CONF from SHOT_FEATURE2 F where F.shot_id=".$sid ." AND F.confidence >".$_SESSION["min_sin_conf"];
		$cs = oci_parse ($c, $query);
		oci_execute($cs);
		while (($row = oci_fetch_array($cs, OCI_ASSOC))) {
			$fid = $row["FID"];
			// don't include noiseam.
			if($fid < 48)
				continue;
			$sname = $_SESSION["sin_id_name_map"][$fid];
			if(!isset($_SESSION["sin_info_map"][$sname][$video_id]))
				continue;
			$sin_sc = $row["CONF"];
			if(!isset($sin_weight_map[$sname]))
				$sin_weight_map[$sname] = 0;
			$sin_weight_map[$sname] += $sin_sc;
		}
		oci_free_statement($cs);
		oci_commit($c);
        }
        oci_free_statement($ss);
        oci_commit($c);
	return $sin_weight_map;
}

function GetDatasetEventVideoStruct()
{
	/*The function retrieve the tree structure of all videos in dataset based on the event class of each video.
	  It generate two tables with following structures:
	  event_info_map:
	  [library_name => [collection_name => [video_name1,video_name2...]...]..]
	  video_info_map:
	  [video_name=>["vname"=>video_name,"xref"=>video_xref,"cname"=>collection_name, "lname"=>library_name,"length"=>video_length]...]
	*/
	$c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
        $query = "select L.library_id as LID, L.library_name LNAME from library L";
        $ls = oci_parse ($c, $query);
        oci_execute($ls);
	$lib_idnames = array();
	$video_info_map = array();
	$acc =0;
	while(($row = oci_fetch_array($ls,OCI_ASSOC)))
	{
		$lid = $row["LID"];
		$lname = $row["LNAME"];
		//echo $lid. ":". $lname . "</br>";
		$lib_idnames[$lid]=$lname;
		//$event_info_map[$lname] = array();
	}
	oci_free_statement($ls);
	foreach($lib_idnames as $lid=>$lname)
	{
		$query = "select C.collection_id as CID, C.collection_name CNAME from collection C where C.library_id =".$lid;
	        $cs = oci_parse ($c, $query);
        	oci_execute($cs);
		while(($row = oci_fetch_array($cs,OCI_ASSOC)))
	        {
			$cid = $row["CID"];
			$cname = $row["CNAME"];
				
			//echo $cid. ":". $cname . "</br>";
			$query = "select M.movie_name as MNAME, M.movie_id as MID, M.xref as MXREF, M.media_length as LEN, M.image_width as WIDTH, M.image_height as HEIGHT, M.image_fps as FPS from movie M where M.collection_id =".$cid;
	                $ms = oci_parse ($c, $query);
         	       	oci_execute($ms);
			//$event_info_map[$cname] = array();
			$terms = explode('_',$cname);
			$cname_new = "";
			$start_term_idx = 0;
			$is_keep = true;
			if(count($terms) < 4)
				$is_keep = false;
			elseif($terms[0] == 'dev' | $terms[0] == 'evl')
				$start_term_idx = 3;
			elseif($terms[0] == 'near' | $terms[0] == 'not')
				$start_term_idx = 4;
			if($is_keep)
			{
				for($i = $start_term_idx; $i < count($terms);$i++)
				{
					$cname_new = $cname_new . $terms[$i];
					if($i != count($terms)-1 )
						$cname_new = $cname_new . '_';
				}
				if(!isset($event_info_map[$cname_new]))
					$event_info_map[$cname_new] = array();
			}
			while(($row = oci_fetch_array($ms,OCI_ASSOC)))
                	{
				$mname = $row["MNAME"];
				$mxref = $row["MXREF"];
				$mlen = $row["LEN"];
				$mid = $row["MID"];
				$mw = $row["WIDTH"];
				$mh = $row["HEIGHT"];
				$mfps = $row["FPS"];
				$video_info["lname"] = $lname;
				$video_info["cname"] = $cname_new;
				$video_info["xref"] = $mxref;
				$video_info["length"] = $mlen;
				$video_info["vname"] = $mname;
				$video_info["vid"] = $mid;
				$video_info["w"] = $mw;
				$video_info["h"] = $mh;
				$video_info["fps"] = $mfps;
				//echo $mname. ":". $mxref . "</br>";
				//$event_info_map[$cname][$collect_ct++] = $mid;
				if($is_keep)
				{
					array_push($event_info_map[$cname_new],$mid);
				}
				$video_info_map[$mid] = $video_info;
			}
			//$event_info_map[$cname]=$collect_info;
			//array_push($event_info_map[$cname_new],$event_info_list);
			oci_free_statement($ms);
        	}
		oci_free_statement($cs);

	}
	oci_commit($c);
	$_SESSION["event_info_map"] = $event_info_map;
	$_SESSION["video_info_map"] = $video_info_map;
}

function GetDatasetSINStruct()
{
	//This function retrieve a SIN concept and video shot mapping structure: [sin_concept => [video_id=>[["shot_id"=>shot_id, "sc"=> conf],...]...]...];
	$c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
        $query = "select F.f_id as FID, F.short_name as SNAME from feature_info F";
        $fs = oci_parse ($c, $query);
        oci_execute($fs);
        $sin_info_map = array();
	$sin_id_name_map = array();
	$sin_name_totsc_map = array();
	
	$sin_tot_sc = 0;


	while(($row = oci_fetch_array($fs,OCI_ASSOC)))
        {
                $fid = $row["FID"];
		//don't include noisem
		if($fid<48)
			continue;
                $sname = $row["SNAME"];
		$sin_id_name_map[$fid] = $sname;
          	$shot_info_list = array();
		$acc =0;	
		$query = "select S.shot_id as SID, S.confidence as CONF from shot_feature2 S where S.feature_id =".$fid." AND S.confidence >".$_SESSION["min_sin_conf"]." order by S.confidence desc"; // ONLY retrieve shots with confidence greater than minimum sin confidence!!	
	        $ss = oci_parse ($c, $query);
        	oci_execute($ss);
		while(($row = oci_fetch_array($ss,OCI_ASSOC)) && $acc< $_SESSION["max_sin_count"])
        	{
			$sid = $row["SID"];
			$conf = $row["CONF"];
			
			$query = "select B.movie_id as MID from shotbreak B where B.shotbreak_id =".$sid;
                	$bs = oci_parse ($c, $query);
                	oci_execute($bs);
			$row = oci_fetch_array($bs,OCI_ASSOC);
			$mid = $row["MID"];
			if(!isset($shot_info_list[$mid]))
				$shot_info_list[$mid] = array();
			array_push($shot_info_list[$mid],array("shot_id"=>$sid,"sc"=>$conf));
			if(!isset($sin_name_totsc_map[$sname]))
				$sin_name_totsc_map[$sname] = 0;
			$sin_name_totsc_map[$sname] += $conf;
			$sin_tot_sc += $conf;
			$acc++;
			oci_free_statement($bs);
		}
		$sin_info_map[$sname] = $shot_info_list;
		oci_free_statement($ss);
        }
	oci_free_statement($fs);
	oci_commit($c);
	foreach($sin_name_totsc_map as $sin_name=>$sc)
		$sin_name_totsc_map[$sin_name] = ($sc / $sin_tot_sc);
	$_SESSION["sin_info_map"] = $sin_info_map;
	$_SESSION["sin_id_name_map"] = $sin_id_name_map;
	$_SESSION["sin_name_totsc_map"] = $sin_name_totsc_map;
}

function FetchVideoTranscript($video_id)
{
	$c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
	$query = "select S.TRANSCRIPT_TEXT as TRAN from segment S where S.movie_id=".$video_id;
        $ss = oci_parse ($c, $query);
        oci_execute($ss);
	$asr_trans = "asr is not available";
        while(($row = oci_fetch_array($ss,OCI_ASSOC)))
        {
                if (isset($row['TRAN']) && is_object($row['TRAN']))
                {
                        $trans_txt = $row["TRAN"]->load();
                        $row['TRAN']->free();
                        $asr_trans = FilterTranscriptGarbage($trans_txt);
                }
        }
        oci_free_statement($ss);
	oci_commit($c);
	return $asr_trans;
}

//function GetASRIndex()
//{
//	$c= connectDB($_SESSION["db_user"],$_SESSION["db_password"]);
//        $query = "select S.movie_id as MID, S.TRANSCRIPT_TEXT as TRAN from segment S";
//        $ss = oci_parse ($c, $query);
//        oci_execute($ss);
//        $asr_index = array();
//	while(($row = oci_fetch_array($ss,OCI_ASSOC)))
//        {
//		if (is_object($row['TRAN'])) 
//		{
//	                $vid = $row["MID"];
//        	        $trans_txt = $row["TRAN"]->load();
//                	$row['TRAN']->free();
//			$filter_string = FilterTranscriptGarbage($trans_txt);
//			$term_freq_map = String2Terms($filter_string);
//			foreach($term_freq_map as $term=>$freq)
//			{
//				if(!isset($asr_index[$term]))
//				{
//					$asr_index[$term] = array();
//				}
//				$asr_index[$term][$vid]=$freq;
//			}
//		}
//	}
//	oci_free_statement($ss);	
//	oci_commit($c);
//	$_SESSION["asr_index"]=$asr_index;
//}
?>
