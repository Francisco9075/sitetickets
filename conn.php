<?php
$host = '188.245.212.195';
$usuario = 'makeitreal_tickets';
$senha = '+4NH{5r910FQ';
$nome_banco = 'makeitreal_tickets';

$connection = new mysqli($host, $usuario, $senha, $nome_banco);

if ($connection->connect_error) {
    die("Erro na conexão: " . $connection->connect_error);
}

?>