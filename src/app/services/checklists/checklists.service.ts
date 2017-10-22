import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { ModelChecklist } from '../../models/model-checklist';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChecklistsService {
  private baseUrl = 'api/v1/checklists';

  private get headers() {
    return new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.token}`
    });
  }

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  all() {
    return this.http.get(this.baseUrl, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as ModelChecklist, this.handleError);
  }

  delete(checklist: ModelChecklist) {
    return this.http.delete(`${this.baseUrl}/${checklist.id}`, {headers: this.headers})
      .toPromise()
      .then(res => checklist, this.handleError);
  }

  create(checklist: ModelChecklist) {
    return this.http.put(`${this.baseUrl}/create`, JSON.stringify(checklist), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as ModelChecklist, this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    if (error && error._body) {
      return Promise.reject(JSON.parse(error._body));
    }

    return Promise.reject(error);
  }
}
