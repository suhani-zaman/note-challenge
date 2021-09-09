window.onload = function () {
	noteClass = new Note();
	document.querySelector("#addNote").addEventListener("click", () => {
		let message = document.querySelector("#noteValue").value;
		document.querySelector("#noteValue").value = "";
		noteClass.createNote(message);
	});
  document.querySelector('#clearAllNotes').addEventListener("click",() => {
    noteClass.clearAllNotes();
  })
};

function noteToHtml(message, index) {
	div = document.createElement("div");
	div.textContent = message;
  div.className = 'note';
	div.setAttribute('onclick', `noteToMainView(this, ${index})`)
	document.body.insertAdjacentElement("beforeend", div);
}

function noteToMainView(caller, index) {
  clearMainView();
  let fullView = document.createElement('h3');
  fullView.setAttribute('id', 'fullId');
  fullView.textContent = `${noteClass.notePad[index].seeNoteFull()}`;
  fullView.appendChild(createDelButton(index));
  caller.insertAdjacentElement('beforebegin',fullView);
}

function clearMainView(){
  let prevView = document.querySelector('#fullId');
  if(prevView !== null) prevView.parentNode.removeChild(prevView);
}

function createDelButton(index){
  let delButton = document.createElement('input');
  Object.assign(delButton, {
    className:'button red round top_14',
    value: 'Delete note',
    type: 'button'
  })
  delButton.setAttribute('onclick', `noteClass.deleteNote(${index}, this)`);
  return delButton;
}
