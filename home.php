<?php
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php'); // Redireciona para a página de login se não estiver logado
    exit;
}
?>

<h1>Bem-vindo, <?php echo $_SESSION['user_nome']; ?>!</h1>
<p>Esta é a página inicial, onde você pode acessar o conteúdo protegido.</p>
