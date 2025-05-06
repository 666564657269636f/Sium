from flask import jsonify
from database.db import cursor

class Subject:
    def __init__(self):
        pass

    # Modificare, questa è una route! Sposta il codice
    @staticmethod
    def get_subjects():
        try:
            cursor.execute('SELECT * from Subjects;')
            
            subjects = [{
                'id': subject[0],
                'name': subject[1]
            } for subject in cursor.fetchall()] 

            return jsonify(subjects), 200
    
        except Exception as e:
            return jsonify({"Error": str(e)}), 500

    @staticmethod
    def get_ids():
        try:
            cursor.execute('SELECT id from Subjects;')

            ids = []
        except Exception as e:
            throw

    @staticmethod
    def get_names():
        pass

