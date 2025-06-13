//Js login 
// Script para validação de login
document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const usuario = document.getElementById('username').value.trim();
    const senha = document.getElementById('password').value.trim();

    // --- VERIFICAÇÕES DE CAMPOS OBRIGATÓRIOS ---

    // Verifica se o campo usuário está vazio
    if (usuario === '') {
        alert('Campo Usuário é obrigatório');
        return; // Para a execução da função
    }

    // Verifica se o campo senha está vazio
    if (senha === '') {
        alert('Campo Senha é obrigatório');
        return; // Para a execução da função
    }

    // --- VALIDAÇÃO DE CREDENCIAIS ---
    const usuarioCorreto = 'admin';
    const senhaCorreta = '12345';

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Se ambos forem corretos, exibe a mensagem de sucesso.
        alert('Login foi realizado com sucesso');
        // Opcional: Redirecionar para uma página de boas-vindas
             window.location.href = 'index.html'; 
    } else {
        // Se o usuário ou a senha estiverem incorretos.
        alert('Usuário ou senha inválidos.');
    }
});