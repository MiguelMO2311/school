import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { MarksComponent } from './pages/marks/marks.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Students', component: StudentsComponent },
    { path: 'Marks', component: MarksComponent },
      
];
