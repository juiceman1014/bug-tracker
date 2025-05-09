import { Routes } from '@angular/router';
import { BugListComponent } from './components/bug-list/bug-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'bug-list', pathMatch: 'full'},
    { path: 'bug-list', component: BugListComponent},
];
