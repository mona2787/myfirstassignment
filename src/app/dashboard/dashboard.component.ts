import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

//** @title Sidenav with configurable mode */
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent {
  mode = new FormControl('over');
  events: string[] = [];
  opened: boolean = true;

  fillerNav =['Dashboard','About','Team'];
  //shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(){}
}