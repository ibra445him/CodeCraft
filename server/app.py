from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    message = data.get('message')

    if not message:
        return jsonify({'error': 'Message is required'}), 400

    # Here you would typically save the message to a database
    # or send it via email. For now, we'll just print it.
    print('Received message:', message)

    return jsonify({'message': 'Message received successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
