from flask import Flask, Blueprint, request, jsonify, session, redirect, url_for, render_template
from json import JSONDecodeError

aula_13_11_bp = Blueprint('atividade13_11', __name__, url_prefix='/projetos/aula6/atividade')

users = [
    {'user': "adm", 'password': "12345"},
]

MAX_ATTEMPTS = 2

@aula_13_11_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('atividade13_11/login.html')

    try:
        if session.get("tentativas", 0) >= MAX_ATTEMPTS:
            return jsonify({"erro": "Muitas tentativas falhas. Tente mais tarde."}), 403

        if request.content_type == 'application/json':
            try:
                dados = request.get_json()
                if not dados:
                    return jsonify({"erro": "JSON inválido ou vazio."}), 400
                username = dados.get("user")
                password = dados.get("password")
            except JSONDecodeError:
                return jsonify({"erro": "Formato de JSON inválido."}), 400
        else:
            username = request.form.get("user")
            password = request.form.get("password")

        if not username or not password:
            return jsonify({"erro": "Usuário e senha são obrigatórios."}), 400

        for user in users:
            if user["user"] == username and user["password"] == password:
                session.pop("tentativas", None)  
                return jsonify({"mensagem": "Login realizado com sucesso!"}), 200

        session["tentativas"] = session.get("tentativas", 0) + 1

        error_message = "Credenciais inválidas. Tente novamente."
        return render_template('atividade13_11/login.html', error_message=error_message)

    except Exception as e:
        return jsonify({"erro": "Erro interno no servidor", "detalhes": str(e)}), 500
