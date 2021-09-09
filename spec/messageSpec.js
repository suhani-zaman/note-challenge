document.addEventListener("DOMContentLoaded", function () {
  describe("Message class", () => {
    it("new message is created", () => {
      let message_one = "I'm a new note!";
      note = new Message(message_one);
      expect(note.seeNoteFull()).toEqual(message_one);
    });

    it("checks if the message is abbreviated to 20 chars", () => {
      let message = "I'm a very very long note that needs to be abbreviated!";
      note = new Message(message);
      let expected = "I'm a very very long";
      expect(note.getNoteTitle()).toEqual(expected);
    });

    it("checks if the message is not abbreviated ", () => {
      message = "I'm a short note";
      note = new Message(message);
      expected = "I'm a short note";
      expect(note.getNoteTitle()).toEqual(expected);
    });
  });
});
