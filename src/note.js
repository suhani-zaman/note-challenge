class Note {
	constructor() {
		this.notePad = [];
    this.loadNotes();
	}

	createNote(message, saveMessage) {   
		if (message.replace(/ /g, "") === "") return;  //note with just space can't be saved
		let note = new Message(message);      
		this.notePad.push(note);
		this.listNotes(note);
    if(saveMessage == null){ this.saveNotes(); }  // "==" value type check 
	}

  loadNotes(){
    let prevNotes = localStorage.getItem('notes');
    if(prevNotes == null) return;
    JSON.parse(prevNotes).forEach((message) => {
        this.createNote(message, 'doNotSaveLocalStorage');
    })
  }

  clearAllNotes(){
    if(!confirm('Sure you want to delete all notes?')) return;
    this.notePad = [];
    localStorage.removeItem('notes');
    clearMainView();
    document.querySelectorAll('.note').forEach((noteNode) => document.body.removeChild(noteNode));
  }

  deleteNote(index, delButton){
    if(!confirm('Sure you want to delete this note?')) return;
    this.notePad[index] = '';
    this.saveNotes();
    document.body.removeChild(delButton.parentElement.nextElementSibling);
    clearMainView();
  }

  saveNotes(){
    localStorage.setItem('notes', JSON.stringify(this
      .notePad.filter((value) => { return value != ''; })
      .map((value) => {
      return value.seeNoteFull();
      })));
  }

	listNotes(note) {
			let index = this.notePad.length - 1;
			let message = note.getNoteTitle();
			noteToHtml(message, index);
	}
}
