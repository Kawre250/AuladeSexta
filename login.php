<?php
session_start();

// Configurações do banco de dados
$host = 'localhost';
$dbname = 'dblyra';
$username = 'root';
$password = '';
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Verificar se as variáveis 'email' e 'senha' estão definidas no POST
    if (isset($_POST['email']) && isset($_POST['senha'])) {
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        // Prepara a consulta para verificar o usuário no banco
        $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        $usuario = $stmt->fetch();

        // Verifica se o usuário existe e se a senha está correta
        if ($usuario && password_verify($senha, $usuario['senha'])) {
            // Cria as variáveis de sessão com os dados do usuário
            $_SESSION['user_id'] = $usuario['id'];
            $_SESSION['user_nome'] = $usuario['nome'];

            // Redireciona para a área do cliente
            header('Location: cliente.html');
            exit;
        } else {
            // Caso o login falhe
            echo "Email ou senha incorretos!";
        }
    } else {
        // Caso o formulário não tenha os dados necessários
        echo "Por favor, preencha todos os campos!";
    }
}
?>


<form action="login.php" method="POST">
  <label for="email">E-mail</label>
  <input type="email" id="email" name="email" required>

  <label for="senha">Senha</label>
  <input type="password" id="senha" name="senha" required>

  <button type="submit">Acessar</button>
</form>
