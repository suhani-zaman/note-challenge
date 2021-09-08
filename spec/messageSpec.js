document.addEventListener("DOMContentLoaded", function () {
  describe("Message class", () => {
    it("I'm a new note!", () => {
      let message_one = "I'm a new note!";
      note = new Message(message_one);
      expect(note.seeNoteFull()).toEqual(message_one);
    });

    it("I'm a very very long note that needs to be abbreviated!", () => {
      let message = "I'm a very very long note that needs to be abbreviated!";
      note = new Message(message);
      let expected = "I'm a very very long";
      expect(note.getNoteTitle()).toEqual(expected);
    });

    it("I'm a short note", () => {
      message = "I'm a short note";
      note = new Message(message);
      expected = "I'm a short note";
      expect(note.getNoteTitle()).toEqual(expected);
    });
  });
});
