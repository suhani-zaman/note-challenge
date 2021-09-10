class Emoji{
  constructor(noteClass){
      this.noteClass = noteClass;
  }

  getText(text){ 
      text = text.replace(/((?![ ]).){1,1}(:((?![ :]).)+:)/g, '$1 $2');
      text = text.replace(/(:((?![ :]).)+:)((?![ ]).){1,1}/g, '$1 $2');
      // :{: }:
    let formData = new FormData();
    let url = encodeURI('https://makers-emojify.herokuapp.com/');
    fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body:'{"text": "' + text + '"}'
    }).then((response) => response.json())
    .then((response) => {
        this.noteClass.emojiResponse = response;
        this.noteClass.createNote(response.emojified_text);
    })



  }
}

class EmojiSafe{
    getText(text, classCall){ (() => {
        text = text.replace(/((?![ ]).){1,1}(:((?![ :]).)+:)/g, '$1 $2');
        text = text.replace(/(:((?![ :]).)+:)((?![ ]).){1,1}/g, '$1 $2');
        // :{: }:
      let formData = new FormData();
      let url = encodeURI('https://makers-emojify.herokuapp.com/');
      fetch(url, {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body:'{"text": "' + text + '"}'
      }).then((response) => response.json())
      .then((response) => {
          //const classCall = new Note();
          classCall.createNote(response.emojified_text);
      })
  
  
     })(classCall);
    }
  }

// https://makers-emojify.herokuapp.com