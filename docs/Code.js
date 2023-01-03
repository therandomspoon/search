const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value;
  console.log(`Searching for: ${query}`);
  // Perform search here...
});
