function expect(actual) {
	return {
		toEqual: function (expected) {
			if (actual === expected) {
				console.log("new note says hello");
			} else {
				console.log(
					`my note ${actual} isn't the same as your note ${expected}`
				);
			}
		},
	};
}
let message_one = "I'm a new note!";
note = new Message(message_one);
expect(note.seeNoteFull()).toEqual(message_one);

let message = "I'm a very very long note that needs to be abbreviated!";
note = new Message(message);
let expected = "I'm a very very long";
expect(note.getNoteTitle()).toEqual(expected);

message = "I'm a short note";
note = new Message(message);
expected = "I'm a short note";
expect(note.getNoteTitle()).toEqual(expected);
