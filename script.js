// Selecionar elementos do DOM
const adicionarBotao = document.querySelector('.adicionar-botao');
const limparBotao = document.querySelector('.cancelar-botao');
const imagemInput = document.getElementById('imagem-input');
const nomeInput = document.getElementById('nome-input');
const valorInput = document.getElementById('valor-input');
const productContainer = document.querySelector('.product-container');

// Função para criar um novo card de produto
function criarProduto(imagem, nome, valor) {
    // Criar o elemento card
    const card = document.createElement('div');
    card.classList.add('card');

    // Inserir conteúdo no card
    card.innerHTML = `
        <img src="${imagem}" alt="${nome}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${nome}</h3>
            <p class="product-price">R$ ${valor}</p>
        </div>
        <button class="delete-button">🗑️</button>
    `;

    // Adicionar funcionalidade ao botão de deletar
    const deleteButton = card.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        card.remove(); // Remove o card da lista
    });

    // Adicionar o card ao container
    productContainer.appendChild(card);
}

// Evento para adicionar um produto
adicionarBotao.addEventListener('click', () => {
    const imagem = imagemInput.value.trim();
    const nome = nomeInput.value.trim();
    const valor = valorInput.value.trim();

    // Validar se os campos estão preenchidos
    if (!imagem || !nome || !valor) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Criar e adicionar o novo produto
    criarProduto(imagem, nome, valor);

    // Limpar os campos do formulário
    imagemInput.value = '';
    nomeInput.value = '';
    valorInput.value = '';
});

// Evento para limpar os campos
limparBotao.addEventListener('click', () => {
    imagemInput.value = '';
    nomeInput.value = '';
    valorInput.value = '';
});
