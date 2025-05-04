import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BugReport{
  id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: string;
}

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private apiUrl = 'http://localhost:5127/api/bugreports';

  constructor(private http: HttpClient) { }

  getBugs(): Observable<BugReport[]> {
    return this.http.get<BugReport[]>(this.apiUrl);
  }
}
