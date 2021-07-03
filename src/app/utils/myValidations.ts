import { AbstractControl } from "@angular/forms";
import { UsuariosService } from "../services/usuarios.service";
import { map } from 'rxjs/operators';

export class MyValidations{


    static numeroImpar(control: AbstractControl){
        const campo = control.value;

        if(campo%2 >0){
            return {numeroImpar:true}
        }
        return null
    }

    static numeroDivisible(divisor:number){

        return (control:AbstractControl)=>{
            const campo = control.value

            if(campo%divisor > 0){
                return {divisor:true}
            }
            return null //El formato de angular es el siguiente. Si retorno null entiende que paso la validación, si retorno cualquier otra cosa entiende que no pasó la validación

        }    
    }

    static emailValido(userService:UsuariosService){
        return (control:AbstractControl)=>{ //clousures... funciones qie retornan algo dentro de otra funcion
            const value = control.value;
                 
            return userService.checkEmail(value)
                    .pipe(
                        map(response=>{
                            return response.EmailValido? null : {noValido:true}
                        })
                    )
        }
    }
}