import logging

from flask import Flask, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

from secrets import token_hex

from database.db import cursor
from mail.mail import mail

from users import user_bp
from services.grades_service import grades_bp
from services.subjects_service import subject_bp
from services.curriculums_service import curriculum_bp
from routes.register import register_bp
from routes.login import login_bp
from routes.logout import logout_bp

app = Flask(__name__)

app.config['MAIL_SERVER']='xxxx.smtp.xxxx'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'xxxxxxxxxxxxxx'
app.config['MAIL_PASSWORD'] = 'xxxxxxxxxxxxxx'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_DEFAULT_SENDER'] = ('Francesco Totti', 'franscescototti@totti.it')

mail.init_app(app)

app.secret_key = token_hex(32)

cors = CORS(app=app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(grades_bp, url_prefix='/api')
app.register_blueprint(subject_bp, url_prefix='/api')

app.register_blueprint(register_bp, url_prefix='/api')
app.register_blueprint(login_bp, url_prefix='/api')
app.register_blueprint(logout_bp, url_prefix='/api')

app.register_blueprint(curriculum_bp, url_prefix='/api')

@app.route("/")
def home(): 
    return "Hello World"

from mail.mail import send_email

@app.route('/mail', methods=['GET'])
def mail():
    try:
        send_email(subject='Oggetto', body='🍊', email='test@test.it')
        return jsonify({ 'message': 'Email sent successfully' }), 200
    except Exception as e:
        logging.error(e)
        return jsonify({ 'message': 'Error sending email' }), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
