import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evidencias',
  templateUrl: './evidencias.component.html',
  styleUrls: ['./evidencias.component.css']
})
export class EvidenciasComponent implements OnInit {
    nombre_profesor = "Camilo Franco Moya";
  constructor() { }

  ngOnInit(): void {
  }

}
