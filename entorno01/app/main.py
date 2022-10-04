from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('send')
def handle_message(data):
    selection = data["vote"]
    emit("announce",{"selection":selection},broadcast = True)

if __name__ == '__main__':
    # app.run(debug=True)
    socketio.run(app)