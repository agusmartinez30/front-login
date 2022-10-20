import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  @Input() sideNavStatus: boolean = false

  list = [
    { number: '1', name: 'principal', icon: 'fa-regular fa-compass' },
    { number: '2', name: 'reservas', icon: 'fa-regular fa-calendar-plus' },
    { number: '3', name: 'cobros', icon: '  fa-solid fa-money-check-dollar ' },
    { number: '4', name: 'clientes', icon: ' fa-regular fa-address-card ' },
    { number: '5', name: 'inmuebles', icon: ' fa-regular fa-building ' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
