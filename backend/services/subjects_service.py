from flask import jsonify, Blueprint

subject_bp = Blueprint('subject_bp', __name__)

@subject_bp.route('/subjects')
def get_subjects():
    pass