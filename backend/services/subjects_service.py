from flask import jsonify, Blueprint, request
from routes.subjects import Subject, SubjectCreationError

from typing import List
import logging

subject_bp = Blueprint('subject_bp', __name__)

@subject_bp.route('/subjects', methods=['GET'])
def get_subjects():
    try:
        subjects = Subject.get_subjects()
        return jsonify([subject.to_dict() for subject in subjects]), 200
    except Exception:
        return jsonify({ 'message': 'Internal server error' }), 500

@subject_bp.route('/subjects/ids', methods=['GET'])
def get_ids():
    try:
        ids = Subject.get_ids()
        return jsonify([{ 'id': id } for id in ids]), 200
    except Exception:
        return jsonify({ 'message': 'Internal server error' }), 500

@subject_bp.route('/subjects/names', methods=['GET'])
def get_names():
    try:
        names = Subject.get_names()
        return jsonify([{ 'name': name } for name in names]), 200
    except Exception:
        return jsonify({ 'message': 'Internal server error' }), 500

@subject_bp.route('/subjects/<int:id>', methods=['GET'])
def get_subject(id: int):
    try:
        subject = Subject(id=id)
        return jsonify(subject.to_dict()), 200
    except Exception:
        return jsonify({ 'message': 'Internal server error' }), 500

@subject_bp.route('/subjects', methods=['POST'])
def set_subjects():
    try:
        names = [name['name'] for name in request.get_json()]
        subjects: List['Subject'] = []
        for name in names:
            try:
                subjects.append(Subject(name=name))
            except SubjectCreationError:
                continue
        return jsonify([subject.to_dict() for subject in subjects]), 200
    except Exception:
        return jsonify({ 'message': 'Internal server error' }), 500

@subject_bp.route('/subjects', methods=['DELETE'])
def delete_subjects():
    ids = [id['id'] for id in request.get_json()]
    for id in ids:
        try:
            Subject(id=id).delete()
        except Exception:
            continue
    return '', 204
        
