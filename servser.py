from flask import Flask, render_template, request, Response
import json
app = Flask(__name__)

@app.route('/')
def server_rendering():
    return render_template('index.html')

@app.route('/api/test', methods=['POST'])
def submit_article():
    json_data=[]
    data=request.form.to_dict()
    json_data.append(data)
    print('author: '+ data['author'] +' '+ 'message: '+data['message'])
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
