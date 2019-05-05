import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList , AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: AngularFireList<any[]>;
  client: AngularFireObject<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
  }

  getClients(){
    return this.clients;
  }
  
  newClient(client:Client){
    this.clients.push(client);
  }

  getClient(id:string){
   this.client = this.af.object('/clients/'+id) as AngularFireObject<Client>;
   return this.client;
  }

  updateClient(id:string, client:Client){
    return this.clients.update(id, client);
  }

  deleteClient(id:string){
    return this.clients.remove(id);
  }

}
