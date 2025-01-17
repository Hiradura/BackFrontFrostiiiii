import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  getNames() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/name';

  constructor(private http: HttpClient) {}
  getDatas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  
  }
}
