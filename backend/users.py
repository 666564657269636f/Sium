from flask import Blueprint
from flask import jsonify
from database.db import cursor

# Crei il blueprint per la route
user_bp = Blueprint('user_bp', __name__)

# Fai le route per le richieste
@user_bp.route("/users")
def get_users():
    try:
        # Metodo per prendere i dati dal db
        cursor.execute('SELECT * FROM Users;')
        users = cursor.fetchall()

        # Esempio di come passare poi i dati alla richiesta
        users_list = []
        for user in users:
            users_list.append({
                "id": user[0],
                "name": user[1],
                "surname": user[2],
                "email": user[3]
            })

        return jsonify(users_list), 200

    except Exception as e:
        return jsonify({"Error": str(e)}), 500

@user_bp.route('/ids')
def get_ids():
    return Users.get_ids()

class Users:
    def __init__(self):
        pass

    @staticmethod
    def get_ids():
        try:
            cursor.execute('SELECT id FROM Users;')
            ids = cursor.fetchall()

            ids_list = [{'id': id[0]} for id in ids]

            return jsonify(ids_list), 200
        
        except Exception as e:
            return jsonify({"Error": str(e)}), 500

    @staticmethod
    def get_names():
        try:
            cursor.execute('SELECT name FROM Users;')
            names = cursor.fetchall()

            name_list = [{'name': name[0]} for name in names]

            return jsonify(name_list), 200
        
        except Exception as e:
            return jsonify({"Error": str(e)}), 500

    @staticmethod
    def get_surnames():
        try:
            cursor.execute('SELECT surname FROM Users;')
            surnames = cursor.fetchall()

            surname_list = [{'surname': surname[0]} for surname in surnames]

            return jsonify(surname_list), 200
        
        except Exception as e:
            return jsonify({"Error": str(e)}), 500

    @staticmethod
    def get_emails():
        try:
            cursor.execute('SELECT email FROM Users;')
            emails = cursor.fetchall()

            email_list = [{'email': email[0]} for email in emails]

            return jsonify(email_list), 200
        
        except Exception as e:
            return jsonify({"Error": str(e)}), 500
    
            
