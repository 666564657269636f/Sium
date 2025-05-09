import requests
import logging

def test_subjects():
    URL = 'http://127.0.0.1:5000/api/subjects/'

    ids = [1, 2, 3, 4, 5]
    names = ['Matematica', 'Fisica', 'Informatica', 'Chimica', 'Inglese']

    for i in range(len(ids)):
        response = requests.get(URL)
        if response.status_code != 200:
            logging.error('Fix :(')
        else:
            logging.info(f'Message: { response.text } Status Code: { response.status_code }')
    
# if __name__ == '__main__':
#     pass

URL = 'http://localhost:5000/api/grades/grade'
response = requests.post(URL, json={
    'user_id': 1,
    'subject_id': 7,
    'mark': 30
})
print(response.text)