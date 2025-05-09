import logging

from flask import jsonify, Blueprint
from routes.grades import Status

grades_bp = Blueprint('grades_bp', __name__)

# Di base va ma parte da 31, è un caso?
@grades_bp.route('/grades', methods=['GET'])
def get_grades():
    try:
        grades = Status.get_grades()
        return jsonify([grade.to_dict() for grade in grades])
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' })

@grades_bp.route('/grades/<int:id>', methods=['GET'])
def get_grade(id: int):
    pass
