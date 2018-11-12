import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Narendra';
  user:User;
    constructor(){
    this.user = new User();
    this.user.name = 'Naren';
    this.user.designation = 'Lead',
    this.user.phone = [
      '123-123-123',
      '456-456-567'
    ];
  }
  
}
