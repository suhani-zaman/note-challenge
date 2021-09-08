window.onload = function () {
	noteClass = new Note();
	document.querySelector("#addNote").addEventListener("click", () => {
		let message = document.querySelector("#noteValue").value;
		document.querySelector("#noteValue").value = "";
		noteClass.createNote(message);
	});
};

function noteToHtml(message, index) {
	div = document.createElement("div");
	div.id = 'a' + index;
	div.innerHTML = message;
	div.setAttribute('onclick', `noteToMainView(this, ${index})`)
	document.body.insertAdjacentElement("beforeend", div);
}

function noteToMainView(caller, index) {
  let prevView = document.querySelector('#fullId');
  if(prevView !== null) prevView.parentNode.removeChild(prevView);
  let fullView = document.createElement('h3');
  fullView.setAttribute('id', 'fullId');
  fullView.innerHTML = `${noteClass.notePad[index].seeNoteFull()}`;
  caller.insertAdjacentElement('beforebegin',fullView);
}
