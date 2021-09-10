document.addEventListener('DOMContentLoaded', function(){
describe("Note class", () => {
  
  it("list of all the notes", () => {
    let note = new Note();
    message = note.createNote("Birthday list:");
    storage = JSON.parse(localStorage.getItem('notes'));
    expect(storage.indexOf("Birthday list:") >= 0).toEqual(true);
  })

  // it("some and some new", () => {
    
  //   expect(1).toEqual(1);
  // })



});
})