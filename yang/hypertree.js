var labelType, useGradients, nativeTextSupport, animate;





function sin_hypertree_init(){
    //init data
    //var json = {
    //    "id": "347_0",
    //    "name": "Nine Inch Nails",
    //    "children": [{
    //        "id": "1",
    //        "name": "Jerome Dillon",
    //        "children": [{
    //            "id": "52",
    //            "name": "Howlin' Maggie",
    //            "children": []
    //        }, {
    //            "id": "32324",
    //            "name": "nearLY",
    //            "children": []
    //        }]
    //    }, {
    //        "id": "173871_4",
    //        "name": "Charlie Clouser",
    //        "children": []
    //    }, {
    //        "id": "235952_5",
    //        "name": "James Woolley",
    //        "children": []
    //    }, {
    //        "id": "235951_6",
    //        "name": "Jeff Ward",
    //        "children": [{
    //            "id": "2382_7",
    //            "name": "Ministry",
    //            "children": []
    //        }, {
    //            "id": "2415_8",
    //            "name": "Revolting Cocks",
    //            "children": []
    //        }, {
    //            "id": "3963_9",
    //            "name": "Pigface",
    //            "children": []
    //        }, {
    //            "id": "78420",
    //            "name": "Lard",
    //            "children": []
    //        }]
    //    }]
    //};
    ////end
        //$.getJSON('sin_lscom_struct.json', function(response){
    //   json = response;
    //   alert(json.id);
    //})
    var json = {
"id":"0",
"name":"things",
"children":[
{
"id":"1",
"name":"urban scenes",
"children":[
{
"id":"2",
"name":"urban_scenes",
"children":[]
},
{
"id":"3",
"name":"cityscape",
"children":[]
},
{
"id":"4",
"name":"school",
"children":[]
},
{
"id":"5",
"name":"apartments",
"children":[]
},
{
"id":"6",
"name":"apartment_complex",
"children":[]
},
{
"id":"7",
"name":"factory",
"children":[]
},
{
"id":"8",
"name":"processing_plant",
"children":[]
},
{
"id":"9",
"name":"court",
"children":[]
},
{
"id":"10",
"name":"building",
"children":[]
},
{
"id":"11",
"name":"residential_buildings",
"children":[]
},
{
"id":"12",
"name":"construction_site",
"children":[]
},
{
"id":"13",
"name":"conference_buildings",
"children":[]
},
{
"id":"14",
"name":"office_building",
"children":[]
},
{
"id":"15",
"name":"religious_building",
"children":[]
},
{
"id":"16",
"name":"house_of_worship",
"children":[]
},
{
"id":"17",
"name":"church",
"children":[]
},
{
"id":"18",
"name":"synagogue",
"children":[]
},
{
"id":"19",
"name":"tower",
"children":[]
},
{
"id":"20",
"name":"religious_figures",
"children":[]
},
{
"id":"21",
"name":"shopping_mall",
"children":[]
},
{
"id":"22",
"name":"conference_room",
"children":[]
},
{
"id":"23",
"name":"harbor",
"children":[]
},
{
"id":"24",
"name":"desert",
"children":[]
},
{
"id":"25",
"name":"road_overpass",
"children":[]
},
{
"id":"26",
"name":"industrial_setting",
"children":[]
},
{
"id":"27",
"name":"urban_park",
"children":[]
},
{
"id":"28",
"name":"skyscraper",
"children":[]
},
{
"id":"29",
"name":"rocky_ground",
"children":[]
},
{
"id":"30",
"name":"laboratory",
"children":[]
},
{
"id":"31",
"name":"classroom",
"children":[]
},
{
"id":"32",
"name":"bridge",
"children":[]
},
{
"id":"33",
"name":"stadium",
"children":[]
},
{
"id":"34",
"name":"office",
"children":[]
},
{
"id":"35",
"name":"roadway_junction",
"children":[]
},
{
"id":"36",
"name":"highway",
"children":[]
},
{
"id":"37",
"name":"field",
"children":[]
},
{
"id":"38",
"name":"indoor_sports_venue",
"children":[]
},
{
"id":"39",
"name":"suburban",
"children":[]
},
{
"id":"40",
"name":"road_block",
"children":[]
},
{
"id":"41",
"name":"road",
"children":[]
},
{
"id":"42",
"name":"landscape",
"children":[]
},
{
"id":"43",
"name":"city",
"children":[]
}
]
},
{
"id":"44",
"name":"air transportation",
"children":[
{
"id":"45",
"name":"airplane",
"children":[]
},
{
"id":"46",
"name":"airplane_takeoff",
"children":[]
},
{
"id":"47",
"name":"airplane_flying",
"children":[]
},
{
"id":"48",
"name":"airplane_landing",
"children":[]
},
{
"id":"49",
"name":"military_airplane",
"children":[]
},
{
"id":"50",
"name":"military_aircraft",
"children":[]
},
{
"id":"51",
"name":"airport_or_airfield",
"children":[]
},
{
"id":"52",
"name":"rescue_helicopter",
"children":[]
},
{
"id":"53",
"name":"helicopter_hovering",
"children":[]
}
]
},
{
"id":"54",
"name":"news",
"children":[
{
"id":"55",
"name":"news",
"children":[]
},
{
"id":"56",
"name":"animation_cartoon",
"children":[]
},
{
"id":"57",
"name":"amateur_video",
"children":[]
},
{
"id":"58",
"name":"professional_video",
"children":[]
},
{
"id":"59",
"name":"synthetic_images",
"children":[]
},
{
"id":"60",
"name":"network_logo",
"children":[]
},
{
"id":"61",
"name":"still_image",
"children":[]
},
{
"id":"62",
"name":"graphic",
"children":[]
},
{
"id":"63",
"name":"commercial_advertisement",
"children":[]
},
{
"id":"64",
"name":"news_studio",
"children":[]
},
{
"id":"65",
"name":"background_static",
"children":[]
},
{
"id":"66",
"name":"pan_zoom_static",
"children":[]
},
{
"id":"67",
"name":"weather",
"children":[]
},
{
"id":"68",
"name":"speaking_to_camera",
"children":[]
},
{
"id":"69",
"name":"black_frame",
"children":[]
},
{
"id":"70",
"name":"junk_frame",
"children":[]
},
{
"id":"71",
"name":"blank_frame",
"children":[]
},
{
"id":"72",
"name":"computer",
"children":[]
},
{
"id":"73",
"name":"meeting",
"children":[]
},
{
"id":"74",
"name":"press_conference",
"children":[]
},
{
"id":"75",
"name":"event",
"children":[]
},
{
"id":"76",
"name":"map",
"children":[]
}
]
},
{
"id":"77",
"name":"sports",
"children":[
{
"id":"78",
"name":"sports",
"children":[]
},
{
"id":"79",
"name":"gym",
"children":[]
},
{
"id":"80",
"name":"tennis",
"children":[]
},
{
"id":"81",
"name":"baseball",
"children":[]
},
{
"id":"82",
"name":"basketball",
"children":[]
},
{
"id":"83",
"name":"golf",
"children":[]
},
{
"id":"84",
"name":"football",
"children":[]
},
{
"id":"85",
"name":"soccer",
"children":[]
},
{
"id":"86",
"name":"hockey",
"children":[]
}
]
},
{
"id":"87",
"name":"text",
"children":[
{
"id":"88",
"name":"scene_text",
"children":[]
},
{
"id":"89",
"name":"text",
"children":[]
},
{
"id":"90",
"name":"overlaid_text",
"children":[]
}
]
},
{
"id":"91",
"name":"ground transportation",
"children":[
{
"id":"92",
"name":"car",
"children":[]
},
{
"id":"93",
"name":"traffic",
"children":[]
},
{
"id":"94",
"name":"exiting_a_vehicle",
"children":[]
},
{
"id":"95",
"name":"rescue_vehicle",
"children":[]
},
{
"id":"96",
"name":"emergency_vehicles",
"children":[]
},
{
"id":"97",
"name":"military_vehicle",
"children":[]
},
{
"id":"98",
"name":"armored_vehicles",
"children":[]
},
{
"id":"99",
"name":"construction_vehicles",
"children":[]
},
{
"id":"100",
"name":"ground_vehicles",
"children":[]
},
{
"id":"101",
"name":"crane_vehicle",
"children":[]
},
{
"id":"102",
"name":"vehicle",
"children":[]
},
{
"id":"103",
"name":"truck",
"children":[]
},
{
"id":"104",
"name":"police_truck",
"children":[]
},
{
"id":"105",
"name":"pickup_truck",
"children":[]
},
{
"id":"106",
"name":"fire_truck",
"children":[]
},
{
"id":"107",
"name":"car_crash",
"children":[]
},
{
"id":"108",
"name":"exiting_car",
"children":[]
},
{
"id":"109",
"name":"police_car",
"children":[]
},
{
"id":"110",
"name":"car_racing",
"children":[]
},
{
"id":"111",
"name":"sports_car",
"children":[]
},
{
"id":"112",
"name":"bus",
"children":[]
},
{
"id":"113",
"name":"van",
"children":[]
},
{
"id":"114",
"name":"minivan",
"children":[]
},
{
"id":"115",
"name":"motorcycle",
"children":[]
}
]
},
{
"id":"116",
"name":"politics",
"children":[
{
"id":"117",
"name":"election_campaign",
"children":[]
},
{
"id":"118",
"name":"election_campaign_greeting",
"children":[]
},
{
"id":"119",
"name":"election_campaign_address",
"children":[]
}
]
},
{
"id":"120",
"name":"actions",
"children":[
{
"id":"121",
"name":"walking",
"children":[]
},
{
"id":"122",
"name":"throw_ball",
"children":[]
},
{
"id":"123",
"name":"swimming",
"children":[]
},
{
"id":"124",
"name":"running",
"children":[]
},
{
"id":"125",
"name":"cheering",
"children":[]
},
{
"id":"126",
"name":"ski",
"children":[]
},
{
"id":"127",
"name":"greeting",
"children":[]
},
{
"id":"128",
"name":"standing",
"children":[]
},
{
"id":"129",
"name":"walking_running",
"children":[]
},
{
"id":"130",
"name":"singing",
"children":[]
},
{
"id":"131",
"name":"sitting_down",
"children":[]
},
{
"id":"132",
"name":"clearing",
"children":[]
},
{
"id":"133",
"name":"advocate",
"children":[]
}
]
},
{
"id":"134",
"name":"food",
"children":[
{
"id":"135",
"name":"food",
"children":[]
}
]
},
{
"id":"136",
"name":"emotion",
"children":[
{
"id":"137",
"name":"surprise",
"children":[]
},
{
"id":"138",
"name":"anger",
"children":[]
},
{
"id":"139",
"name":"disgust",
"children":[]
},
{
"id":"140",
"name":"joy",
"children":[]
},
{
"id":"141",
"name":"boredom",
"children":[]
}
]
},
{
"id":"142",
"name":"indoor",
"children":[
{
"id":"143",
"name":"indoor",
"children":[]
},
{
"id":"144",
"name":"suit",
"children":[]
},
{
"id":"145",
"name":"bar_pub",
"children":[]
},
{
"id":"146",
"name":"dresses_of_women",
"children":[]
},
{
"id":"147",
"name":"cell_phones",
"children":[]
},
{
"id":"148",
"name":"dining_room",
"children":[]
},
{
"id":"149",
"name":"cattle",
"children":[]
},
{
"id":"150",
"name":"kitchen",
"children":[]
},
{
"id":"151",
"name":"room",
"children":[]
},
{
"id":"152",
"name":"quadruped",
"children":[]
},
{
"id":"153",
"name":"doorway",
"children":[]
},
{
"id":"154",
"name":"chair",
"children":[]
},
{
"id":"155",
"name":"table",
"children":[]
},
{
"id":"156",
"name":"furniture",
"children":[]
},
{
"id":"157",
"name":"sofa",
"children":[]
},
{
"id":"158",
"name":"door_opening",
"children":[]
},
{
"id":"159",
"name":"sunglasses",
"children":[]
},
{
"id":"160",
"name":"glasses",
"children":[]
},
{
"id":"161",
"name":"window",
"children":[]
},
{
"id":"162",
"name":"man_made_thing",
"children":[]
},
{
"id":"163",
"name":"flag",
"children":[]
}
]
},
{
"id":"164",
"name":"animals",
"children":[
{
"id":"165",
"name":"animal",
"children":[]
},
{
"id":"166",
"name":"animal_pens_and_cages",
"children":[]
},
{
"id":"167",
"name":"wild_animal",
"children":[]
},
{
"id":"168",
"name":"domesticated_animal",
"children":[]
},
{
"id":"169",
"name":"insect",
"children":[]
},
{
"id":"170",
"name":"horse",
"children":[]
},
{
"id":"171",
"name":"dogs",
"children":[]
},
{
"id":"172",
"name":"mammal",
"children":[]
},
{
"id":"173",
"name":"sea_mammal",
"children":[]
},
{
"id":"174",
"name":"dolphin",
"children":[]
},
{
"id":"175",
"name":"invertebrate",
"children":[]
},
{
"id":"176",
"name":"crustacean",
"children":[]
},
{
"id":"177",
"name":"whale",
"children":[]
},
{
"id":"178",
"name":"cetacean",
"children":[]
},
{
"id":"179",
"name":"herbivore",
"children":[]
},
{
"id":"180",
"name":"carnivore",
"children":[]
},
{
"id":"181",
"name":"vertebrate",
"children":[]
},
{
"id":"182",
"name":"ruminant",
"children":[]
},
{
"id":"183",
"name":"primate",
"children":[]
}
]
},
{
"id":"184",
"name":"technology",
"children":[
{
"id":"185",
"name":"science_technology",
"children":[]
}
]
},
{
"id":"186",
"name":"outdoor",
"children":[
{
"id":"187",
"name":"outdoor",
"children":[]
},
{
"id":"188",
"name":"daytime_outdoor",
"children":[]
},
{
"id":"189",
"name":"sun",
"children":[]
},
{
"id":"190",
"name":"sunny",
"children":[]
},
{
"id":"191",
"name":"sky",
"children":[]
},
{
"id":"192",
"name":"beach",
"children":[]
},
{
"id":"193",
"name":"cloud",
"children":[]
},
{
"id":"194",
"name":"plant",
"children":[]
},
{
"id":"195",
"name":"sky",
"children":[]
},
{
"id":"196",
"name":"tree",
"children":[]
},
{
"id":"197",
"name":"forest",
"children":[]
},
{
"id":"198",
"name":"snow",
"children":[]
},
{
"id":"199",
"name":"flower",
"children":[]
},
{
"id":"200",
"name":"river",
"children":[]
},
{
"id":"201",
"name":"hill",
"children":[]
},
{
"id":"202",
"name":"tent",
"children":[]
},
{
"id":"203",
"name":"lake",
"children":[]
},
{
"id":"204",
"name":"nighttime",
"children":[]
},
{
"id":"205",
"name":"mountain",
"children":[]
},
{
"id":"206",
"name":"underwater",
"children":[]
},
{
"id":"207",
"name":"moonlight",
"children":[]
},
{
"id":"208",
"name":"vegetation",
"children":[]
},
{
"id":"209",
"name":"eukaryotic_organism",
"children":[]
},
{
"id":"210",
"name":"swimming_pools",
"children":[]
},
{
"id":"211",
"name":"free_standing_structures",
"children":[]
}
]
},
{
"id":"212",
"name":"human",
"children":[
{
"id":"213",
"name":"person",
"children":[]
},
{
"id":"214",
"name":"crowd",
"children":[]
},
{
"id":"215",
"name":"people_marching",
"children":[]
},
{
"id":"216",
"name":"old_people",
"children":[]
},
{
"id":"217",
"name":"two_people",
"children":[]
},
{
"id":"218",
"name":"3_or_more_people",
"children":[]
},
{
"id":"219",
"name":"asian_people",
"children":[]
},
{
"id":"220",
"name":"adult",
"children":[]
},
{
"id":"221",
"name":"face",
"children":[]
},
{
"id":"222",
"name":"human_young_adult",
"children":[]
},
{
"id":"223",
"name":"hispanic_person",
"children":[]
},
{
"id":"224",
"name":"indian_person",
"children":[]
},
{
"id":"225",
"name":"female_person",
"children":[]
},
{
"id":"226",
"name":"male_person",
"children":[]
},
{
"id":"227",
"name":"single_person_female",
"children":[]
},
{
"id":"228",
"name":"single_person_male",
"children":[]
},
{
"id":"229",
"name":"adult_male_human",
"children":[]
},
{
"id":"230",
"name":"female_human_face",
"children":[]
},
{
"id":"231",
"name":"adult_female_human",
"children":[]
},
{
"id":"232",
"name":"civilian_person",
"children":[]
},
{
"id":"233",
"name":"male_human_face",
"children":[]
},
{
"id":"234",
"name":"child",
"children":[]
},
{
"id":"235",
"name":"girl",
"children":[]
},
{
"id":"236",
"name":"boy",
"children":[]
},
{
"id":"237",
"name":"infant",
"children":[]
},
{
"id":"238",
"name":"baby",
"children":[]
},
{
"id":"239",
"name":"demonstration_or_protest",
"children":[]
},
{
"id":"240",
"name":"studio_with_anchorperson",
"children":[]
},
{
"id":"241",
"name":"man_wearing_a_suit",
"children":[]
},
{
"id":"242",
"name":"politician",
"children":[]
},
{
"id":"243",
"name":"anchorperson",
"children":[]
},
{
"id":"244",
"name":"athlete",
"children":[]
},
{
"id":"245",
"name":"reporter",
"children":[]
},
{
"id":"246",
"name":"actor",
"children":[]
},
{
"id":"247",
"name":"speaker_at_podium",
"children":[]
},
{
"id":"248",
"name":"construction_worker",
"children":[]
},
{
"id":"249",
"name":"person_drops_an_object",
"children":[]
},
{
"id":"250",
"name":"prisoner",
"children":[]
},
{
"id":"251",
"name":"golf_player",
"children":[]
},
{
"id":"252",
"name":"police",
"children":[]
},
{
"id":"253",
"name":"armed_person",
"children":[]
},
{
"id":"254",
"name":"text_labeling_people",
"children":[]
},
{
"id":"255",
"name":"soccer_player",
"children":[]
},
{
"id":"256",
"name":"male_anchor",
"children":[]
},
{
"id":"257",
"name":"female_anchor",
"children":[]
},
{
"id":"258",
"name":"military_personnel",
"children":[]
},
{
"id":"259",
"name":"female_news_subject",
"children":[]
},
{
"id":"260",
"name":"male_news_subject",
"children":[]
},
{
"id":"261",
"name":"male_reporter",
"children":[]
},
{
"id":"262",
"name":"driver",
"children":[]
},
{
"id":"263",
"name":"female_reporter",
"children":[]
},
{
"id":"264",
"name":"john_kerry",
"children":[]
},
{
"id":"265",
"name":"colin_powell",
"children":[]
},
{
"id":"266",
"name":"george_bush",
"children":[]
}
]
},
{
"id":"267",
"name":"entertainment",
"children":[
{
"id":"268",
"name":"entertainment",
"children":[]
},
{
"id":"269",
"name":"explosion_fire",
"children":[]
},
{
"id":"270",
"name":"instrumental_musician",
"children":[]
},
{
"id":"271",
"name":"waterscape_waterfront",
"children":[]
},
{
"id":"272",
"name":"celebrity_entertainment",
"children":[]
}
]
},
{
"id":"273",
"name":"natural disaster",
"children":[
{
"id":"274",
"name":"flood",
"children":[]
}
]
},
{
"id":"275",
"name":"body parts",
"children":[
{
"id":"276",
"name":"body_parts",
"children":[]
},
{
"id":"277",
"name":"arthropod",
"children":[]
},
{
"id":"278",
"name":"attached_body_parts",
"children":[]
},
{
"id":"279",
"name":"hand",
"children":[]
},
{
"id":"280",
"name":"head_and_shoulder",
"children":[]
},
{
"id":"281",
"name":"leg",
"children":[]
}
]
},
{
"id":"282",
"name":"military",
"children":[
{
"id":"283",
"name":"military",
"children":[]
},
{
"id":"284",
"name":"military_base",
"children":[]
},
{
"id":"285",
"name":"bomber_bombing",
"children":[]
},
{
"id":"286",
"name":"gun_shot",
"children":[]
},
{
"id":"287",
"name":"ground_combat",
"children":[]
},
{
"id":"288",
"name":"machine_guns",
"children":[]
},
{
"id":"289",
"name":"gun",
"children":[]
},
{
"id":"290",
"name":"rifles",
"children":[]
},
{
"id":"291",
"name":"street_battle",
"children":[]
},
{
"id":"292",
"name":"guard",
"children":[]
},
{
"id":"293",
"name":"violent_action",
"children":[]
}
]
},
{
"id":"294",
"name":"water transportation",
"children":[
{
"id":"295",
"name":"raft",
"children":[]
},
{
"id":"296",
"name":"rowboat",
"children":[]
},
{
"id":"297",
"name":"cigar_boats",
"children":[]
},
{
"id":"298",
"name":"boat_ship",
"children":[]
},
{
"id":"299",
"name":"freighter",
"children":[]
},
{
"id":"300",
"name":"sailing_ship",
"children":[]
},
{
"id":"301",
"name":"canoe",
"children":[]
}
]
}
]
};

    var infovis = document.getElementById('sin_hypertree_panel');
    var w = 600, h = 600;
    
    //init Hypertree
    var ht = new $jit.Hypertree({
      //id of the visualization container
      injectInto: 'sin_hypertree_panel',
      //canvas width and height
      width: w,
      height: h,
      //Change node and edge styles such as
      //color, width and dimensions.
      Node: {
          dim: 10,
          color: "#f00"
      },
      Edge: {
          lineWidth: 2,
          color: "#088"
      },
      onBeforeCompute: function(node){
          
      },
      //Attach event handlers and add text to the
      //labels. This method is only triggered on label
      //creation
      onCreateLabel: function(domElement, node){
          domElement.innerHTML = node.name;
          $jit.util.addEvent(domElement, 'click', function () {
              ht.onClick(node.id, {
                  onComplete: function() {
                      ht.controller.onComplete();
                  }
              });
          });
      },
      //Change node styles when labels are placed
      //or moved.
      onPlaceLabel: function(domElement, node){
          var style = domElement.style;
          style.display = '';
          style.cursor = 'pointer';
          if (node._depth <= 1) {
              style.fontSize = "0.7em";
              style.color = "#000";

          } else if(node._depth == 2){
              style.fontSize = "0.5em";
              style.color = "#555";

          } else {
              style.display = 'none';
          }

          var left = parseInt(style.left);
          var w = domElement.offsetWidth;
          style.left = (left - w / 2 ) + 'px';
      },
      
      onComplete: function(){
          
          //Build the right column relations list.
          //This is done by collecting the information (stored in the data property) 
          //for all the nodes adjacent to the centered node.
          var node = ht.graph.getClosestNodeToOrigin("current");
	  var neighbor_ct = 0;
          node.eachAdjacency(function(adj){
		neighbor_ct+=1;
          });
	  if(neighbor_ct == 1)
	  {
		document.getElementById("sin_name").innerHTML=node.name;
	  }
	  else
	  {
		document.getElementById("sin_name").innerHTML="";
	  }
	  
          //$jit.id('inner-details').innerHTML = html;
      }
    });
    //load JSON data.
    ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();
}