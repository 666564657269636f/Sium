import os

from flask import jsonify, Blueprint, send_from_directory, request
from routes.curriculums import *
from werkzeug.utils import secure_filename

curriculum_bp = Blueprint('curriculum_bp', __name__)

UPLOAD_FOLDER = 'public/curriculums'
ALLOWED_EXTENSIONS = {'pdf'}

def allowed_file(filename: str):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@curriculum_bp.route('/download/<int:user_id>', methods=['GET'])
def download(user_id: int):
    if not user_id:
        return jsonify({ 'message': 'No user_id found' }), 400
    
    try:
        curriculum: Curriculum = Curriculum(user_id=user_id, check_only=True)
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Internal server error' }), 500

    file_path = os.path.join(UPLOAD_FOLDER, curriculum.get_filename())
    if not os.path.exists(file_path):
        return jsonify({'message': 'File not found'}), 404

    return send_from_directory(UPLOAD_FOLDER, curriculum.get_filename(), as_attachment=True)

@curriculum_bp.route('/upload/<int:user_id>', methods=['POST'])
def upload(user_id: int):
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        try:
            curriculum: Curriculum = Curriculum(user_id=user_id)
        except Exception as e:
            logging.error(e)
            return jsonify({ 'message': 'Internal server error' }), 500

        filename = secure_filename(curriculum.get_filename())
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        return jsonify({'message': 'File uploaded successfully'}), 200
    else:
        return jsonify({'message': 'Invalid file type'}), 400

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
