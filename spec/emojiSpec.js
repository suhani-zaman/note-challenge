document.addEventListener('DOMContentLoaded', function(){
describe ("emoji API functionality from https://makers-emojify.herokuapp.com", () => {

    it ("check return promise, without emojies", () => {
       let noteTest = new Note();
       let message = 'some and some more';
       noteTest.emoji.getText(message);
       setTimeout(() => {
         expect(noteTest.emojiResponse.emojified_text).toEqual(message);
       }, 2000);
    });

    it ("check it will correctly render a emoji", () => {
        noteTest = new Note();
        message = 'some and :smile:some more';
        noteTest.emoji.getText(message);
        setTimeout(() => {
          expect(noteTest.emojiResponse.emojified_text).notToEqual(message);
          localStorage.setItem('notes', JSON.stringify([]));
        }, 2000);
     });
});
});