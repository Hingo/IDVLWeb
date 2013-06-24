import os
import json
import csv

root = './TextureSmall/';

image_vid = {};

for path, subdirs, files in os.walk(root):
	#print path[-4:];
	for name in files:
		#print os.path.join(path, name);
		#print name;
		image_vid[name[:-4]] = path[-4:];

with open("./outputs/texture_small_dict_out.txt", "w") as write_to:
	write_to.write(json.dumps(image_vid));


#with open("texture_small_dict_out.txt") as read_from:
	#image_vid_read = json.load(read_from);

#print image_vid_read;