from flask import jsonify, Blueprint

status_bp = Blueprint('status_bp', __name__)

@status_bp.route('/status')
def get_status():
    pass