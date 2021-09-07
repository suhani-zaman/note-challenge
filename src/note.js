class Note{
      constructor(){
        this.notePad = [];
      }

      createNote(message){
        let note = new Message(message);
        this.notePad.push(note);
        this.listNotes(note);
      }

      listNotes(note){
        let message;
        if(note ==null){
            //load all the notes
            this.notePad.forEach((thisNote) => {
              message = thisNote.getNoteTitle();
              noteToHtml(message);
            })
        }else{
            message = note.getNoteTitle();
            //load just this note
            noteToHtml(message);
        }
      }


  }

