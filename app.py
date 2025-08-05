from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import mysql.connector

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

# --- Register Route ---
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json(force=True, silent=True) or {}
    try:
        fullname = data['fullname']
        email = data['email']
        password = data['password']
        hashed_password = generate_password_hash(password)

        conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="salam462",
        database="login",
        port=3306

        )
        cur = conn.cursor()
        cur.execute("SELECT * FROM create_account WHERE email = %s", (email,))
        if cur.fetchone():
            return jsonify({'message': 'Email already exists'}), 400

        cur.execute(
            'INSERT INTO create_account (Fullname, email, pass_word) VALUES (%s, %s, %s)',
            (fullname, email, hashed_password)
        )
        conn.commit()
        return jsonify({
    'message': 'User registered successfully!',
    'user': {
        'fullname': fullname,
        'email': email
    }
}), 201


    except Exception as e:
        if conn:
            conn.rollback()
        print(f'Register error: {str(e)}')
        return jsonify({'message': 'Registration failed', 'error': str(e)}), 500

    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()



# --- Login Route ---
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data['email']
        password = data['password']

        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="salam462",
            database="login",
            port=3306
        )
        cur = conn.cursor(dictionary=True)

        cur.execute("SELECT * FROM create_account WHERE email = %s", (email,))
        user = cur.fetchone()

        cur.close()
        conn.close()

        if user and check_password_hash(user['pass_word'], password):
            return jsonify({"message": "Login successful", "user": user}), 200
        else:
            return jsonify({"message": "Invalid credentials"}), 401

    except Exception as e:
        print("Login error:", e)
        return jsonify({"error": str(e)}), 500

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('build', path)

@app.route('/')
def serve_vite_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/home')
def home():
    return send_from_directory('dist', 'index.html')


# Add this route to your existing Flask app (place it with your other routes)
@app.route('/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    message = data.get('message', '').strip()
    
    if not message:
        return jsonify({'error': 'Message cannot be empty'}), 400
    
    conn = None
    cursor = None
    try:
        # Use your existing database connection details
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="salam462",
            database="login",
            port=3306
        )
        cursor = conn.cursor()
        
        # Create table if not exists (one-time operation)
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS contact_messages (
                message_id INT AUTO_INCREMENT PRIMARY KEY,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Insert the message
        cursor.execute(
            'INSERT INTO contact_messages (message) VALUES (%s)',
            (message,)
        )
        conn.commit()
        
        return jsonify({'success': 'Message received successfully'}), 200
        
    except Exception as e:
        if conn:
            conn.rollback()
        print(f"Contact form error: {str(e)}")
        return jsonify({'error': str(e)}), 500
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


if __name__ == '__main__':
    app.run(debug=True)
