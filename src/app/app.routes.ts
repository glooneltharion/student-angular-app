import { Routes } from '@angular/router';
import { StudentsComponent} from './components/students/students.component';
import { StudentEditComponent } from './components/students-edit/students-edit.component';


export const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'edit/:id', component: StudentEditComponent }
];
