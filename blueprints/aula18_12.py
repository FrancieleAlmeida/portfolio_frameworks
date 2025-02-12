from flask import Blueprint, render_template, request, redirect, session, url_for, flash
from datetime import datetime
from werkzeug.utils import secure_filename
import os
aula_18_12_bp = Blueprint('atividades18_12', __name__, url_prefix='/projetos/aula11/atividades')

posts = [] 

@aula_18_12_bp.route("/mini_blog", methods=["GET", "POST"])
def activity1():
    if request.method == "POST":
        texto = request.form["texto"]
        if texto:
            posts.append({
                "texto": texto,
                "data": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            })
        return redirect("mini_blog")
    return render_template("atividade18_12/mini_blog.html", posts=sorted(posts, key=lambda x: x["data"], reverse=True))


USERS = {
    "admin": "1234",
    "usuario": "senha123"
}

login_attempts = []

@aula_18_12_bp.route("/pagina_autenticacao", methods=["GET", "POST"])
def activity2():
    message = ""

    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        timestamp = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

        if username in USERS and USERS[username] == password:
            session["user"] = username
            return redirect(url_for("atividades18_12.home"))

        else:
            message = "❌ Usuário ou senha incorretos."
        
        login_attempts.append({"username": username, "time": timestamp, "status": message})

    return render_template("atividade18_12/pag_autenticacao.html", message=message)

  

@aula_18_12_bp.route("/home")
def home():
    if "user" not in session:
        return redirect(url_for("atividades18_12.activity2"))

    return render_template("atividade18_12/home_autenticacao.html", username=session["user"])


@aula_18_12_bp.route("/logout")
def logout():
    session.pop("user", None) 
    return redirect(url_for("atividades18_12.activity2"))



UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

uploaded_files = [] 

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@aula_18_12_bp.route("/pagina_upload", methods=["GET", "POST"])
def upload():
    if request.method == "POST":
        if 'file' not in request.files:
            flash("Nenhum arquivo foi enviado!", "error")
            return redirect(request.url)

        file = request.files['file']

        if file.filename == '':
            flash("Nenhum arquivo selecionado!", "error")
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")  # Formato de data e hora
            filepath = os.path.join(UPLOAD_FOLDER, f"{timestamp}_{filename}")
            file.save(filepath)

            uploaded_files.append({'path': filepath, 'timestamp': timestamp})

            flash(f"Upload realizado com sucesso! Arquivo salvo em: {filepath}", "success")
            return redirect(url_for("atividades18_12.upload"))

        flash("Formato de arquivo não permitido!", "error")

    return render_template("atividade18_12/pag_upload.html", files=uploaded_files)