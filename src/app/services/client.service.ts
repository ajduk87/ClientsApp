import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable };
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) { 
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
  }

  getClients(){
    return this.clients;
  }
}
