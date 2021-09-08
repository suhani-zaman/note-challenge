class Note{
      constructor(){
        this.notePad = [];
      }

      createNote(message){
        if(message.replace(/ /g, '') === "") return;
        let note = new Message(message.trim());
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

