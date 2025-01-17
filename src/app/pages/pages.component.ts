
import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service'; 

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  datas: any[] = [];  
  cols: string[] = ['ID', 'Name', 'Value', 'Category', 'Timestamp'];  
name: any;

  constructor(private base: BaseService) {}

  ngOnInit(): void {

    this.base.getDatas().subscribe(
      (res) => {
        this.name = res; 
      },
      (error) => {
        console.error('Hiba történt az adatok betöltésekor!', error);
      }
    );
  }
}
