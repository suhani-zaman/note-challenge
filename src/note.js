class Note {
	constructor() {
		this.notePad = [];
    this.loadNotes();
	}

	createNote(message, doNotCreateNote) {
		if (message.replace(/ /g, "") === "") return;
		let note = new Message(message.trim());
		this.notePad.push(note);
		this.listNotes(note);
    if(doNotCreateNote == null){ this.saveNotes(); }
	}

  loadNotes(){
    let prevNotes = localStorage.getItem('notes');
    if(prevNotes == null) return;
    JSON.parse(prevNotes).forEach((note) => {
      this.createNote(note, 'doNotSaveLocalStorage');
    })
  }

  clearAllNotes(){
    if(!confirm('Pretty sure you want to delete all notes?')) return;
    this.notePad = [];
    localStorage.removeItem('notes');
    clearMainView();
    document.querySelectorAll('.note').forEach((noteNode) => document.body.removeChild(noteNode));
  }

  saveNotes(){
    localStorage.setItem('notes', JSON.stringify(this.notePad.map((value) => {
      return value.seeNoteFull();
    })));
  }

	listNotes(note) {
			let index = this.notePad.length - 1;
			let message = note.getNoteTitle();
			noteToHtml(message, index);
	}
}
