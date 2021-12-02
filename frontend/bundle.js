(() => {
  // index.js
  var inputElTitle = document.querySelector("#user_input_note_title");
  var inputElContent = document.querySelector("#user_input_note_content");
  var buttonEl = document.querySelector("#add-note-button");
  buttonEl.addEventListener("click", () => {
    let userTitle = inputElTitle.value;
    let userContent = inputElContent.value;
    const data = {
      title: userTitle,
      content: userContent
    };
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());
  });
})();
