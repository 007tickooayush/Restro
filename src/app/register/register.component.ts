/* tslint:disable:no-trailing-whitespace typedef */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert = false;
  form = document.querySelectorAll('.needs-validation');

  registerUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private restro: RestroService) {
  }

  ngOnInit(): void {
  }

  collectUser() {
    console.warn(this.registerUser.value);
    this.restro.registerUser(this.registerUser.value).subscribe((res) => {
      console.warn(res);
    });
  }

  closeAlert(): void{
    this.alert = false;
  }


}
