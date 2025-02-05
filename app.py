from flask import Flask, render_template
from blueprints.aula30_10 import aula_30_10_bp

app = Flask(__name__)

app.register_blueprint(aula_30_10_bp)
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/projetos/aula3/atividades')
def homeclassroom30_10():
  return render_template('atividade30_10/index-home.html')


if __name__ == '__main__':
  app.run(debug=True)

