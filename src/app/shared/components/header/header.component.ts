import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false

  constructor( private router: Router ) {    }

  ngOnInit(): void {
  }

  SideNavToggled(){
    this.menuStatus = !this.menuStatus
    this.sideNavToggled.emit(this.menuStatus)
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['accounts/login'])
  }

  username = localStorage.getItem('name')
}
