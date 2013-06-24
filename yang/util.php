<?php

function aasort (&$array, $key) {
    $sorter=array();
    $ret=array();
    reset($array);
    foreach ($array as $ii => $va) {
        $sorter[$ii]=$va[$key];
    }
    arsort($sorter);
    foreach ($sorter as $ii => $va) {
        $ret[$ii]=$array[$ii];
    }
    $array=$ret;
}

function toHeatColor($val) {
    	if($val>=0.5)
		return sprintf("#%02x0000",  $val * 255 );
	else
		return sprintf("#0000%02x",  (1-$val) * 255 );
   
}

function MSec2Time($msec)
{
	$h = floor($msec / 3600000);
	$msec -= $h * 3600000;
	$m = floor($msec / 60000);
	$msec -= $m * 60000;
	$s = floor($msec / 1000);
	$msec -= $s * 1000;
	$time = sprintf("%dh:%dm:%ds:%dms",$h,$m,$s,$msec);
	return $time;
}


function Time2Sec($time)
{
	$filter_terms = array("h","m","s");
        $time = str_replace($filter_terms, "", $time);
	$items = explode(":", $time);
	$sec = intval($items[0]) * 3600 + intval($items[1]) * 60 + intval($items[2])+ 1.0*intval($items[3])/1000;
        return $sec;
}

function FilterTranscriptGarbage($string)
{
        $filter_terms = array("<", ">","+");
        $filter_string = str_replace($filter_terms, "", $string);
        return $filter_string;
}

function GetQueryMatchingTooltip($query_matching_info)
{
	$str ="";
	foreach($query_matching_info as $query_type=>$matching_info)
	{
		
		//$str = $str."Query Type:".$query_type."\n";
		
		foreach($matching_info as $query_inst=>$inst_info)
		{
			if($query_type != "sin")
			{
				$str = $str. strtoupper($query_type).":".str_replace("%20"," ",$query_inst)."\n"."\tScore:".round($inst_info["sc"],3)."\n";
				if($query_type =="ocr" || $query_type == "asr")
				{
					$hl_ct = count($inst_info["em"]);
					if($hl_ct != 0)
					{
						$str = $str."\tHighlight:\n";
						for($i=0; $i < $hl_ct;  $i++)
							$str = $str."\t#".$hl_ct.":".$inst_info["em"][$i]."\n";
					}
				}
			}
			else
			{
				$max_shot_sc = 0;
				foreach($inst_info as $info)
				{
					if($info["sc"]>$max_shot_sc)
						$max_shot_sc = $info["sc"];
				}
				$str = $str. strtoupper($query_type).":".str_replace("%20"," ",$query_inst)."\n"."\tScore:".round($max_shot_sc,3)."\n";
			}
		}
	}
	return $str;
}

?>
