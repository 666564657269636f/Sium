from flask import Blueprint
from flask import jsonify
from typing import List
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
