import { Routes } from '@angular/router';
import { BugListComponent } from './components/bug-list/bug-list.component';
import { BugCreateComponent } from './components/bug-create/bug-create.component';

export const routes: Routes = [
    { path: '', redirectTo: 'bug-list', pathMatch: 'full'},
    { path: 'bug-list', component: BugListComponent},
    { path: 'bug-create', component: BugCreateComponent}
];
