

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual === expected) {
        console.log("new note says hello")
      } else { 
        console.log(`my note ${actual} isn't the same as your note ${expected}`)
      }
    }
  }
}
note = new Message
message = "I'm a new note!"
expect(note.seeNoteFull(message)).toEqual(message)