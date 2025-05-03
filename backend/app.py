from flask import Flask
from database.db import cursor
from users import user_bp

app = Flask(__name__)

# Aggiungi il blueprient per ogni file route che vuoi creare
app.register_blueprint(user_bp)

@app.route("/")
def home(): 
    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
