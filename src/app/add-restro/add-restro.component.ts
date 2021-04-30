import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {

  addRestro = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  alert = false;

  constructor(private restro: RestroService) {

  }

  ngOnInit(): void {
  }

  collectRestro(): void {
    // console.warn(this.addRestro.value);
    this.restro.saveRestro(this.addRestro.value).subscribe((result) => {
      console.warn('resulting data', result);
    });
    this.alert = true;
    this.addRestro.reset({}); // for clearing the form
  }
  closeAlert(): void{
    this.alert = false;
  }

}
