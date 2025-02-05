from flask import Blueprint, render_template

aula_30_10_bp = Blueprint('atividades30_10', __name__, url_prefix='/projetos/aula3/atividades')


@aula_30_10_bp.route('/tag_canva')
def activity1():
  return render_template('atividade30_10/tag_canva.html')

@aula_30_10_bp.route('/foto_webcam')
def activity2():
  return render_template('atividade30_10/foto_webcam.html')

@aula_30_10_bp.route('/tabela')
def activity3():
  return render_template('atividade30_10/tabela.html')

@aula_30_10_bp.route('/Curriculos')
def activity4():
  return render_template('atividade30_10/index-curriculos.html')

@aula_30_10_bp.route('/Curriculos/curriculo_caio')
def curriculum_caio():
  return render_template('atividade30_10/curriculo_caio.html')

@aula_30_10_bp.route('/Curriculos/curriculo_fran')
def curriculum_fran():
  return render_template('atividade30_10/curriculo_fran.html')

@aula_30_10_bp.route('/Curriculos/curriculo_isa')
def curriculum_isa():
  return render_template('atividade30_10/curriculo_isa.html')

@aula_30_10_bp.route('/Curriculos/curriculo_nathan')
def curriculum_nathan():
  return render_template('atividade30_10/curriculo_nathan.html')

@aula_30_10_bp.route('/Curriculos/curriculo_talita')
def curriculum_talita():
  return render_template('atividade30_10/curriculo_talita.html')

@aula_30_10_bp.route('/Curriculos/curriculo_vinicius')
def curriculum_vinicius():
  return render_template('atividade30_10/curriculo_vinicius.html')


