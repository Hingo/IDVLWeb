import sys, json, ast

comm_line_args = str(sys.argv);

#with open("./../outputs/texture_small_dict_out.txt") as read_from:
	#image_vid_read = json.load(read_from);

comm_line_args = ast.literal_eval(comm_line_args);
count_of_similar_ims = comm_line_args[1];

query_file = comm_line_args[2];

#print query_file;
#print image_vid_read;

#query_folder = image_vid_read['000' + query_file];
query_folder = comm_line_args[3];

path = '/media/NewVolume/VineetPC/Studies/Intern/CMU/informedia/20110924_SiftSearch_Emgu_dotnet35/Color/' + query_folder + '/000' + query_file + '.txt';

#path = './../ColorSmall/' + query_folder + '/000' + query_file + '.txt'

with open(path) as myfile:
	head = [myfile.next() for x in xrange(int(count_of_similar_ims) + 1)];

#print head;

similar_files = [0]*int(count_of_similar_ims);

for i in xrange(int(count_of_similar_ims)):
	similar_files[i] = head[i].split(' ', 1)[0];
	print similar_files[i];

#print str(similar_files);