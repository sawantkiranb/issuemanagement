import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from 'src/app/services/issue.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {

  createForm: FormGroup;

  constructor(private service: IssueService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: [''],
      description: [''],
      severity: ['']
    });
  }

  submit() {
    const title = this.createForm.value.title;
    const responsible = this.createForm.value.responsible;
    const description = this.createForm.value.description;
    const severity = this.createForm.value.severity;

    this.service.create(title, responsible, description, severity, 'Open')
      .subscribe(() => {
        this.snackBar.open('Issue added successfully', 'OK', {
          duration: 3000
        });
        this.router.navigate(['/list']);
      })

  }

}
