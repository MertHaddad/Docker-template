from flask import Flask
from datetime import datetime
app = Flask(__name__)

with open('./volumes_data/volumes_data/python_log.txt', 'w') as f:
    f.write('Python service started at : 'f'{datetime.now():%Y-%m-%d %H:%M:%S%z}')
    
@app.route('/')
def hello_world():
    return 'Hello from Python Docker container!'
