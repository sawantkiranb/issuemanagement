import { NgModule } from '@angular/core';
import { MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatIconModule, MatDividerModule, MatTableModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { HttpClientModule } from '@angular/common/http';
import { IssueService } from './services/issue.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    CreateIssueComponent,
    EditIssueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
