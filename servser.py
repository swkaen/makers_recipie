import json

from flask import Flask, render_template, request, Response
from pymodules import db_connection
from pymodules.security_util import generate_hash, eval_hash


app = Flask(__name__)

DB_NAME='mk_recipie.sqlite3'
DB = db_connection.DBConnection(DB_NAME)

@app.route('/')
def server_rendering():
    return render_template('index.html')


@app.route('/api/test', methods=['POST'])
def submit_article():
    json_data=[]
    data=request.form.to_dict()
    json_data.append(data)
    sql_data=(data['author'], data['message'])
    DB.save_user(sql_data)

    return Response(
        json.dumps(json_data),
        mimetype='application/json',
        headers={
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
    )

@app.route('/api/register', methods=['POST'])
def register_user():
    json_data=[]
    data=request.form.to_dict()
    json_data.append(data)
    hash_pass = generate_hash(data['password'])
    sql_data=(data['user_name'], data['email'], hash_pass)
    DB.save_user(sql_data)

    return Response(
        json.dumps(json_data),
        mimetype='application/json',
        headers={
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
    )

@app.route('/api/login', methods=['POST'])
def user_login():
    json_data=[]
    data=request.form.to_dict()
    user_name = (data['user_name'], )
    hash_pass = generate_hash(data['password'])
    db_saved_hash_pass = DB.get_user_password(user_name)
    login_status = eval_hash(hash_pass, db_saved_hash_pass)
    json_data.append({'login_status':login_status})

    return Response(
        json.dumps(json_data),
        mimetype='application/json',
        headers={
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
    )
if __name__=='__main__':
    app.run(host='0.0.0.0', debug=True)
