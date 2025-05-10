import logging

from flask import Blueprint, jsonify, request
from routes.users import User
from werkzeug.security import generate_password_hash

register_bp = Blueprint('register_bp', __name__)

@register_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    name: str = data['name']
    surname: str = data['surname']
    email: str = data['email']
    course: str = data['course']
    department: str = data['department']
    phone: str = data['phone']
    address: str = data['address']
    password: str = data['password']
    username: str = data['username']

    if (not name or not surname or not email or not course or not department 
        or not phone or not address or not password or not username):
        return jsonify({'message': 'No data found'}), 400

    try:
        hashed_password = generate_password_hash(password)

        user = User.set_user(
            name=name, surname=surname, email=email, course=course,
            department=department, phone=phone, address=address, 
            password=hashed_password, username=username
        )

        return jsonify({
            'message': 'User successfully registered',
            'user_id': user.id
        }), 201

    except Exception as e:
        logging.error(f"Error during registration: {e}")
        return jsonify({'message': 'Error during registration'}), 500
