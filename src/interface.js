window.onload = function(){
    noteClass = new Note();
    document.querySelector('#addNote').addEventListener('click',() => {
      let message = document.querySelector('#noteValue').value;
      document.querySelector('#noteValue').value = "";
      noteClass.createNote(message);
    })
}

function noteToHtml(message){
    div = document.createElement('div');
    div.innerHTML = message;
    //div.setAttribute('onclick', )
    document.body.insertAdjacentElement('beforeend', div);
}

function noteToMainView(message){

}
