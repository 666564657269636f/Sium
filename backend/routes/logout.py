from flask import jsonify, Blueprint, session

logout_bp = Blueprint('logout_bp', __name__)

@logout_bp.route('/logout')
def logout():
    session.clear()
    return jsonify({ 'message': 'Logged out' }), 200
