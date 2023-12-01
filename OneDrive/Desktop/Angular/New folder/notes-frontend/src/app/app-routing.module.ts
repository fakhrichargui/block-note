import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './page/notes-list/notes-list.component';
import { MainlayoutComponent } from './page/mainlayout/mainlayout.component';
import { NoteDetailsComponent } from './page/note-details/note-details.component';

const routes: Routes = [
  { path: '', component:MainlayoutComponent, children: [
    { path: '', component: NotesListComponent },
    {path:':id',component:NoteDetailsComponent},
    
  ] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
