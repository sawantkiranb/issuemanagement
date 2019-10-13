import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { IssueService } from 'src/app/services/issue.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = [
    'title',
    'responsible',
    'severity',
    'status',
    'actions'
  ];

  constructor(private service: IssueService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.service.getAll()
      .subscribe(response => {
        this.issues = response as Issue[];
        console.log(response);
      });
  }

  delete(id) {

    this.service.delete(id)
      .subscribe(response => {
        this.fetchIssues();
        this.snackBar.open("Issue removed successfully", "OK", {
          duration: 3000
        });
      })

  }

}
