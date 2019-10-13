import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {

  updateForm: FormGroup;
  issue: any = {};
  id: string = '';

  constructor(
    private service: IssueService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {

    this.createForm();

  }

  private createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      responsible: [''],
      description: [''],
      severity: [''],
      status: ['']
    });
  }

  ngOnInit() {

    this.route.params
      .subscribe(response => {
        this.id = response.id;

        this.service.get(this.id)
          .subscribe(response => {

            console.log(response);

            this.issue = response;

            this.updateForm.controls.title.setValue(this.issue.title);
            this.updateForm.controls.responsible.setValue(this.issue.responsible);
            this.updateForm.controls.description.setValue(this.issue.description);
            this.updateForm.controls.severity.setValue(this.issue.severity);
            this.updateForm.controls.status.setValue(this.issue.status);

          });
      });
  }

  submit() {

    const title = this.updateForm.value.title;
    const responsible = this.updateForm.value.responsible;
    const description = this.updateForm.value.description;
    const severity = this.updateForm.value.severity;
    const status = this.updateForm.value.status;

    this.service.update(this.id, title, responsible, description, severity, status)
      .subscribe(response => {
        this.snackBar.open('Issue updated successfully', 'OK', {
          duration: 3000
        });
        this.router.navigate(['/list']);
      })
  }
}
