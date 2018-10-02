import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  //styleUrls: ['./tugas3.component.css']
  styles:[`
  .online {
      color:  white;
  }
`]
})
export class Tugas3Component implements OnInit {
  allowNewServer = false;
  serverCreationStatus = ' ';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  showPar = false;
  array = [];

  constructor() { }

  ngOnInit() {
  }

  onCreationStatus(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'POLITEKNIK NEGERI MALANG';
    this.array.push(this.array.length+1);
  }

}
