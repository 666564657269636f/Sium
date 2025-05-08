import logging

from flask import jsonify, Blueprint
from routes.grades import *

grades_bp = Blueprint('grades_bp', __name__)

@grades_bp.route('/grades', methods=['GET'])
def get_grades():
    try:
        grades = Status.get_statuss()
        return jsonify([grade.to_dict() for grade in grades])
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' })