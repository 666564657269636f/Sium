from flask import Flask
from flask_cors import CORS

from database.db import cursor
from users import user_bp

from services.grades_service import grades_bp
from services.subjects_service import subject_bp
from routes.register import register_bp
from routes.login import login_bp
# from services.users_service import users_bp

app = Flask(__name__)

cors = CORS(app=app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(grades_bp, url_prefix='/api')
app.register_blueprint(subject_bp, url_prefix='/api')

app.register_blueprint(register_bp, url_prefix='/api')
app.register_blueprint(login_bp, url_prefix='/api')

@app.route("/")
def home(): 
    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
