import { Component } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
notes:Note[] =new Array<Note>();
constructor(private notesservice:NotesService){}
ngOnInit(){
 this.notes= this.notesservice.getAll();
}
}
