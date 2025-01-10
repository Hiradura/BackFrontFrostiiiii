import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private bank = "http://localhost:3000/name"

  constructor(private http:HttpClient) { }
  getDatas(){
    return this.http.get(this.bank)
  }
}
