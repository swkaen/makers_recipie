from flask import Flask, render_template, request, Response
import json
import db_connection
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
    sql_data=(data['user_name'], data['email'], data['password'])
    DB.save_user(sql_data)

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
