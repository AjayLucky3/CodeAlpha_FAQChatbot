import json

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


with open("faq.json","r") as file:
    faq_data=json.load(file)


questions=[item["question"] for item in faq_data]

answers=[item["answer"] for item in faq_data]


vectorizer=TfidfVectorizer()

question_vectors=vectorizer.fit_transform(questions)


def get_answer(user_question):

    user_vector=vectorizer.transform([user_question])

    similarity=cosine_similarity(user_vector,question_vectors)

    best_match=similarity.argmax()

    return answers[best_match]