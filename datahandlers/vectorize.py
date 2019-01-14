#script which take course vectors and adds them to database
from gensim.models.doc2vec import Doc2Vec
import pymongo

model = Doc2Vec.load("course_vec.model")

myclient = pymongo.MongoClient("mongodb://localhost/aicore")
mydb = myclient["aicore"]
mycol = mydb["courses"]
col = mycol.find()
vectors = model.docvecs
print(vectors[0])
for i in range(len(vectors)):
	cur = col[i]["_id"]
	newvec = { "$set": { "vector": vectors[i].tolist() } }
	mycol.find_one_and_update({"_id": cur}, newvec)
