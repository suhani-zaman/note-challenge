

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

expect(seeNoteFull(message)).toEqual(message)