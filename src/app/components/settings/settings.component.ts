import { Component, OnInit } from '@angular/core';
import { SettingsService} from '../../services/settings.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    public settingsService:SettingsService,
    public flashMessages:FlashMessagesService,
    public router:Router
  ) { }

  ngOnInit() {
  }

}
