/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {
  collection: any = [];
  constructor(public restro: RestroService) { }


  ngOnInit(): void {
    this.restro.getList().subscribe((result) =>  {
      this.collection = result;
      console.log(result);
    });
  }

}
