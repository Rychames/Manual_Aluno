const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário padrão
  const searchTerm = input.value.trim();
  if (searchTerm !== '') {
    window.find(searchTerm); // pesquisa a palavra no site
  }
});
