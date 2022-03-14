#!/usr/bin/python3

from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
from config import Config

__author__ = 'rsharp'

app = Flask(__name__)
app.config.from_object(Config)

users_connected = 0

#turn the flask app into a socketio app
socketio = SocketIO(app, async_mode=None, logger=True, engineio_logger=True)
#socketio = SocketIO(app, aync_mode=eventlet, logger=True, engineio_logger=True)

#=============================================================================

def PlaySound(sound, vol, sid):
    if sid == '':
        # broadcast
        socketio.emit('sound', {
            'place': sound,
            'number': vol
            }, namespace='/test')
    else:
        # only to one
        socketio.emit('sound', {
            'place': sound,
            'number': vol
            }, namespace='/test',
            room = sid)

def statusUpdate():
    global users_connected
    socketio.emit('status', {
        'place': '', 
        'number': str(users_connected)
        }, namespace='/test')

#=============================================================================

@socketio.on('move', namespace='/test')
def on_movement(data):
    # Get the command
    direct = data.get('direction')
    PlaySound('/static/sounds/DM2_'+direct+'.WAV', '0.5', '')

@socketio.on('connect', namespace='/test')
def test_connect():
    global users_connected
    users_connected += 1
    statusUpdate()
    PlaySound('/static/sounds/DM2_31.WAV', '0.5', '')

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    global users_connected
    users_connected -= 1
    statusUpdate()
    PlaySound('/static/sounds/DM2_36.WAV', '0.5', '')

#=============================================================================

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', title='Frying Circuits', users=users_connected)

@app.route("/about")
def about():
    return render_template('about.html', title='Frying Circuits', users=users_connected)

@app.errorhandler(404)
def error_404(error):
    return render_template('errors/404.html'), 404

@app.errorhandler(403)
def error_403(error):
    return render_template('errors/403.html'), 403

@app.errorhandler(500)
def error_500(error):
    return render_template('errors/500.html'), 500


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8080, debug=False)
