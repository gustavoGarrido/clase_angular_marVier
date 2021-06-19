import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-enviar-imagenes',
  templateUrl: './enviar-imagenes.component.html',
  styleUrls: ['./enviar-imagenes.component.css']
})
export class EnviarImagenesComponent implements OnInit {

  constructor(public fileUploadService:FileUploadService) { }

  fileName=""
  file:any

  private validar(event:any):Boolean{
    const maxSize = 500000;
    this.file = event.target.files
    this.fileName = event.target.files[0].name

    if(this.file.length < 0){
      console.log("No se adjunto ningun archivo")
      this.file = "";
      this.fileName = "Error en validacion"
      return false
    }

    if(this.file[0].size > maxSize){
      console.log("ha superado el tamaño permitido")
      this.file = ""
      this.fileName = "Error en validacion"
      return false
    }

    if(this.file[0].type != 'image/jpeg'){
      console.log("El formato no es el permitido")
      this.file = ""
      this.fileName = "Error en validacion"
      return false
    }

    return true

  }

  onFileChange(event:any){

    const validacion = this.validar(event)

    if(validacion){
      let file = new FormData()
      file.append('imag', this.file[0], this.fileName);

      this.fileUploadService.sendFile(file).subscribe(resp=>{
        console.log(resp)
      })
    }

  }

  ngOnInit(): void {
  }

}
