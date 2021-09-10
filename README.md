# note-challenge
creating notes and saving it in the same page.

## **User Stories**
---

```
As a programmer		
I can see a list of my notes, where each note is abbreviated to the first 20 characters		
So I can find the one I want		
```

```		
As a programmer		
I can create a new note		
So I can record something I need to remember		
```

```		
As a programmer		
I can see the full text of an individual note on its own page	
So I can see all the information in the note				
```
```
As a programmer
I can use shortcodes like `:fire:` that get converted into emojis like 🔥
So I can record notes with fun little pictures

```

```
As a programmer
I can refresh the page and still see my notes
So I can remember what I took down
```

```
As a programmer
i want to delete unnecessary note that i have created
So i can get rid of note that are not valid anymore

```
```
As a programmer
i want to clear my note app 
So i have fresh single page note maker
```
# planning

		MVP		
Class Message		Class Note		  Test enviroment
Attributes:		    Attributes:		   Functions/matchers
 - message(string)	 - notepad = []    - collection of notes Objects		
				     - toEqual(val)
Functions:		    Functions:		   - notToEqual(val)
 - seeNoteFull()    - load full view 	 - createNote() - create and save a single note		
  of a single note		 - listNotes() - list all notes as 20 chars "titles"		 - toThrow(err) - error
 - getNoteTitle()    - get 20 chars 				
length abreviation 
of a single note	 loadNotes()                   - from local storage		
saveNotes() 
- to local storage		
				