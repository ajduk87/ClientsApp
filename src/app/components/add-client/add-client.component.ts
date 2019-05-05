import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }
  disableBalanceOnAdd:boolean = false;
  
  constructor(
    private flashMessageService:FlashMessagesService,
    public router:Router,
    public clientService:ClientService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance = 0;
    }
    if(!valid){
      this.flashMessageService.show('Morate uneti sva polja da bi ste nastavili dalje!', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['add-client']);
    } else {
      // Add new client
      this.clientService.newClient(value);
      this.flashMessageService.show('New client added', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }

}
