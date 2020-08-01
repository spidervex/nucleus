import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {Router} from '@angular/router';

import * as debug from 'debug';
const debugLog = debug('login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any[];
  selectedUser: any;

  constructor(
    private Session: SessionService,
    private router: Router
  ) {
    this.users = [
      {name: 'Super Admin', email: 'supermike@spidervex.com'},
      {name: 'Admin', email: 'admin@spidervex.com'},
      {name: 'User', email: 'user@spidervex.com'}
    ];
  }

  ngOnInit(): void {
  }

  public go(): void {
    debugLog(this.selectedUser);

    // this.Session.login(this.selectedUser.email).subscribe((response) => {
    //   debugLog(response);
    //   const token = response.body.token;
      // this.Session.setToken(token);
      this.router.navigate(['session']);
    // });
  }
}
