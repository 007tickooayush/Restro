import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {
  alert = false;
  editRestro = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private router: ActivatedRoute, private restro: RestroService) {
  }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.restro.getContentRestro(this.router.snapshot.params.id)
      .subscribe((result) => {
        this.editRestro.reset(result);
      });
  }

  collection(): void {
    console.warn(this.editRestro.value);
    this.restro.updateRestro(this.router.snapshot.params.id, this.editRestro.value).subscribe((result) => {
      console.warn(result);
    });
    this.alert = true;
  }

  // tslint:disable:typedef
  closeAlert() {
    this.alert = false;
  }
}
