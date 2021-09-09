document.addEventListener('DOMContentLoaded', function(){
describe ("emoji API functionality", () => {

    it ("check return promise from https://makers-emojify.herokuapp.com", () => {
       let emoji = new Emoji('https://makers-emojify.herokuapp.com');
       let message = 'some and some more';
       expect(() => {emoji.getText(message)['text']}).toEqual(message);
    });
});
});