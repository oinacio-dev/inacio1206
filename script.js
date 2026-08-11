// Função para alternar entre as abas da seção de Dicas
function openTab(event, tabName) {
  // Oculta todos os conteúdos das abas
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Remove a classe 'active' de todos os botões
  const tabButtons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Exibe a aba atual e adiciona a classe 'active' ao botão clicado
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}

// Efeito de transição suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
