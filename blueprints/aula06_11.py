import re
from flask import Blueprint, render_template, request, redirect, url_for, flash, render_template_string
from datetime import datetime
import json



aula_06_11_bp = Blueprint('atividades06_11', __name__, url_prefix='/projetos/aula5/atividades')


users = [{
      'user':'adm',
      'password':'123456'
    }]

logged = False
counter = 0
@aula_06_11_bp.route('/login', methods=['GET', 'POST'])
def activity1():
  global logged
  logged = False
  if request.method == 'POST':
    user = request.form.get('user')
    password = request.form.get('password')
  
    global counter
    global is_disabled
    is_disabled = False


    for userrname in users:
      if userrname['user'] == user and userrname['password'] == password:
        counter=0
        logged = True
        is_disabled = False

        return redirect(url_for('atividades06_11.home', user=user))
      else:
        flash('Login e senha incorretos')
        counter+=1
        if counter > 2:
          is_disabled = True
          flash('Quantidade de tentativas excedidas')
          return render_template('atividade06_11/login.html',is_disabled=is_disabled)
  return render_template('atividade06_11/login.html')


@aula_06_11_bp.route('/home/<user>')
def home(user):
  if logged == True:
    current_time = datetime.now()
    time = current_time.strftime("%H:%M")
    if time >= "12:00" and time < "18:00":
      flash(f'Boa tarde, {user}!')
    elif time >= "18:00" and time <= "23:59":
      flash(f'Boa noite, {user}!')
    else:
      flash(f'Bom dia, {user}!')
      
    return render_template('atividade06_11/home_login.html', user=user)
  if logged == False:
    return redirect('/atividade06_11/login')



def load_json():
  with open('./static/formulario.json', 'r', encoding='utf-8') as file:
    file = json.load(file)
    return file

def generate_html(file):
  
  form_file = file[0]["form"]
  form_title = form_file["title"]
  fields = form_file["fields"]

  html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>{form_title}</title>
      <link rel="stylesheet" href="{{{{ url_for('static', filename='css/atividade06_11/formulario.css') }}}}">

    </head>
    <body>
      <div class="form-container">
        <h1>{form_title}</h1>
        <form action="" method="POST">
    """

  for field in fields:
    label = field["label"]
    name = field["name"]
    input_type = field["type"]
    placeholder = field["placeholder"]

    html += f"""
      <label for="{name}">{label}:</label>
      <input type="{input_type}" name="{name}" id="{name}" placeholder="{placeholder}" required><br>
      """

  html += """
        <input type="submit" value="Enviar">
      </form>
    </div>
  </body>
  </html>
    """

  return html



@aula_06_11_bp.route("/formulario", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        data = request.form.to_dict()
        session["form_data"] = data
        return redirect(url_for("atividades06_11.confirmacao"))

    form_data = load_json()
    html_content = generate_html(form_data)
    return render_template_string(html_content)
  


@aula_06_11_bp.route("/confirmacao", methods=["GET"])
def confirmacao():
    if "form_data" not in session:
        return redirect(url_for("atividades06_11.register"))

    return render_template_string(f"""
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmação</title>
            <link rel="stylesheet" href="{{{{ url_for('static', filename='css/atividade06_11/formulario.css') }}}}">
        </head>
        <body class="confirm-container">
            <div class="confirm-box">
                <h1>Dados Enviados</h1>
                <pre>{json.dumps(session['form_data'], indent=4, ensure_ascii=False)}</pre>
                <a href="{{{{ url_for('atividades06_11.register') }}}}">Voltar</a>
            </div>
        </body>
        </html>
    """)


@aula_06_11_bp.route('/atividade_class')
def atividade_class():
  return render_template('atividade06_11/atividade_classe.html')



class Users:
  def __init__ (self, name,username, email, password, cell_phone):
    self._name = name
    self._username = username
    self._email = email
    self._password = password
    self.cell_phone = cell_phone 
    
  @property
  def username(self):
    return self._username
  
  
  @username.setter
  def username(self, value):
    if len(value) < 3:
      raise ValueError("Nome de usuario deve conter no minimo 3 caracteres")
    self._username = value
    
  @property
  def password(self):
    return self._password
  
  @password.setter
  def password(self, value):
    if len(value) < 6:
      raise ValueError("Senha deve conter no minimo 6 caracteres")
    self._password = value
    
    
    @property
    def cell_phone(self):
        return self._cell_phone

    @cell_phone.setter
    def cell_phone(self, value):
        if not re.fullmatch(r"\d{11}", value):
            raise ValueError("Número de celular inválido! Use 11 dígitos (ex: 11987654321)")
        self._cell_phone = value

    
  def authentication(self, username,password, session):
    if self._username == username and self._password == password:
      session['is_authenticated'] = True
      session['username'] = self._username
      return True
    
    else:
      session['is_authenticated'] = False
      print("Usuario ou senha invalido")
      return False
    
  def logout(self, session):
    session['is_authenticated'] = False
    return True
      
      
session={}
