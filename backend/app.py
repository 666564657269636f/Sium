from flask import Flask
from flask_cors import CORS

from database.db import cursor
from users import user_bp

app = Flask(__name__)

cors = CORS(app=app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(user_bp, url_prefix='/api')

@app.route("/")
def home(): 
    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
