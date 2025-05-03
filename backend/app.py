from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    name = 'test'

    
    return "Ciao, Flask! SIUSAUJDIUAS"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
