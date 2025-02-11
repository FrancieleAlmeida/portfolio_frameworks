from flask import Flask, render_template
from blueprints.aula30_10 import aula_30_10_bp
from blueprints.aula06_11 import aula_06_11_bp

app = Flask(__name__)
app.secret_key = 'senha123'


app.register_blueprint(aula_30_10_bp)
app.register_blueprint(aula_06_11_bp)
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/projetos/aula4/atividades')
def homeclassroom30_10():
  return render_template('atividade30_10/index-home.html')

@app.route('/projetos/aula5/atividades')
def homeclassroom06_11():
  return render_template('atividade06_11/index-home.html')


if __name__ == '__main__':
  app.run(debug=True)

