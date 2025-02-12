
function openModal(aula) {
  let modalContent;

  switch (aula) {
    case 'aula1':
      modalContent = `
        <div class="modal-content">
          <span class="close" onclick="closeModal()">&times;</span>
          <h2>Revisar para a Próxima Aula</h2>
          <ul>
            <li><strong>Rodar um ambiente virtual no Python com venv:</strong> Criar e ativar um ambiente virtual utilizando a ferramenta venv para isolar dependências do projeto.</li>
            <li><strong>Familiarizar-se com o Linux:</strong> Compreender os comandos básicos e a navegação no sistema operacional Linux, essencial para o desenvolvimento de software.</li>
            <li><strong>Instalar pacotes no Python com venv:</strong> Aprender a instalar pacotes usando o ambiente virtual criado, utilizando o pip.</li>
            <li><strong>Boas práticas:</strong> Nunca coloque o código-fonte dentro da pasta do ambiente virtual. Mantenha sempre o ambiente isolado.</li>
            <li><strong>Pesquisar sobre o requirements.txt:</strong> Descobrir como gerar o arquivo requirements.txt (que lista as dependências do projeto) e como instalar pacotes a partir dele.</li>
          </ul>
        </div>`;
      break;
    case 'aula3':
      modalContent = `
        <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>

          <h2>Tema dos Trabalhos</h2>
          <ul>
            <li><h4>- Sistema de chamada por câmera</h4></li>
            <li><h4>- Análise de emoções em imagem</h4></li>
            <li><h4>- Scanner para documento PDF</h4></li>
          </ul>

          <h2>Padrões de Arquivo e Organização de Código</h2>
            <ul>
                <li><strong>Frameworks trabalham com padrão;</strong></li>
                <li><strong>Os arquivos HTML:</strong> Devem estar na pasta templates nessa primeira parte.</li>
                <li><strong>Código limpo:</strong> ZERO comentários e nomes relevantes.</li>
                <li><strong>Nomeação:</strong> Use nomes em inglês, nada de português em classes, variáveis, nomes e arquivos.</li>
                <li><strong>Variáveis:</strong> Devem ser em <code>snake_case</code> (padrão da linguagem), nada de acentos ou caracteres especiais.</li>
            </ul>
          <h2>Passo a passo para criar um ambiente virtual python</h2>
          <h3>1. Criando o ambiente dentro do terminal do VSCode:</h3>
          <ul>
            <li><code>python -m venv nome_do_ambiente</code></li>
          </ul>

          <h3>2. Autorizar a criação dos ambientes (apenas uma vez no PowerShell):</h3>
          <ul>
              <li><code>Get-ExecutionPolicy</code></li>
              <li><code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code></li>
          </ul>

          <h3>3. Ativando o ambiente e desativando</h3>
          <ul>
            <li>Windows:<code>nome_do_ambiente&#92Scripts&#92activate</code></li>
            <li>Linux:<code>source nome_do_ambiente/bin/activate</code></li>
            <li>Desativando:<code>deactivate</code></li>

          </ul>
          <h3>Instalando dependências:</h3>
          <ul>
              <li><code>pip install nome_pacote</code></li>
              <li><code>pip list</code> - exibe todos os pacotes instalados</li>
          </ul>

          <h3>O que instalamos nessa primeira aula:</h3>
          <ul>
              <li><code>flask</code></li>
              <li><code>flask sqlalchemy</code></li>
              <li><code>numpy</code> - Serve para manipular arrays, matrizes etc., é mais rápido que laços de repetição.Além disso, ela fornece funções matemáticas</li>
          </ul>

          <h3>Referência de pacotes:</h3>
          <p><strong>PyPI:</strong> Site que contém um campo de busca de pacotes e como instalá-los.</p>
        </div>

    `
      break;
    case 'aula4':
      modalContent = `
        <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>

          <h2>Criando uma Aplicação Flask</h2>

          <h3>1. Importar o Flask</h3>
          <p>O módulo Flask deve ser importado no início do código</p>
          <pre><code>from flask import Flask</code></pre>

          <h3>2. Instanciando o Flask</h3>
          <p>
            Para iniciar uma aplicação Flask, criamos uma variável chamada <code>app</code>, que instancia um objeto Flask:
          </p>
          <pre><code>app = Flask(__name__)</code></pre>
          <p>
            O <code>__name__</code> é uma variável especial em Python que indica o nome do módulo atual. 
            Pesquise mais sobre ela para entender melhor como funciona essa lógica!
          </p>

          <h3>3. Criando Rotas</h3>
          <p>
            No Flask, as rotas são criadas com o decorador <code>@app.route()</code>. As rotas permitem que você defina qual função será executada ao acessar uma URL específica.
          </p>
          <pre><code>
          @app.route('/')
          def home():
            return 'Bem-vindo à página inicial!'
        </code></pre>
          <p>
            No exemplo acima, a função <code>home()</code> será executada sempre que a URL raiz <code>/</code> for acessada.
          </p>

          <h3>4. Adicionando Outras Rotas</h3>
          <p>
            Podemos adicionar mais rotas para páginas diferentes. Por exemplo, uma página de contato:
          </p>
          <pre><code>
          @app.route('/contact')
          def contact():
            return 'Essa é a página de contato!'
        </code></pre>

          <h3>5. Executando o Servidor</h3>
          <p>
            Para executar o servidor Flask, utilizamos o método <code>app.run()</code>. Por padrão, o servidor roda na porta 5000, mas podemos personalizar o comportamento:
          </p>
          <ul>
            <li>
              <code>app.run(debug=True)</code>: O modo <strong>debug</strong> atualiza automaticamente o servidor a cada alteração no código.
            </li>
            <li>
              <code>app.run(debug=True, port=8000)</code>: Altere a porta para 8000.
            </li>
            <li>
              <code>app.run(debug=True, port=8000, host='0.0.0.0')</code>: Disponibilize a aplicação para todos na mesma rede.
            </li>
          </ul>

          <h3>Resumo</h3>
          <p>
            O Flask permite criar aplicações web reativas. Criamos rotas com <code>@app.route()</code> e definimos funções para lidar com as requisições. O servidor pode ser configurado para rodar em diferentes portas e hosts.
          </p>
          <h2>Atividades</h2>
          <ul>
          <li>1. Crie uma rota para uma página web com a tag *canvas* permitido o usuario deslocar uma foto da direita para a esquerda com as setas do teclado; </li>
          <li>2. Crie uma rota que permita o usuario capturar uma foto pela webcam, e exibir ela; </li>
          <li>3. Crie uma rota para uma pagina web que exiba uma tabela sem usar o table com 997 linhas
            com 5 colunas, sendo: id,nome,sobrenome,email,aplicações(ações); </li>
          <li>4. Crie uma rota com 3 links, um para cada atividade anterior 1,2 e 3 sendo bonitas; </li>
          <li>5. Crie 6 rotas,sendo cada uma estilizada e bonita, sendo cada rota deve conter o curriculo de um integrante do grupo. </li>
          </ul>

          <h3>Observação</h3>
          <span>Na atividade realizada, juntei a atividade 4 em uma única tela inicial, que contém todas as demais atividades. A atividade 5 foi renomeada para "Currículos".</span>
        </div>
      `;
      break;
    case 'aula5':
      modalContent = `
      <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
        <h2>Render Template</h2>
        <p>O método <strong>render_template</strong> no Flask permite passar variáveis do Python para o template HTML.</p>
        <p>Exemplo de código:</p>
        <pre><code>
        @app.route('/')
        def index():
          nome = 'Fran'  # Atribuindo um valor à variável 'nome'
          return render_template('index.html', nome=nome)</code></pre>
        <p>No arquivo <strong>index.html</strong>, você pode acessar a variável assim:</p>
        <pre><code>&lt;h1&gt;Olá, {{ nome }}&lt;/h1&gt;</code></pre>
          <h2>Atividades</h2>
          <ul>
          <li>1. Considerando um usuario e uma senha mocados faça uma pagina de autenticação(login e senha), e retorne um bom dia fulano,boa tarde ou boa noite, caso usuario e senha não conferir, informar "login não confere";  </li>
          <li>2. Limite as tentativas de autenticação do usuário em 2x(atividade 1), se ele errar duas vezes, tirar a opção de login e exibir uma mensagem de erro;  </li>
          <li>3. Estilizar de forma bonita essas atividades;  </li>
          <li>4. Escreva um script python que gere automaticamente um template html contendo um formulario para input de dados  com campos que deve ser recebido por um Json;</li>
          <li>5. Incremente o script 4 para que após gerar o template, ele construa automáticamente uma rota que permita visualizar o template; </li>
          <li>6. Crie uma classe em python que encapsula dados de usuarios entre 5 e 6 campos, e desenvolva uma função de autenticação(valida dados, criar uma secção para guardar a autenticação).</li>
          </ul>
          <h3>Observação:</h3>
          <span>Na atividade realizada, combinei as atividades 1, 2 e 3 em uma única tela, que agora representa a atividade de login. O mesmo foi feito para as atividades 4 e 5, que formam a atividade de formulário. Já a atividade 6 foi renomeada para "Código Class"</span>
      </div>
    `
      break;
    case 'aula6':
      modalContent = `
      <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
        <h2>Regras Basicas para Desenvolvimento</h2>
        <p><strong>1ª Regra:</strong> Não confie nos dados que chegam da requisição; sempre valide todos os dados. A validação depende do tipo de dado esperado (ex: texto, número, etc).</p>
        <p><strong>2ª Regra:</strong> Garantir a integridade e consistência dos dados. Os dados recebidos devem ser válidos para realizar cálculos e poder armazená-los, garantindo que serão recuperados posteriormente quando necessário. Utilizamos armazenamento persistente (como bancos de dados) para preservar a durabilidade e integridade dos dados.</p>
        <p><strong>3ª Regra:</strong> Trabalhar de forma assíncrona ou síncrona. Se a aplicação for síncrona, a resposta precisa ser devolvida em tempo hábil. Em desenvolvimento web, geralmente utilizamos a forma síncrona.</p>
        <p><strong>4ª Regra:</strong> Tratar as exceções adequadamente. Não deixe o backend "morrer". As exceções devem ser tratadas para garantir que a aplicação continue funcionando mesmo quando um erro ocorre.</p>

        <p><strong>Validação de Dados em Python:</strong> Em Python, usamos estruturas de seleção (condicionais) para validar dados e garantir que estejam corretos antes de processá-los. A validação é feita para garantir que os dados sejam do tipo correto (ex: número ou texto) antes de seguir para o processamento.</p>
        
        <p><strong>Fluxo de Trabalho:</strong></p>
        <ul>
            <li>1. Validar os dados recebidos;</li>
            <li>2. Tratar as exceções;</li>
            <li>3. Persistir os dados em um banco de dados (como SQLAlchemy ou SQLite).</li>
        </ul>
        <p><strong>Comportamento padrão:</strong> Se nenhum método for especificado na barra de endereço, o método padrão é GET.</p>

        <h3>Exemplo fornecido em sala</h3>
        <ul>
        <li>criar um formulário com os campos: nome, senha</li>
        <li>autenticar e retornar uma mensagem pra ver se está funcionando</li>
        <li>criar uma segunda rota que renderiza o formulário</li>
        <li>/autenticate -> vai pra tela depois que o usuário enviar</li>
        </ul>

        <h3>Exemplo de Código:</h3>
        <pre>
            @app.route('/authenticate', methods=['POST'])
            def authenticate():
                nome = request.form['nome']
                senha = request.form['senha']
                
                if nome == "admin" and senha == "1234":
                    return "Autenticação bem-sucedida!"
                else:
                    return "Nome de usuário ou senha incorretos."
        </pre>
        <p>Este código verifica as credenciais do usuário e retorna a resposta adequada.</p>
        <h2>Atividades</h2>
        <ul>
        <li>-> colocar os dados do usuário mocados para fazer essa validação para a próxima aula <-</li>
        <li>1. Fazer todas as *validações possiveis para garantiar que as informações foram enviadas corretamente pelo usuário;</li>
        <li>2. Tratar *exceções para evitar que seja exibida a mensagem de erro padrão;</li>
        <li>3. Garantir que o usuário seja redirecionado com a possibilidade de fazer a autenticação novamente quando um dos dados estiver incorreto;</li>
        <li>4. Limitar em duas tentativas de autenticação errada**;</li>
        <li>5. Alterar todos os retornos usando dados formatados em Json;</li>
        </ul>
        <h3>Observação</h3>
        <span>Todas as 5 atividades foram combinadas em uma única atividade.</span>
      </div>
    `
      break;
    case 'aula11':
      modalContent = `
      <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
        <div class="modal-section">
          <h2>1. Mini-blog Pessoal</h2>
          <h3>Objetivo da Atividade:</h3>
          <p>Criar uma aplicação simples para postar pequenos textos com data e hora.</p>
          <h3>Funcionalidades:</h3>
          <ul>
            <li>Formulário para adicionar novos posts.</li>
            <li>Lista de posts na página inicial, ordenados por data.</li>
            <li>Utilização de templates para formatar a página.</li>
          </ul>
          <h3>Dicas:</h3>
          <ul>
            <li>Utilizar uma lista em Python para armazenar os posts.</li>
            <li>Usar o módulo <code>datetime</code> para registrar a data e hora de cada post.</li>
            <li>Criar um template básico com HTML e CSS para estilizar a página.</li>
          </ul>
          <h3>Tempo:</h3>
          <p>30 minutos. Tempo não é longo, portanto, o foco deve ser em funcionalidades básicas.</p>
          <h3>Aprendizado:</h3>
          <p>O objetivo principal é praticar os conceitos aprendidos e explorar novas possibilidades com o Flask.</p>
          <h3>Ferramentas:</h3>
          <p>Recomenda-se utilizar um editor de código com suporte a Python e Flask, como o Visual Studio Code.</p>
          <h3>Restrições:</h3>
          <p><strong>Proibido usar Internet.</strong></p>
        </div>

        <div class="modal-section">
          <h2>2. Página de autenticação básica</h2>
          <h3>Objetivo da Atividade:</h3>
          <p>Criar uma aplicação simples para comparar se o usuário e a senha digitados estão corretos.</p>
          <h3>Funcionalidades:</h3>
          <ul>
            <li> Formulário para informar usuário e senha.</li>
            <li>Dicionário para armazenar o usuário e senha cadastrados.</li>
            <li>Utilização de templates para formatar a página.</li>
            <li>Retornar mensagens de sucesso ou falha na autenticação.</li>
          </ul>
          <h3>Dicas:</h3>
          <ul>
            <li>Utilizar lista para armazenar as tentativas de autenticação.</li>
            <li>Usar o módulo <code>datetime</code> para registrar a data e hora de login.</li>
            <li>Criar um template básico com HTML e CSS para estilizar a página.</li>
          </ul>
          <h3>Tempo:</h3>
          <p>30 minutos. Tempo não é longo, portanto, o foco deve ser em funcionalidades básicas.</p>
          <h3>Aprendizado:</h3>
          <p>O objetivo principal é praticar os conceitos aprendidos e explorar novas possibilidades com o Flask.</p>
          <h3>Ferramentas:</h3>
          <p>Recomenda-se utilizar um editor de código com suporte a Python e Flask, como o Visual Studio Code.</p>
          <h3>Restrições:</h3>
          <p><strong>Proibido usar Internet.</strong></p>
        </div>

        <div class="modal-section">
          <h2>3. Página de upload de fotos</h2>
          <h3>Objetivo da Atividade:</h3>
          <p>Criar uma aplicação simples para fazer upload de imagens.</p>
          <h3>Funcionalidades:</h3>
          <ul>
            <li> Formulário para escolher o arquivo a partir do computador do usuário.</li>
            <li>Armazenar os arquivos enviados pelos usuários em uma pasta.</li>
            <li>Utilização de templates para formatar a página.</li>
            <li>Retornar mensagens de sucesso ou falha na autenticação. Em caso de sucesso, deve-se retornar também o path de onde o arquivo foi armazenado no servidor.</li>
          </ul>
          <h3>Dicas:</h3>
          <ul>
            <li>Utilizar lista para armazenar os arquivos enviados.</li>
            <li>Usar o módulo <code>datetime</code> para registrar a data e hora do upload do arquivo</li>
            <li>Criar um template básico com HTML e CSS para estilizar a página.</li>
          </ul>
          <h3>Tempo:</h3>
          <p>30 minutos. Tempo não é longo, portanto, o foco deve ser em funcionalidades básicas.</p>
          <h3>Aprendizado:</h3>
          <p>O objetivo principal é praticar os conceitos aprendidos e explorar novas possibilidades com o Flask.</p>
          <h3>Ferramentas:</h3>
          <p>Recomenda-se utilizar um editor de código com suporte a Python e Flask, como o Visual Studio Code.</p>
          <h3>Restrições:</h3>
          <p><strong>Proibido usar Internet.</strong></p>
        </div>
      </div>
    `
      break;
    default:
      modalContent = `<div class="modal-content"><p>Conteúdo não encontrado!</p></div>`;
  }

  document.getElementById('myModal').innerHTML = modalContent;
  document.getElementById('myModal').style.display = 'block';
  document.getElementById('modal-background').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.getElementById('modal-background').style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == document.getElementById('modal-background')) {
    closeModal();
  }
}
