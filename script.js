// Dados dos motores gráficos para alternância dinâmica
const engineData = {
    renderware: {
        title: "RenderWare Engine (Até 2006)",
        description: "Mapeou os primeiros passos tridimensionais primordiais da franquia. As animações eram fixas e predefinidas, fazendo com que colisões e trajetórias de bola fossem muito parecidas, robóticas e totalmente programadas via código estático."
    },
    ignite: {
        title: "Ignite Engine (2013 - 2016)",
        description: "Criado especificamente para a chegada do PlayStation 4 e Xbox One. Trouxe inteligência artificial muito mais refinada para os jogadores de linha se posicionarem de forma realista, torcidas totalmente em 3D e deformação física real no gramado."
    },
    frostbite: {
        title: "Frostbite Engine (2016 - Presente)",
        description: "O motor migrado da famosa franquia de tiro Battlefield. Permitiu a introdução de iluminação cinematográfica dinâmica realista, renderização avançada de suor e tecidos de uniformes, além de viabilizar a criação do modo de história cinematográfico 'A Jornada'."
    },
    hypermotion: {
        title: "Tecnologia HyperMotion (Atualidade)",
        description: "Usa captura avançada de partidas reais 11v11 com trajes Xsens e algoritmos de aprendizado de máquina (Machine Learning). O jogo aprende padrões reais do futebol profissional para gerar mais de 6.000 animações fluidas em tempo real direto no console."
    }
};

// Seleção de elementos do DOM
const tabButtons = document.querySelectorAll('.tab-btn');
const displayBox = document.getElementById('engine-content');

// Adiciona evento de clique para cada aba
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe ativa de todos os botões
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona classe ativa no botão clicado
        button.classList.add('active');
        
        // Captura a chave do motor selecionado através do atributo 'data-engine'
        const selectedEngine = button.getAttribute('data-engine');
        
        // Inicia o efeito fade-out ocultando o texto anterior
        displayBox.style.opacity = 0;
        
        // Espera o fade-out completar (200ms) para trocar o conteúdo e aplicar o fade-in
        setTimeout(() => {
            displayBox.innerHTML = `
                <h3>${engineData[selectedEngine].title}</h3>
                <p>${engineData[selectedEngine].description}</p>
            `;
            displayBox.style.opacity = 1;
        }, 200);
    });
});
