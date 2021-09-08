class Note {
	constructor() {
		this.notePad = [];
	}

	createNote(message) {
		if (message.replace(/ /g, "") === "") return;
		let note = new Message(message.trim());
		this.notePad.push(note);
		this.listNotes(note);
	}

	listNotes(note) {
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
