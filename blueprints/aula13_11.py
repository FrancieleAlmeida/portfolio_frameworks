from flask import Flask, Blueprint, request, jsonify, session, redirect, url_for, render_template
from json import JSONDecodeError

# Criação do Blueprint
aula_13_11_bp = Blueprint('atividade13_11', __name__, url_prefix='/projetos/aula6/atividade')

# Dados mocados de usuários
users = [
    {'user': "adm", 'password': "123"},
    {'user': "fran", 'password': "123456"}
]

# Limite de tentativas de login
MAX_ATTEMPTS = 2

@aula_13_11_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('atividade13_11/login.html')  # Exibe o formulário de login

    try:
        # Verifica se o limite de tentativas foi atingido
        if session.get("tentativas", 0) >= MAX_ATTEMPTS:
            return jsonify({"erro": "Muitas tentativas falhas. Tente mais tarde."}), 403

        # Verifica o tipo de conteúdo da requisição
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

        # Validação de campos obrigatórios
        if not username or not password:
            return jsonify({"erro": "Usuário e senha são obrigatórios."}), 400

        # Validação das credenciais
        for user in users:
            if user["user"] == username and user["password"] == password:
                session.pop("tentativas", None)  # Reseta as tentativas após sucesso
                return jsonify({"mensagem": "Login realizado com sucesso!"}), 200

        # Incrementa o contador de tentativas em caso de falha
        session["tentativas"] = session.get("tentativas", 0) + 1
        return jsonify({"erro": "Credenciais inválidas. Tente novamente."}), 401

    except Exception as e:
        # Tratamento de exceções para evitar mensagens de erro padrão
        return jsonify({"erro": "Erro interno no servidor", "detalhes": str(e)}), 500


@aula_13_11_bp.route('/logout', methods=['POST'])
def logout():
    session.pop("tentativas", None)  # Limpa o contador de tentativas
    return jsonify({"mensagem": "Logout realizado com sucesso!"}), 200