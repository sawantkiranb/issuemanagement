import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class IssueService {
  constructor(private http: HttpClient) { }

  baseURI = 'https://powerful-ravine-33821.herokuapp.com';

  getAll() {
    return this.http.get(`${this.baseURI}/issues`);
  }

  get(id: string) {
    return this.http.get(`${this.baseURI}/issues/${id}`);
  }

  create(title: string, responsible: string, description: string, severity: string, status: string) {

    const issueToSave = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    }

    console.log(issueToSave);


    return this.http.post(`${this.baseURI}/issues/add`, issueToSave);
  }

  update(id: string, title: String, responsible: String, description: String, severity: String, status: String) {
    const issueToUpdate = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    }

    return this.http.post(`${this.baseURI}/issues/update/${id}`, issueToUpdate);

  }

  delete(id) {
    return this.http.delete(`${this.baseURI}/issues/delete/${id}`);
  }

}
