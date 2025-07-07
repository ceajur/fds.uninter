// =====  Script de interação  =====

// Elementos
const btn = document.getElementById('btnMensagem');
const divMsg = document.getElementById('mensagem');

// Manipulador de clique
btn.addEventListener('click', () => {
  divMsg.textContent = 'Bem‑vindo! Nunca é tarde para aprender algo novo e seguir seus sonhos.';
});
