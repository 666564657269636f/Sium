import logging

from flask import Blueprint, jsonify, request
from werkzeug.security import generate_password_hash

register_bp = Blueprint('register_bp', __name__)

@register_bp.route('/register')
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
        return jsonify({ 'message': 'No data found' }), 400
    
    # ...
