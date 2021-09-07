class Message {
	constructor(message) {
		this.note = message;
	}

	seeNoteFull() {
		return this.note;
	}

	getNoteTitle() {
		return this.note.slice(0, 20);
	}
}
