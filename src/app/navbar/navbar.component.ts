import { Component, OnInit } from '@angular/core';
import{ Mahasiswa } from '../shared/mahasiswa';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar = 'NAVBAR';
  home = 'HOME';
  master = 'MASTERDATA';
  constructor() { }

  ngOnInit() {
  }

}
