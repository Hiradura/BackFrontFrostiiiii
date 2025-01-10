import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
Pages:any=[]

constructor(private base:BaseService){
  this.base.getDatas().subscribe(
  (res)=>this.Pages=res)
}
}
