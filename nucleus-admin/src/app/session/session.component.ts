import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  public whoami: any;

  constructor(
    private Session: SessionService
  ) { }

  ngOnInit(): void {
    this.Session.whoami().subscribe((response) => {
      this.whoami = response.body;
    })
  }
}
