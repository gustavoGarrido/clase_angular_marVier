import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-enviar-imagenes',
  templateUrl: './enviar-imagenes.component.html',
  styleUrls: ['./enviar-imagenes.component.css']
})
export class EnviarImagenesComponent implements OnInit {

  file:any
  fileName:string ="";

  constructor(public fileService:FileService) { }

  private validarFile(event:any):boolean{
    const maxSize = 500000
    this.file = event.target.files
    this.fileName = event.target.files[0].name

    if(this.file.length < 0){
      console.log("No se adjunto ninguna imagen")
      this.file = false
      this.fileName = "Sin imagen adjunta"
      return false
    }

    if(this.file[0].size > maxSize){
      console.log("ha superado el tamaño maximo permitido")
      this.file = false
      this.fileName = "Imagen invalida"
      return false
    }

    if(this.file[0].type != 'image/jpeg'){
      console.log("El formato cargado no es aceptado")
      this.file = false
      this.fileName = "Imagen invalida"
      return false
    }

    return true
  }

  onFileChange(event:any){
    
   const validacion= this.validarFile(event);


  if(validacion){
    let file = new FormData()
    file.append('imag', this.file[0], this.file[0].name)
    this.fileService.enviarImagen(file).subscribe(res=>{
      console.log(res)
    })
  }


    
  }

  ngOnInit(): void {
  }

}
