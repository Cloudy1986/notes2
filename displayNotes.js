const displayNotes = (data) => {
  data.forEach((item) => {
    const note = document.createElement("p");
      note.innerText = `${item.title}: ${item.content}`;
      document.body.append(note);
  });
};

module.exports = displayNotes;
