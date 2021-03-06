import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
miPorfolio:any;
  constructor(private datosporfolio:DatosService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDatos().subscribe(data =>{
      console.log(data);this.miPorfolio=data;});
  }

}
