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

  saveNotes(){
    localStorage.setItem('notes', JSON.stringify(this.notePad.map((value) => {
      return value.seeNoteFull();
    })));
  }

	listNotes(note) {// load notes
		let message;
		let index;
		if (note == null) {
			//load all the notes
			this.notePad.forEach((thisNote) => {
				console.log("load all notes");
				message = thisNote.getNoteTitle();
				noteToHtml(message, index);
			});
		} else {
			index = this.notePad.length - 1;
			message = note.getNoteTitle();
			//load just this note
			console.log("load one note");
			noteToHtml(message, index);
		}
	}
}
