import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit  {

   @Input('user') user:User;

  constructor() {
  }

  ngOnInit() {
    // user = {
    //   name: this.user.name,
    //   title: this.user.designation,
    //   phone: this.user.phone
    // };
  }

  

}
