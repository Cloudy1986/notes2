// Set variables for the html elements on index.html - the two input fields and the button
let inputElTitle = document.querySelector('#user_input_note_title');
let inputElContent = document.querySelector('#user_input_note_content');
let buttonEl = document.querySelector('#add-note-button');

// When the button is clicked, do this...
buttonEl.addEventListener('click', () => {
  let userTitle = inputElTitle.value; // set a variable for the title
  let userContent = inputElContent.value; // set a variable for the content
  // Create a data object containing the title and content
  const data = {
    title: userTitle,
    content: userContent
  };
  // Add the data object to the array in the server
  fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
});
