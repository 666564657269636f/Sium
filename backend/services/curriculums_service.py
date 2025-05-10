import os

from flask import jsonify, Blueprint, send_from_directory, request
from routes.curriculums import *

curriculum_bp = Blueprint('curriculum_bp', __name__)

@curriculum_bp.route('/download/<int:user_id>', methods=['GET'])
def download(user_id: int):
    pass

@curriculum_bp.route('/upload/<int:user_id>', methods=['POST'])
def upload(user_id: int):
    pass

@curriculum_bp.route('/curriculums/curriculum', methods=['GET'])
def get_curriculum():
    id: int = request.args.get('id', type=int)
    user_id: int = request.args.get('user_id', type=int)

    if not user_id and not id:
        return jsonify({ 'message': 'No user_id or id found' }), 400
    
    try:
        if user_id:
            curriculum: Curriculum = Curriculum(user_id=user_id, check_only=True)
        else:
            curriculum: Curriculum = Curriculum(id=id)
        return jsonify(curriculum.to_dict()), 200
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' }), 500
