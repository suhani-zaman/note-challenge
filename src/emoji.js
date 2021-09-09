class Emoji{
  getText(text, classCall){ (() => {
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