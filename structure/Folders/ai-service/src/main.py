from flask import Flask, request, jsonify
from utils import process_input, generate_response

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({'error': 'No message provided'}), 400
    
    processed_input = process_input(user_input)
    response = generate_response(processed_input)
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)