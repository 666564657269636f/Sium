import logging

from flask import Blueprint, jsonify, request, session
from werkzeug.security import check_password_hash, generate_password_hash
from routes.users import User

login_bp = Blueprint('login_bp', __name__)

@login_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username_or_email: str = data['username_or_email']
    password: str = data['password']

    if not username_or_email or not password:
        return jsonify({'message': 'Username or email and password are required'}), 400

    try:
        user = User.get_user(username_or_email)

        if user is None:
            return jsonify({'message': 'Invalid username or password'}), 401

        if not check_password_hash(user.password, password):
            return jsonify({'message': 'Invalid password'}), 401

        session['user_id'] = user.id
        session['username'] = user.username
        session['email'] = user.email

        return jsonify({
            'message': 'Login successful',
            'user_id': user.id,
            'username': user.username,
            'email': user.email
        }), 200

    except Exception as e:
        logging.error(f"Error during login: {e}")
        return jsonify({'message': 'Error during login'}), 500