from flask import jsonify, Blueprint

users_bp = Blueprint('users_bp', __name__)

@users_bp.route('/users')
def get_users():
    pass