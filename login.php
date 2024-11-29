<?php
session_start();

$host = 'localhost';
$dbname = 'dblyra';
$username = 'root';
$password = '';
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email']) && isset($_POST['senha'])) {
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        $usuario = $stmt->fetch();

        if ($usuario && password_verify($senha, $usuario['senha'])) {
            $_SESSION['user_id'] = $usuario['id'];
            $_SESSION['user_nome'] = $usuario['nome'];

            header('Location: cliente.html');
            exit;
        } else {
            echo "Email ou senha incorretos!";
        }
    } else {
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
