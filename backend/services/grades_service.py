import logging

from flask import jsonify, Blueprint, request
from routes.grades import Grades, GradeNotFound, GradeCreationError

grades_bp = Blueprint('grades_bp', __name__)

# Di base va ma parte da 31, è un caso?
@grades_bp.route('/grades', methods=['GET'])
def get_grades():
    try:
        grades = Grades.get_grades()
        return jsonify([grade.to_dict() for grade in grades]), 200
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' }), 500

@grades_bp.route('/grades/<int:id>', methods=['GET'])
def get_grade(id: int):
    if not id:
        return jsonify({'message': 'No data found' }), 400
    try:
        grade: Grades = Grades(id=id)
        return jsonify(grade.to_dict()), 200
    except GradeNotFound as e:
        logging.error(e)
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' }), 500
    
@grades_bp.route('/grades/user/<int:user_id>/subject/<int:subject_id>', methods=['GET'])
def get_grade_by_user_and_subject(user_id: int, subject_id: int):
    if not user_id or not subject_id:
        return jsonify({ 'message': 'No data found' }), 400
    try:
        grade: Grades = Grades(user_id=user_id, subject_id=subject_id)
        return jsonify(grade.to_dict()), 200
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' }), 500

@grades_bp.route('/grades/grade', methods=['POST'])
def set_grade():
    data = request.get_json()
    
    user_id: int = data['user_id']
    subject_id: int = data['subject_id']
    mark: int = data['mark']

    if not user_id or not subject_id or not mark:
        return jsonify({ 'message': 'No data found' }), 400

    try:
        grade: Grades = Grades(user_id=user_id, subject_id=subject_id, mark=mark)
        return jsonify(grade.to_dict()), 200
    except GradeCreationError as e:
        logging.error(e)
        return jsonify({ 'message': 'Errore nella creazione del Grade' }), 500
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' }), 500

@grades_bp.route('/grades/grade', methods=['DELETE'])
def delete_grade():
    data = request.get_json()

    id: int = data['id']
    user_id: int = data['user_id']
    subject_id: int = data['subject_id']

    try:
        if id:
            Grades(id=id)._delete()
        elif user_id and subject_id:
            Grades(user_id=user_id, subject_id=subject_id)._delete()
        else:
            return jsonify({'message': 'No data found' }), 400
        return '', 201
    except Exception as e:
        logging.error(e)
        return jsonify({'message': 'Internal server error' }), 500

 