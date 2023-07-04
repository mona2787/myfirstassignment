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

  fillerNav =[
    {text: 'Dashboard',
     routerLink: '/'},
     {text: 'Add Details',
     routerLink: 'add'},
     {text: 'About',
     routerLink: 'about'},];
  constructor(){}
}