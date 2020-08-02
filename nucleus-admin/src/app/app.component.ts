import {Component, OnInit} from '@angular/core';
import {SessionService} from './services/session.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];
  constructor(
    private Session: SessionService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Admin',
        items: [{
          label: 'Users',
          routerLink: ['users']
        },
        {
          label: 'Companies',
          routerLink: ['companies']
        }
        ]
      },
      {
        label: 'Session',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-trash',
            routerLink: ['login']
          },
          {
            label: 'Who Am I?',
            icon: 'pi pi-fw pi-user',
            routerLink: ['session']
          }
        ]
      }
    ];
  }


}
