<?php
session_start();


if (!isset($_SESSION['user_id'])) {
    header('Location: login.php'); 
    exit;
}
?>

<h1>Bem-vindo, <?php echo $_SESSION['user_nome']; ?>!</h1>
<p>Esta é a página inicial, onde você pode acessar o conteúdo protegido.</p>
