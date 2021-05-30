const form = document.querySelector('form');

const inputName = document.querySelector('#name');
const inputURL = document.querySelector('#url');
const inputDescricao = document.querySelector('#descricao');

const containerCards = document.querySelector('.cards');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const card = document.createElement('div');
  card.classList.add('card');

  const imagem = document.createElement('img');
  imagem.setAttribute('src', inputURL.value);
  imagem.classList.add('card-img-top');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = inputName.value;

  const descricao = document.createElement('div');
  descricao.classList.add('card-text');
  descricao.textContent = inputDescricao.value;

  card.append(imagem);
  card.append(cardBody);
  cardBody.append(title);
  cardBody.append(descricao);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.classList.add('btn-danger');
  card.append(deleteButton);

  deleteButton.addEventListener('click', () => {
    card.remove();
  });

  containerCards.append(card);

  inputName.value = '';
  inputDescricao.value = '';
  inputURL.value = '';
});
