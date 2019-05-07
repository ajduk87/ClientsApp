import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings:Settings = {
    allowRegistration:true,
    disableBalanceOnAdd:true,
    disableBalanceOnEdit:true
  }
  constructor() { }

  getSettings(){
    return this.settings;
  }
}
