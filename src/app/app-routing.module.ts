import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';

const routes: Routes = [
  { path: 'create', component: CreateIssueComponent },
  { path: 'edit/:id', component: EditIssueComponent },
  { path: 'list', component: IssueListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
