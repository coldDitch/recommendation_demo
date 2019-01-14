#script which creates course vectors using doc2vec
import numpy as np
import pymongo
from gensim.models.doc2vec import Doc2Vec, TaggedDocument
from nltk.tokenize import word_tokenize

myclient = pymongo.MongoClient("mongodb://localhost/aicore")
mydb = myclient["aicore"]
mycol = mydb["courses"]
x = mycol.find()
description_list = []
for i in x:
	description_list.append(i["description"])

tagged_data = [TaggedDocument(words = word_tokenize(_d.lower()), tags=[str(i)]) for i, _d in enumerate(description_list)]

max_epochs = 100
vec_size = 20
alpha = 0.025

model = Doc2Vec(vector_size = vec_size,
		alpha = alpha,
		min_alpha = 0.00025,
		min_count = 1,
		dm = 1)
model.build_vocab(tagged_data)

for epoch in range(max_epochs):
	model.train(tagged_data,
	     total_examples = model.corpus_count,
	     epochs = model.iter)
	model.alpha -= 0.0002
	model.min_alpha = model.alpha

model.save("course_vec.model")

