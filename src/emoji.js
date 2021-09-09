class Emoji{
  getText(text, classCall){
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
        let noteClass = new Note();
        noteClass.createNote(response.emojified_text);
    })


    
  }
}

// https://makers-emojify.herokuapp.com