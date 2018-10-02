import { Component, OnInit } from '@angular/core';
import{ Mahasiswa } from '../shared/mahasiswa';
@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  daftarMahasiswa:Mahasiswa[] = [];
  NIM = ' ';
  Nama = ' ';
  Kelas=' ';
  mahasiswa;

  constructor() {}
  ngOnInit() {
  }
  tambahMahasiswa(){
    this.mahasiswa = new Mahasiswa (this.NIM,this.Nama, this.Kelas);
    this.daftarMahasiswa.push(this.mahasiswa);
    this.NIM= ' ';
    this.Nama= ' ';
    this.Kelas= ' ';
  }
}
