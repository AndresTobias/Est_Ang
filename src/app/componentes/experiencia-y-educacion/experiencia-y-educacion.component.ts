import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  educacionlista:any;
  constructor(private datosporfolioeducacion:DatosService) { }

  ngOnInit(): void {
    this.datosporfolioeducacion.obtenerDatosEducacion().subscribe(data=>{
        console.log(data);this.educacionlista=data;})
  }

}
