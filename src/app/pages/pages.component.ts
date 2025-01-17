
import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service'; 
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  names: any[] = [];  
  cols: string[] = ['ID', 'Name', 'Capital', 'Population', 'Area', 'Flag'];  
name: any;

feliratkozas!: Subscription


  constructor(private base: BaseService) {}

//   ngOnInit(): void {

//     this.base.getDatas().subscribe(
//       (res) => {
//         this.name = res; 
//       },
//       (error) => {
//         console.error('Hiba történt az adatok betöltésekor!', error);
//       }
//     );
//   }
// }
ngOnInit(): void{
  this.getDatas()
}


getDatas() : void{

  this.feliratkozas = this.base.getDatas().subscribe({
    next:(res:any)=>{
      this.name = res
    },
    error: (err: HttpErrorResponse) => {
      console.log(err)
    }
  })


}


}

